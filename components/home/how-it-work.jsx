"use client";

import { STEPS } from "@/lib/landing";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-foreground/5">
      <motion.div
        className="container mx-auto px-4 md:px-6 text-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <Badge className="bg-primary/20 text-primary text-sm">
            How It Works
          </Badge>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl mt-2 mx-auto md:text-4xl gradient-title"
        >
          Everything you need to split expenses with friends
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-[43.75rem] text-muted-foreground md:text-xl/relaxed"
        >
          Follow these simple steps to start splitting expenses with FairShare.
          Our app is designed to make managing shared expenses easy and
          efficient.
        </motion.p>

        <motion.div
          className="grid mx-auto mt-12 max-w-5xl gap-6 lg:grid-cols-3"
          variants={containerVariants}
        >
          {STEPS.map(({ description, label, title }, i) => (
            <motion.div
              key={title}
              className="flex flex-col items-center space-y-4 p-6 text-center rounded-lg"
              variants={stepVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                {label}
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
