import { STEPS } from '@/lib/landing'
import { Badge } from '../ui/badge'



const HowItWorks = () => {
    return (
        <section id='how-it-works' className='py-20 bg-foreground/5'>
            <div className='container mx-auto px-4 md:px-6 text-center space-y-6'>
                <Badge className="bg-primary/20 text-primary text-sm">
                    How It Works
                </Badge>

                <h1 className="text-3xl mt-2 mx-auto md:text-4xl gradient-title">
                    Everything you need to split expenses with friends
                </h1>

                <p className="mx-auto max-w-[43.75rem] text-muted-foreground md:text-xl/relaxed">
                    Follow these simple steps to start splitting expenses with FairShare. Our app is designed to make managing shared expenses easy and efficient.
                </p>

                <div className='grid mx-auto mt-12 max-w-5xl gap-6  lg:grid-cols-3'>
                    {
                        STEPS.map(({ description, label, title }) => (
                            <div key={title} className="flex flex-col items-center space-y-4 p-6 text-center">
                                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white'>{label}</div>
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <p className="text-sm text-muted-foreground">{description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default HowItWorks