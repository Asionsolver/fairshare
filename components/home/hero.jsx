import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="mt-20 pb-12 space-y-10 md:space-y-20 px-5">
      <motion.div
        className="container mx-auto px-4 md:px-6 text-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <Badge className="bg-primary/20 text-primary text-sm">
            Split Smart
          </Badge>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold mx-auto md:text-7xl gradient-title"
        >
          The smartest way to split expenses with friends
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-[44.75rem] text-muted-foreground md:text-2xl/relaxed"
        >
          Track shared expenses, split bills effortlessly, and settle up with
          friends.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Button asChild size={"lg"}>
            <Link href={"/dashboard"} className="text-white flex items-center">
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
        </motion.div>
      </motion.div>

      <motion.div
        className="container mx-auto"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="gradient p-1 aspect-auto rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/img/hero.png"
            alt="Hero Image"
            layout="responsive"
            width={1000}
            height={800}
            priority
            className="rounded-lg shadow-lg mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
