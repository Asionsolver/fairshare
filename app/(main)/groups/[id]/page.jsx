"use client"
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { useConvexQuery } from '@/hooks/useConvexQuery'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { BarLoader } from 'react-spinners'
import { ArrowLeft, ArrowLeftRight, PlusCircle, Users } from 'lucide-react'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ExpenseList from '@/components/common/expense-list'
import SettlementsList from '@/components/common/settlements-list'
import GroupBalances from '@/components/common/group-balances'
import GroupMembers from '@/components/common/group-members'


const GroupPage = () => {
    const params = useParams()
    const router = useRouter()
    const [activeTab, setActiveTab] = useState('expenses')

    const { data, isLoading } = useConvexQuery(api.groups.getGroupExpenses, { groupId: params.id })
    // console.log(data)

    const group = data?.group;
    const members = data?.members || [];
    const expenses = data?.expenses || [];
    const settlements = data?.settlements || [];
    const balances = data?.balances || [];
    const userLookupMap = data?.userLookupMap || {};

    // console.log("members:", members)
    if (isLoading) {
        return (
            <div className='container mx-auto py-12'>
                <BarLoader width={"100%"} color='#36d7b7' />
            </div>
        )
    }


    return (
        <div className='container mx-auto py-6 max-w-4xl'>
            <div className='mb-6'>
                <Button size={"sm"} variant='outline' onClick={() => router.back()} className={"mb-4"}>
                    <ArrowLeft className='mr-2 h-4 w-4' />
                    Back
                </Button>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-2 sm:gap-4'>
                        <div className='bg-primary p-6 sm:p-4 rounded-md'>
                            <Users className='sm:h-16 sm:w-16 w-10 h-10 text-white' />
                        </div>

                        <div>
                            <h1 className='text-2xl sm:text-4xl gradient-title'>{group?.name}</h1>
                            <p className='text-sm sm:text-lg text-muted-foreground -mt-1 sm:mt-0'>{group?.description}</p>
                            <p className='text-xs sm:text-sm text-muted-foreground  mt-1 sm:mt-0'>{members.length} members</p>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center gap-2'>
                        <Button asChild variant={"outline"} className={"px-6! sm:px-0"}>
                            <Link href={`/settlements/group/${params.id}`}>
                                <ArrowLeftRight className='mr-2 h-4 w-4' />
                                Settle up
                            </Link>
                        </Button>
                        <Button asChild variant={"outline"}>
                            <Link href={`/expenses/new`}>
                                <PlusCircle className='mr-2 h-4 w-4' />
                                Add Expense
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
                <div className='lg:col-span-2'>
                    <Card>
                        <CardHeader className={"pb-2"}>
                            <CardTitle className={"text-xl"}>Group Balances</CardTitle>

                        </CardHeader>
                        <CardContent>
                            <GroupBalances balances={balances} />
                        </CardContent>

                    </Card>
                </div>
                <div >
                    <Card>
                        <CardHeader className={"pb-2"}>
                            <CardTitle className={"text-xl"}>Members</CardTitle>

                        </CardHeader>
                        <CardContent>
                            <GroupMembers members={members} />
                        </CardContent>

                    </Card>
                </div>
            </div>

            <Tabs defaultValue="expenses" className="space-y-4" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className={"grid w-full grid-cols-2 bg-muted text-muted-foreground"}>
                    <TabsTrigger value="expenses">Expenses({expenses.length})</TabsTrigger>
                    <TabsTrigger value="settlements">Settlements({settlements.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="expenses" className={"space-y-4"}>
                    <ExpenseList expenses={expenses} showOtherPerson={true} isGroupExpense={true} userLookupMap={userLookupMap} />
                </TabsContent>
                <TabsContent value="settlements" className={"space-y-4"}>
                    <SettlementsList settlements={settlements} userLookupMap={userLookupMap} />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default GroupPage