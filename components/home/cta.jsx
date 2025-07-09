import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"


const CTA = () => {
    return (
        <section className="py-20 gradient">
            <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">Ready to simplify your expenses?</h2>
                <p className="mx-auto max-w-[37.5rem] text-white md:text-xl/relaxed">Join thousands of users who are managing their expenses effortlessly with Splitr.</p>

                <Button asChild size={"lg"}>
                    <Link
                        href={"/dashboard"}
                        className="text-white flex items-center"
                    >
                        <span>Get Started</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </section>
    )
}

export default CTA