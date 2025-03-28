  'use client';
import Button from "@/components/Button";
import { FC, MouseEvent, useEffect, useState } from "react";
import { motion } from "motion/react";

const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const topLineVariants = {
    open: { rotate: 45, translateY: 4 },
    closed: { rotate: 0, translateY: 0 }
  };

  const bottomLineVariants = {
    open: { rotate: -45, translateY: -4 },
    closed: { rotate: 0, translateY: 0 }
  };

  const handleClickMobileNavItem = (e : MouseEvent<HTMLAnchorElement> ) => {
    e.preventDefault();
    setIsOpen(false);

    const url  = new URL(e.currentTarget.href);
    const hash = url.hash;

    const targetElement = document.querySelector(hash);

    if(!targetElement) return;

    targetElement.scrollIntoView({ behavior: "smooth" });

    //console.log(e.currentTarget.href);
    // element.scrollIntoView({ behavior: "smooth" });
  };

  return <header>
    <motion.div 
      initial={{ height: 0 }}
      animate={{ height: isOpen ? "100vh" : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full overflow-hidden bg-stone-900 z-50">
      <nav className="mt-20 flex flex-col">
        {navItems.map(({ label, href }, index) => (
          <motion.a 
            key={label} 
            href={href} 
            className="text-stone-200 border-t border-dotted last:border-b border-stone-800 py-8 group/nav-item relative isolate"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: isOpen ? 0.2 + (index * 0.1) : 0 }}
            onClick={handleClickMobileNavItem}
          >
            <div className="container !max-w-full flex items-center justify-between">
              <span className="text-3xl uppercase group-hover/nav-item:text-stone-100 group-hover/nav-item:pl-4 group-hover/nav-item:font-bold transition-all duration-500">
                {label}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
            <div className="absolute bottom-0 w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-700 -z-10"></div>
          </motion.a>
        ))}
      </nav>
    </motion.div>
    <div className="fixed top-0 left-0 w-full mix-blend-difference  backdrop-blur-md z-50">
      <div className="container !max-w-full">
        <div className="flex justify-between items-center h-20">
          <div>
            <a href="/">
            <span className="text-xl font-bold uppercase text-white">
              Narasimha&nbsp;S
            </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="container !max-w-full">
        <div className="flex justify-end  items-center h-20">
          <div className="flex items-center gap-4">
            <div className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.rect 
                  x="3" 
                  y="7" 
                  width="18" 
                  height="2" 
                  fill="currentColor"
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                  variants={topLineVariants}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
                <motion.rect 
                  x="3" 
                  y="15" 
                  width="18" 
                  height="2" 
                  fill="currentColor"
                  initial="closed"
                  animate={isOpen ? "open" : "closed"}
                  variants={bottomLineVariants}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </svg>
            </div>
            <Button variant="primary" className="hidden md:block lg:block">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
