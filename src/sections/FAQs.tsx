'use client';
import { FC, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];

const FAQs: FC = () => {

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelectedIndex = (index: number) => {
    if(selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return <section className="section" id="faqs">
    <div className="container">
      <h2 className="text-4xl md:text-5xl">FAQs</h2>
      <div className="mt-10 md:mt-14 lg:mt-16">
        {faqs.map(({ question, answer } , index) => (
          <div key={question} className="border-t last:border-b py-3 md:py-5 lg:py-7 border-stone-400 border-dotted relative isolate group/faq cursor-pointer" onClick={() => handleSelectedIndex(index)}>
            <div className="absolute bottom-0 h-0 w-full bg-stone-300 group-hover/faq:h-full transition-all duration-500 -z-10"></div>
            <div className="flex items-center justify-between gap-4 group-hover/faq:px-4 group-hover/faq:md:px-6 group-hover/faq:lg:px-8 transition-all duration-500">
              <h3 className="text-2xl md:text-3xl lg:text-4xl">{question}</h3>
              <div className={twMerge("inline-flex items-center justify-center size-11 rounded-full border border-stone-400 shrink-0 transition-all duration-500", selectedIndex === index ? "rotate-45" : "")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </div>
            <AnimatePresence>
              {selectedIndex === index && (
                <motion.div 
                  className="overflow-hidden px-4 md:px-6 lg:px-8"
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ 
                    height: "auto", 
                    opacity: 1,
                    marginTop: "1.5rem",
                    transition: {
                      height: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
                      opacity: { duration: 0.3, delay: 0.1 }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    marginTop: 0,
                    transition: {
                      height: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
                      opacity: { duration: 0.2 }
                    }
                  }}
                >
                  <div className="pb-1">
                    <p className="text-xl md:text-xl lg:text-2xl">{answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  </section>;
};

export default FAQs;
