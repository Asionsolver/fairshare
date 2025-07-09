import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react'

const ExpenseSummary = ({ monthlySpending, totalSpent }) => {

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    const chartData = monthlySpending?.map((items, index) => {
        const data = new Date(items.month);
        const previousAmount = index > 0 ? monthlySpending[index - 1].total : 0;
        const isDecrease = index > 0 && items.total < previousAmount;

        return {
            name: monthNames[data.getMonth()],
            amount: items.total,
            isDecrease,
            previousAmount
        }
    }) || [];


    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Expense Summary
                </CardTitle>
                {/* <CardDescription>
                    {currentYear} - {monthNames[currentMonth]}
                </CardDescription> */}
            </CardHeader>
            <CardContent>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-muted rounded-lg p-4'>
                        <p className='text-sm text-muted-foreground'>Total this month</p>
                        <h3 className='text-2xl font-bold mt-1'>${monthlySpending?.[currentMonth]?.total.toFixed(2) || "0.00"}</h3>
                    </div>

                    <div className='bg-muted rounded-lg p-4'>
                        <p className='text-sm text-muted-foreground'>Total this year</p>
                        <h3 className='text-2xl font-bold mt-1'>${totalSpent?.toFixed(2) || "0.00"}</h3>
                    </div>
                </div>

                <div className='h-64 mt-6'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={chartData}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip
                                content={({ payload }) => {
                                    if (payload && payload.length) {
                                        const { name, amount, isDecrease, previousAmount } = payload[0].payload;
                                        const difference = previousAmount ? amount - previousAmount : 0;
                                        const percentageChange = previousAmount ? ((difference / previousAmount) * 100) : 0;

                                        return (
                                            <div className="bg-background p-3 rounded-lg shadow-lg border">
                                                <p className="font-bold text-lg">{name}</p>
                                                <p className={`text-lg font-semibold ${isDecrease ? 'text-red-500' : 'text-green-600'}`}>
                                                    ${amount.toFixed(2)}
                                                </p>
                                                {previousAmount > 0 && (
                                                    <div className="mt-2 text-sm">
                                                        <p className="text-muted-foreground">
                                                            Previous: ${previousAmount.toFixed(2)}
                                                        </p>
                                                        <p className={`font-medium ${isDecrease ? 'text-red-500' : difference > 0 ? 'text-green-600' : 'text-gray-500'}`}>
                                                            {isDecrease ? '↓' : difference > 0 ? '↑' : '='}
                                                            {difference !== 0 && ` $${Math.abs(difference).toFixed(2)} (${Math.abs(percentageChange).toFixed(1)}%)`}
                                                            {difference === 0 && ' No change'}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            // formatter={(value) => `$${value.toFixed(2)}, "Amount"`}
                            // labelFormatter={() => "Monthly Spending"}
                            />

                            <Bar dataKey="amount" fill="#c96442" radius={4} activeBar={<Rectangle fill="pink" stroke="blue" />} />

                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <p className='text-sm text-muted-foreground mt-2 text-center'>
                    Monthly spending for {currentYear}
                </p>
            </CardContent>
        </Card>
    )
}

export default ExpenseSummary