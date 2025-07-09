import React from 'react'
import { Badge } from '../ui/badge'


import { FEATURES } from '@/lib/landing'
import { Card } from '../ui/card'

const Feature = () => {
    return (
        <section id='features' className='py-20 bg-foreground/5'>
            <div className='container mx-auto px-4 md:px-6 text-center space-y-6'>
                <Badge className="bg-primary/20 text-primary text-sm">
                    Features
                </Badge>

                <h1 className="text-3xl mt-2 mx-auto md:text-4xl gradient-title">
                    Everything you need to split expenses with friends
                </h1>

                <p className="mx-auto max-w-[43.75rem] text-muted-foreground md:text-xl/relaxed">
                    Our app offers a range of features to make splitting expenses easy and efficient.

                </p>

                <div className='grid mx-auto mt-12 max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        FEATURES.map(({ title, Icon, bg, color, description }) => (
                            <Card key={title} className="flex flex-col items-center space-y-4 p-6 text-center">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${bg} ${color} mb-4`}>
                                    <Icon className={`w-8 h-8 ${color}`} />
                                </div>
                                <h3 className="text-lg font-semibold">{title}</h3>
                                <p className="text-sm text-muted-foreground">{description}</p>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Feature