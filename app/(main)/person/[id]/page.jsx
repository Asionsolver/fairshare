"use client"
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { useConvexQuery } from '@/hooks/useConvexQuery'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { BarLoader } from 'react-spinners'
import { ArrowLeft, ArrowLeftRight, PlusCircle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ExpenseList from '@/components/common/expense-list'
import SettlementsList from '@/components/common/settlements-list'

const PersonPage = () => {
    const params = useParams()
    const router = useRouter()
    const [activeTab, setActiveTab] = useState('expenses')

    const { data, isLoading } = useConvexQuery(api.expenses.getExpensesBetweenUsers, { userId: params.id })

    if (isLoading) {
        return (
            <div className='container mx-auto py-12'>
                <BarLoader width={"100%"} color='#36d7b7' />
            </div>
        )
    }

    const otherUser = data?.otherUser
    const expenses = data?.expenses || []
    const settlements = data?.settlements || []
    const balance = data?.balance || 0
    return (
        <div className='container mx-auto py-6 max-w-4xl'>
            <div className='mb-6'>
                <Button size={"sm"} variant='outline' onClick={() => router.back()} className={"mb-4"}>
                    <ArrowLeft className='mr-2 h-4 w-4' />
                    Back
                </Button>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-2 sm:gap-4'>
                        <Avatar className='sm:h-16 sm:w-16 w-10 h-10'>
                            <AvatarImage src={otherUser?.imageUrl} />
                            <AvatarFallback>
                                {otherUser?.name?.charAt(0).toUpperCase() || '?'}
                            </AvatarFallback>
                        </Avatar>

                        <div>
                            <h1 className='text-2xl sm:text-4xl gradient-title'>{otherUser?.name}</h1>
                            <p className='text-xs sm:text-sm text-muted-foreground -mt-1 sm:mt-0'>{otherUser?.email}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Button asChild variant={"outline"}>
                            <Link href={`/settlements/user/${params.id}`}>
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
            <Card className='mb-6'>
                <CardHeader className={"pb-2"}>
                    <CardTitle>Balance</CardTitle>

                </CardHeader>
                <CardContent>
                    <div className='flex items-center justify-between'>
                        <div>
                            {balance === 0 ? (
                                <p>You are all settled up</p>
                            ) : balance > 0 ? (
                                <p>
                                    <span className='font-medium'>{otherUser?.name}</span>
                                    <span> owes you</span>
                                </p>
                            ) : (
                                <p>
                                    You owe
                                    <span className='font-medium'>
                                        {otherUser?.name}
                                    </span>
                                </p>

                            )}
                        </div>
                        <div className={`text-2xl font-bold ${balance > 0 ? 'text-green-600 dark:text-green-500 ' : 'text-red-600 dark:text-red-500'}`}>
                            ${Math.abs(balance).toFixed(2)}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Tabs defaultValue="expenses" className="space-y-4" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className={"grid w-full grid-cols-2 bg-muted text-muted-foreground"}>
                    <TabsTrigger value="expenses">Expenses({expenses.length})</TabsTrigger>
                    <TabsTrigger value="settlements">Settlements({settlements.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="expenses" className={"space-y-4"}>
                    <ExpenseList expenses={expenses} showOtherPerson={true} otherPersonId={params.id} userLookupMap={{ [otherUser.id]: otherUser }} />
                </TabsContent>
                <TabsContent value="settlements" className={"space-y-4"}>
                    <SettlementsList settlements={settlements} userLookupMap={{ [otherUser.id]: otherUser }} />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default PersonPage