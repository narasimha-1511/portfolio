'use client'
import { FC, useEffect, useRef } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import SplitType from "split-type";
import { motion, useAnimate , useScroll, useTransform } from "motion/react";
import { stagger } from "motion";

const Hero: FC = () => {

  const [titleScope , titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ['start start', 'end end']
  });

  const potraitWidth = useTransform(scrollYProgress , [0,1] , ['100%', '240%'])

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "words,lines",
      tagName: "span",
    });

    titleAnimate(titleScope.current.querySelectorAll('.word'), {
      transform: "translateY(0)",
    }, {
      duration: 0.5,
      delay: stagger(0.2)
    })

  }, []);

  return <section>
    <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
      <div className="md:col-span-7 flex flex-col justify-center">
        <div className="container !max-w-full">
          <motion.h1
            ref={titleScope}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0">
            Merging Code and Creativity to Craft Exceptional Digital Experiences
          </motion.h1>
          <div className="flex flex-col mt-10 items-start md:flex-row md:items-center gap-6">
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.75 }}>
              <Button variant="secondary" iconAfter={
                <div className="overflow-hidden size-5">
                  <div className=" h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"   className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"   className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                  </div>
                </div>
              }>
                View My Work
              </Button>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}>
              <Button variant="text">
                Let&apos;s Chat
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="md:col-span-5 relative">
        <motion.div
          className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full" style={{
            width: potraitWidth
          }} >
          <Image src={heroImage} alt="Hero Image" className="size-full object-cover" />
        </motion.div>
      </div>
    </div>
    <div className="md:h-[200vh]" ref={scrollingDiv}>
    </div>
  </section>;
};

export default Hero;
