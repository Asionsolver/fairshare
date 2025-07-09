import { Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const GroupList = ({ groups }) => {

    if (!groups || groups.length === 0) {
        return (
            <div className="text-center text-muted-foreground py-6">
                <p>No groups found.</p>
                <span className="text-sm mt-1">Create a group to manage your expenses.</span>
            </div>
        )
    }
    return (
        <div className='space-y-3'>
            {groups.map((group) => {
                const balance = group.balance || 0;
                const hasBalance = balance !== 0;
                return (
                    <Link href={`/groups/${group.id}`} key={group.id} className="flex items-center justify-between hover:bg-muted p-3 rounded-md  transition-colors">
                        <div className='flex items-center gap-3'>
                            <div className="flex items-center justify-center bg-primary/10 rounded-md p-3">
                                <Users className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-medium">{group.name}</p>
                                <p className="text-sm text-muted-foreground">{group.members.length} members</p>
                            </div>
                        </div>
                        {
                            hasBalance && (
                                <span className={`text-sm font-medium ${balance < 0 ? "text-red-500" : "text-green-500"}`}>
                                    {balance > 0 ? "+" : ""} ${balance.toFixed(2)}
                                </span>
                            )
                        }
                    </Link>
                )
            })}
        </div>
    )
}

export default GroupList