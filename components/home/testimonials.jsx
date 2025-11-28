"use client";

import React, { useState, useRef } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { TESTIMONIALS } from "@/lib/landing";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const cardsPerView = 3;

  const maxIndex = TESTIMONIALS.length - cardsPerView;

  const next = () =>
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  const handleDragEnd = (_, info) => {
    const threshold = 50; // minimum pixels to count as swipe
    if (info.offset.x > threshold) prev();
    else if (info.offset.x < -threshold) next();
  };

  return (
    <section id="testimonials" className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
        <Badge className="bg-primary/20 text-primary text-sm">
          Testimonials
        </Badge>
        <h1 className="text-3xl mt-2 mx-auto md:text-4xl gradient-title">
          What our users are saying
        </h1>

        {/* Slider Track */}
        <div className="relative max-w-5xl mx-auto overflow-hidden">
          {/* Navigation Controls */}
          <div className="flex items-center justify-end mb-4 gap-1 mx-5">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="p-0.5 rounded-md bg-primary/20 hover:bg-primary/30 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="p-0.5 rounded-md bg-primary/20 hover:bg-primary/30 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </motion.button>
          </div>
          <motion.div
            ref={sliderRef}
            className="flex gap-6 cursor-grab"
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
              <div key={name} className="min-w-[318px] flex-1 flex-shrink-0">
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
        </div>

        {/* Dots Indicator */}
        <div className="flex gap-2 justify-center mt-4">
          {Array.from({ length: TESTIMONIALS.length - cardsPerView + 1 }).map(
            (_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-primary w-6" : "bg-primary/30 w-2"
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
