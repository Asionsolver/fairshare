"use client"

import { BarLoader } from "react-spinners"
import { api } from "../../../convex/_generated/api"
import { useConvexQuery } from "../../../hooks/useConvexQuery"
import { Button } from "../../../components/ui/button"
import { ChevronRight, Plus, PlusCircle, Users } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import ExpenseSummary from "./_components/ExpenseSummary"
import BalanceSummary from "./_components/BalanceSummary"
import GroupList from "./_components/GroupList"


const DashboardPage = () => {

    const { data: balances, isLoading: balancesLoading } = useConvexQuery(api.dashboard.getUserBalances)
    const { data: groups, isLoading: groupsLoading } = useConvexQuery(api.dashboard.getUserGroups)
    const { data: totalSpent, isLoading: totalSpentLoading } = useConvexQuery(api.dashboard.getTotalSpent)
    const { data: monthlySpending, isLoading: monthlyLoading } = useConvexQuery(api.dashboard.getMonthlySpending)

    // console.log(balances)
    const isLoading = balancesLoading || groupsLoading || totalSpentLoading || monthlyLoading;

    return (
        <div className="container mx-auto py-6 space-y-6">
            {
                isLoading ?
                    (<div className="w-full py-12 flex justify-center">
                        <BarLoader width={"100%"} color="#c96442" />
                    </div>)
                    :
                    (
                        <>
                            <div className="flex justify-between items-center mx-4">
                                <h1 className="text-5xl gradient-title">Dashboard</h1>
                                <Button asChild>
                                    <Link href="/expenses/new">
                                        <PlusCircle className="mr-2 h-4 w-4" />
                                        Add Expense
                                    </Link>
                                </Button>
                            </div>
                            <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mt-8 mx-4">
                                <Card >
                                    <CardHeader className="pb-2">
                                        <CardTitle className={"text-sm font-medium text-muted-foreground"}>Total Balance</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="font-bold">
                                            {
                                                balances.totalBalance > 0 ? (
                                                    <span className="text-green-600 text-2xl ">+${balances?.totalBalance.toFixed(2)}</span>
                                                ) : balances?.totalBalance < 0 ? (
                                                    <span className="text-red-600 text-2xl">-${Math.abs(balances?.totalBalance.toFixed(2))}</span>
                                                ) : (
                                                    <span>$0.00</span>
                                                )
                                            }
                                        </div>
                                        <p className="text-xs to-muted-foreground mt-1">
                                            {
                                                balances?.totalBalance > 0 ? "You are owed money" : balances?.totalBalance < 0 ? "You owe money" : "All settled up!"
                                            }
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card >
                                    <CardHeader className="pb-2">
                                        <CardTitle className={"text-sm font-medium text-muted-foreground"}>You are owed</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="">
                                            <div className="text-green-600 text-2xl font-bold">
                                                ${balances?.youAreOwed.toFixed(2)}
                                            </div>
                                            <p className="text-xs to-muted-foreground mt-1">
                                                {
                                                    `From ${balances?.oweDetails.youAreOwedBy.length || 0} people`
                                                }
                                            </p>
                                        </div>

                                    </CardContent>
                                </Card>
                                <Card >
                                    <CardHeader className="pb-2">
                                        <CardTitle className={"text-sm font-medium text-muted-foreground"}>You owed</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {
                                            balances?.oweDetails?.youOwe?.length > 0 ? (
                                                <>
                                                    <div className="text-2xl font-bold text-red-600">
                                                        ${balances?.youOwe.toFixed(2)}
                                                    </div>
                                                    <p className="text-xs to-muted-foreground mt-1">
                                                        {
                                                            `To ${balances?.oweDetails.youOwe.length || 0} people`
                                                        }
                                                    </p>
                                                </>

                                            ) : (
                                                <div>
                                                    <div className="text-2xl font-bold text-green-600">
                                                        $0.00
                                                    </div>
                                                    <p className="text-xs to-muted-foreground mt-1">
                                                        You don't owe anyone
                                                    </p>
                                                </div>
                                            )
                                        }

                                    </CardContent>
                                </Card>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  mx-4">
                                {/* Left Column */}

                                <div className="lg:col-span-2 space-y-6">
                                    {/* Expense Summary */}
                                    <ExpenseSummary
                                        monthlySpending={monthlySpending}
                                        totalSpent={totalSpent}
                                    />
                                </div>
                                {/* Right Column */}
                                <div className="space-y-6">
                                    {/* Balance Summary */}
                                    <Card >
                                        <CardHeader className="pb-2 flex justify-between items-center">
                                            <CardTitle >Balance Details</CardTitle>
                                            <Button asChild variant={"link"} className="text-sm">
                                                <Link href="/contacts" >
                                                    View All
                                                    <ChevronRight className="ml-1 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </CardHeader>
                                        <CardContent>
                                            <BalanceSummary balances={balances} />

                                        </CardContent>
                                    </Card>
                                    {/* Group */}

                                    <Card >
                                        <CardHeader className="pb-2 flex justify-between items-center">
                                            <CardTitle >Your Groups</CardTitle>
                                            <Button asChild variant={"link"} className="text-sm">
                                                <Link href="/contacts" >
                                                    View All
                                                    <ChevronRight className="ml-1 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </CardHeader>
                                        <CardContent>
                                            <GroupList groups={groups} />
                                        </CardContent>
                                        <CardFooter>
                                            <Button asChild variant={"outline"} className="w-full">
                                                <Link href="/contacts?createGroup=true" >
                                                    <Users className="ml-1 h-4 w-4" />
                                                    Create new group
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </div>
                        </>
                    )
            }
        </div>
    )
}

export default DashboardPage