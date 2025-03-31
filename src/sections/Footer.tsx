'use client';
import Button from "@/components/Button";
import { FC } from "react";
import { useTextRevealAnimations } from "@/hooks/useTextRevealAnimations";

const navItems = [
  {
    href: '#intro',
    label: 'Home'
  },{
    href: '#projects',
    label: 'Projects'
  },{
    href: '#testimonials',
    label: 'Testimonials'
  },{
    href: '#faqs',
    label: 'Faqs'
  },{
    href: '#contact',
    label: 'Contact'
  },
]

const Footer: FC = () => {

  const {textRevealAnimations} = useTextRevealAnimations();


  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const hash = e.currentTarget.getAttribute('href');

    const targetElement = document.querySelector(hash!);

    if(!targetElement) return;

    targetElement.scrollIntoView({ behavior: "smooth" });
  };
  return <footer className="bg-stone-900 text-white" id="contact">
    <div className="container">
      <div className="section">
        <div className="flex items-center gap-3">
          <span className="size-3 rounded-full bg-green-400"></span>
          <span className="uppercase">One spot available for next month </span>
        </div>
        <div className="grid md:grid-cols-3 md:items-center">
          <div className="md:col-span-2">
            <h2 className="mt-8 text-4xl md:text-7xl font-extralight">Enough talk Let's make something great together.</h2>
            <Button variant="secondary" 
            className="mt-8"
            iconAfter={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
            }>s.narasimha.2005@gmail.com</Button>
          </div>
          <div className="md:col-span-1">
            <nav className="flex flex-col gap-8 mt-16 uppercase md:items-end md:mt-0">
              {navItems.map(({href , label}) => {
                return (
                  <a href={href} key={label} onClick={handleClick}>
                    <Button variant="text">
                      {label}
                    </Button>
                  </a>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
      <p className="py-2 text-white/30 text-sm md:text-lg">Copyright &copy; Narasimha S &bull; All rights reserved</p>
    </div>
  </footer>;
};

export default Footer;
