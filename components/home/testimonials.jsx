"use client";

import React, { useState, useRef, useEffect } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { TESTIMONIALS } from "@/lib/landing";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(3);

  const maxIndex = Math.max(TESTIMONIALS.length - cardsPerView, 0);

  const next = () =>
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  const handleDragEnd = (_, info) => {
    const threshold = 50; // minimum pixels to count as swipe
    if (info.offset.x > threshold) prev();
    else if (info.offset.x < -threshold) next();
  };
  // Add auto-slide effect
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768)
        setCardsPerView(1); // small
      else if (window.innerWidth < 1024)
        setCardsPerView(2); // medium
      else setCardsPerView(3); // large
    };

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // change 5000 to however many milliseconds you want

    return () => clearInterval(interval); // cleanup on unmount
  }, [currentIndex]); // you can also leave the dependency array empty and just use a ref to avoid repeated intervals

  return (
    <section id="testimonials" className="py-20 bg-foreground/5">
      <motion.div
        className="container mx-auto px-4 md:px-6 text-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={itemVariants}>
          <Badge className="bg-primary/20 text-primary text-sm">
            Testimonials
          </Badge>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl mt-2 mx-auto md:text-4xl gradient-title"
        >
          What our users are saying
        </motion.h1>

        {/* Slider Track */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-5xl mx-auto overflow-hidden"
        >
          {/* Navigation Controls */}
          <div className=" items-center justify-end mb-4 gap-1  hidden md:flex lg:mx-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="p-0.5 rounded-md bg-primary/20 hover:bg-primary/30 transition-colors cursor-pointer"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="p-0.5 rounded-md bg-primary/20 hover:bg-primary/30 transition-colors cursor-pointer"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </motion.button>
          </div>
          <motion.div
            ref={sliderRef}
            className="flex md:gap-6 cursor-grab "
            animate={{ x: -currentIndex * (100 / cardsPerView) + "%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{
              left: -maxIndex * (100 / cardsPerView) + "%",
              right: 0,
            }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
          >
            {TESTIMONIALS.map(({ name, quote, role, image }) => (
              <div
                key={name}
                className="min-w-full md:min-w-[21.25rem] lg:min-w-[19.875rem] flex-1 flex-shrink-0 "
              >
                <Card className="flex flex-col items-center p-6 shadow-lg h-full">
                  <CardContent className="p-6 space-y-4">
                    <p className="text-sm">{quote}</p>
                    <div className="flex flex-col items-center space-y-4 mt-4">
                      <Avatar>
                        <AvatarImage src={image} alt={name} />
                        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="text-center">
                        <p className="text-sm">{name}</p>
                        <p className="text-xs text-muted-foreground">{role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div
          className="flex gap-2 justify-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {Array.from({ length: TESTIMONIALS.length - cardsPerView + 1 }).map(
            (_, idx) => {
              const isActive = idx === currentIndex;

              return (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className="h-2 rounded-full cursor-pointer bg-primary/30 overflow-hidden"
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{ width: isActive ? "24px" : "8px" }} // base width
                  whileHover={{ scale: 1.2 }}
                >
                  {isActive && (
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }} // match 5000ms
                    />
                  )}
                </motion.button>
              );
            }
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSlider;
