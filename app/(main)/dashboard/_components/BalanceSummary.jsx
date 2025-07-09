import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const BalanceSummary = ({ balances }) => {
    if (!balances) {
        return null
    }

    const { oweDetails } = balances;
    // console.log("Balance Summary:", oweDetails);
    const hasOwed = oweDetails.youAreOwedBy.length > 0;
    const hasOwing = oweDetails.youOwe.length > 0;


    return (
        <div className='space-y-4'>
            {
                !hasOwed && !hasOwing && (
                    <div className="text-center  py-6">
                        <p className='text-muted-foreground'>You are all settled up!</p>
                    </div>
                )
            }

            {
                hasOwed && (
                    <div>
                        <h3 className='text-sm font-medium flex items-center mb-3'>
                            <ArrowUpCircle className='inline mr-2 h-4 w-4 text-green-500' />
                            Owed to You
                        </h3>

                        <div className='space-y-3'>
                            {
                                oweDetails.youAreOwedBy.map((item) => (
                                    <Link href={`/person/${item.userId}`} key={item.userId} className='flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors'>
                                        <div className='flex items-center space-x-2'>
                                            <Avatar className={'w-8 h-8'}>
                                                <AvatarImage src={item.imageUrl} alt={item.name} />
                                                <AvatarFallback >{item.name?.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className='text-sm'> {item.name}</span>
                                        </div>
                                        <span className='text-md text-green-600 font-medium'> {item.amount.toFixed(2)}</span>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                )
            }
            {
                hasOwing && (
                    <div>
                        <h3 className='text-sm font-medium flex items-center mb-3'>
                            <ArrowDownCircle className='inline mr-2 h-4 w-4 text-red-500' />
                            Owed by You
                        </h3>

                        <div className='space-y-3'>
                            {
                                oweDetails.youOwe.map((item) => (
                                    <Link href={`/person/${item.userId}`} key={item.userId} className='flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors'>
                                        <div className='flex items-center space-x-2'>
                                            <Avatar className={'w-8 h-8'}>
                                                <AvatarImage src={item.imageUrl} alt={item.name} />
                                                <AvatarFallback >{item.name?.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <span className='text-sm'> {item.name}</span>
                                        </div>
                                        <span className='text-md text-red-600 font-medium'> {item.amount.toFixed(2)}</span>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BalanceSummary