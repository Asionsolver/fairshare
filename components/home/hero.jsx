import Link from "next/link"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="mt-20 pb-12 space-y-10 md:space-y-20 px-5">
            <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
                <Badge className="bg-primary/20 text-primary text-sm">
                    Split Smart
                </Badge>

                <h1 className="text-4xl font-bold mx-auto md:text-7xl gradient-title">
                    The smartest way to split expenses with friends
                </h1>

                <p className="mx-auto max-w-[44.75rem] text-muted-foreground md:text-2xl/relaxed">
                    Track shared expenses, split bills effortlessly, and settle up with
                    friends.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <Button asChild size={"lg"}>
                        <Link
                            href={"/dashboard"}
                            className="text-white flex items-center"
                        >
                            <span>Get Started</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>

                    <Button variant={"outline"} asChild size={"lg"}>
                        <Link
                            href={"#how-it-works"}
                            className="dark:text-white flex items-center"
                        >
                            See How It Works
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="container mx-auto ">
                <div className="gradient p-1 aspect-[16/9] rounded-lg shadow-lg">
                    <Image
                        src="/img/hero.png"
                        alt="Hero Image"
                        layout="responsive"
                        width={1280}
                        height={720}
                        priority
                        className="rounded-lg shadow-lg mx-auto"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero