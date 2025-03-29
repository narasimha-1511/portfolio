'use client';
import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

const Testimonials: FC = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ['start end', 'end start'],
  }); 

  const transformTop = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  const handleTestimonialNext = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTestimonialPrev = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section" id="testimonials">
      <h2 ref={titleRef} className="flex flex-col overflow-hidden whitespace-nowrap text-4xl md:text-7xl lg:text-8xl">
        <motion.span style={{ x: transformBottom }}>
          Some nice words from my past clients
        </motion.span>
        <motion.span
          style={{ x: transformTop }}
          className="self-end text-red-orange-500"
        >
          Some nice words from my past clients
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20 md:mt-16 lg:mt-20">
          <div className="relative h-[600px] md:h-[420px] lg:h-[480px]">
            <AnimatePresence>
              {testimonials.map(({ name, company, role, quote, image, imagePositionY }, index) => {
                const distance = Math.abs(index - testimonialIndex);
                const shouldShow = distance <= 2; // Only show 2 items before and after current

                if (!shouldShow) return null;

                return (
                  <div 
                    key={name} 
                    className="absolute inset-0"
                    style={{
                      zIndex: testimonials.length - distance,
                    }}
                  >
                    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={twMerge("grid md:grid-cols-5 md:gap-20 md:items-center lg:gap-28 pointer-events-none", testimonialIndex === index && "pointer-events-auto")}
    >
      <div className="relative md:col-span-2 aspect-square md:aspect-[9/14] lg:aspect-[9/12]">
        <motion.div
          className="absolute inset-0 origin-bottom"
          initial={{ 
            opacity: 0,
            scale: 0.9,
            rotate: randomRotateY()
          }}
          animate={{
            opacity: 1,
            scale: testimonialIndex === index ? 1 : 0.95,
            rotate: testimonialIndex === index ? 0 : randomRotateY(),
            y: testimonialIndex === index ? [0, -70, 0] : 0
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            rotate: randomRotateY()
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut",
            y: { duration: 1, ease: "easeInOut", repeatType: "reverse" }
          }}
          style={{
            filter: testimonialIndex === index ? 'none' : 'brightness(0.7)',
            transform: `perspective(1000px)`,
          }}
        >
          <Image 
            src={image} 
            alt={name} 
            className="size-full object-cover rounded-3xl"
            style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
          />
        </motion.div>
      </div>
                    <Testimonial
                      isActive={index === testimonialIndex}
                      name={name}
                      company={company}
                      role={role}
                      quote={quote}
                      image={image}
                      imagePositionY={imagePositionY}
                    />
          </motion.div>
                  </div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex relative justify-center gap-4 mt-6 lg:mt-24 lg:z-50">
          <button onClick={handleTestimonialPrev} className="border rounded-full size-11 inline-flex items-center justify-center border-stone-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button onClick={handleTestimonialNext} className="border rounded-full size-11 inline-flex items-center justify-center border-stone-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
