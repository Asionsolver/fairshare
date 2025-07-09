"use client"


import { useConvexQuery } from "@/hooks/useConvexQuery"
import { Card, CardContent } from "../ui/card"
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { api } from "@/convex/_generated/api"


const GroupBalances = ({ balances }) => {
    const { data: currentUser } = useConvexQuery(api.users.getCurrentUser);
    if (!balances?.length || !currentUser) {
        return (
            <Card>
                <CardContent className="text-center py-4 text-muted-foreground">
                    No balances Information available.
                </CardContent>
            </Card>
        )

    }

    // Find current user's balance and show message if not found in the group
    const me = balances.find((balance) => balance.id === currentUser._id);
    if (!me) {
        return (
            <Card>
                <CardContent className="text-center py-4 text-muted-foreground">
                    You're not part of this group .
                </CardContent>
            </Card>
        )

    }
    const userMap = Object.fromEntries(balances.map((b) => [b.id, b]));
    // who owes me?
    const owedByMembers = me.owedBy.map(({ from, amount }) => ({ ...userMap[from], amount })).sort((a, b) => b.amount - a.amount);

    // who do I owe?
    const owingToMembers = me.owes.map(({ to, amount }) => ({ ...userMap[to], amount })).sort((a, b) => b.amount - a.amount);

    const isAllSettledUp = me.totalBalance === 0 && owedByMembers.length === 0 && owingToMembers.length === 0;
    return (
        <div className="space-y-4">
            <div className="text-center pb-4 border-b border-secondary/30">
                <p className="text-sm text-muted-foreground mb-1">Your balance</p>
                <p className={`text-2xl font-bold ${me.totalBalance > 0 ? "text-green-500" : me.totalBalance < 0 ? "text-red-500" : "text-muted-foreground"}`}>
                    {
                        me.totalBalance > 0
                            ? `+$${me.totalBalance.toFixed(2)}`
                            : me.totalBalance < 0
                                ? `-$${Math.abs(me.totalBalance).toFixed(2)}`
                                : "$0.00"
                    }
                </p>
            </div>

            {isAllSettledUp ? (
                <div className="text-center py-4">
                    <p className="text-muted-foreground">Everyone is settled up!</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {
                        owedByMembers.length > 0 && (
                            <div>
                                <h3 className='text-sm font-medium flex items-center mb-3'>
                                    <ArrowUpCircle className='inline mr-2 h-4 w-4 text-green-500' />
                                    Owed to You
                                </h3>

                                <div className='space-y-3'>
                                    {
                                        owedByMembers.map((item) => (

                                            <div key={item.id} className='flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors'>
                                                <div className='flex items-center space-x-2'>
                                                    <Avatar className={'w-8 h-8'}>
                                                        <AvatarImage src={item.imageUrl} alt={item.name} />
                                                        <AvatarFallback >{item.name?.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                    <span className='text-sm'> {item.name}</span>
                                                </div>
                                                <span className='text-md text-green-600 font-medium'> {item.amount.toFixed(2)}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }

                    {
                        owingToMembers.length > 0 && (
                            <div >
                                <h3 className='text-sm font-medium flex items-center mb-3'>
                                    <ArrowDownCircle className='inline mr-2 h-4 w-4 text-red-500' />
                                    Owed by You
                                </h3>

                                <div className='space-y-3'>
                                    {
                                        owingToMembers.map((item) => (
                                            <div key={item.id} className='flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors'>
                                                <div className='flex items-center space-x-2'>
                                                    <Avatar className={'w-8 h-8'}>
                                                        <AvatarImage src={item.imageUrl} alt={item.name} />
                                                        <AvatarFallback >{item.name?.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                    <span className='text-sm'> {item.name}</span>
                                                </div>
                                                <span className='text-md text-red-600 font-medium'> {item.amount.toFixed(2)}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    )
}

export default GroupBalances