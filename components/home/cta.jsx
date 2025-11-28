import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const CTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 gradient overflow-hidden">
      <motion.div
        className="container mx-auto px-4 md:px-6 text-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-extrabold tracking-tight md:text-4xl text-white"
        >
          Ready to simplify your expenses?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-[37.5rem] text-white md:text-xl/relaxed"
        >
          Join thousands of users who are managing their expenses effortlessly
          with FairShare.
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button asChild size={"lg"} className="group">
              <Link
                href={"/dashboard"}
                className="text-white flex items-center gap-2"
              >
                <span>Get Started</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-5 w-20 h-20 bg-white/10 rounded-full blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-5 w-32 h-32 bg-white/5 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

export default CTA;
