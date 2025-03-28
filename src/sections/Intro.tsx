'use client';
import { FC, useEffect } from "react";
import { motion, useAnimate, useInView } from "motion/react"
import SplitType from "split-type";
import { stagger } from "motion";

const Intro: FC = () => {

  const [scope , animate] = useAnimate();
  const inView = useInView(scope , {
    once: true
  });

  useEffect(() => {
    new SplitType(scope.current?.querySelector("h2"), { types: "lines,words" , tagName: "span" });
  },[])

  useEffect(() => {
    if(inView && scope.current){
      animate(scope.current?.querySelectorAll(".word"), { 
        transform: "translateY(0)"
      }, { duration: 0.3 , delay: stagger(0.2) })
    }
  },[inView, animate, scope]);

  return <section className="section mt-12 md:mt-16 lg:mt-20" id="intro">
    <motion.div className="container" ref={scope}>
      <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
        Building beautiful websites with clean code and thoughtful design
        to help your business grow and stand out online
      </h2>
    </motion.div>
  </section>;
};

export default Intro;
