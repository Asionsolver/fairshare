


import React from 'react'
import { Badge } from '../ui/badge'

import { Card, CardContent } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { TESTIMONIALS } from '@/lib/landing'


const Testimonials = () => {
    return (
        <section id='testimonials' className='py-20 bg-foreground/5'>
            <div className='container mx-auto px-4 md:px-6 text-center space-y-6'>
                <Badge className="bg-primary/20 text-primary text-sm">
                    Testimonials
                </Badge>

                <h1 className="text-3xl mt-2 mx-auto md:text-4xl gradient-title">
                    What our users are saying
                </h1>



                <div className='grid mx-auto mt-12 max-w-5xl gap-6 md:grid-cols-2  lg:grid-cols-3'>
                    {
                        TESTIMONIALS.map(({ quote, name, role, image }) => (
                            <Card key={name} className='flex flex-col items-center p-6 shadow-lg'>
                                <CardContent className='p-6 space-y-4'>
                                    <p className='text-sm'>{quote}</p>
                                    <div className='flex flex-col items-center space-y-4 mt-4'>
                                        <Avatar>
                                            <AvatarImage src={image} alt={name} />
                                            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                                        </Avatar>

                                        <div className='text-center'>
                                            <p className='text-sm'>{name}</p>
                                            <p className='text-xs text-muted-foreground'>{role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials