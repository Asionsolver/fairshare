import React from "react";
import { Badge } from "../ui/badge";
import { FEATURES } from "@/lib/landing";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

const Feature = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-primary/20 text-primary text-sm">Features</Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl mt-2 mx-auto md:text-4xl gradient-title"
        >
          Everything you need to split expenses with friends
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-[43.75rem] text-muted-foreground md:text-xl/relaxed"
        >
          Our app offers a range of features to make splitting expenses easy and
          efficient.
        </motion.p>

        <motion.div
          className="grid mx-auto mt-12 max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FEATURES.map(({ title, Icon, bg, color, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="flex flex-col items-center space-y-4 p-6 text-center h-full">
                <motion.div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${bg} ${color} mb-4`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className={`w-8 h-8 ${color}`} />
                </motion.div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
