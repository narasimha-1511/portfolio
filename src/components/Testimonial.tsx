import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

type TestimonialProps = {
  name: string;
  company: string;
  role: string;
  quote: string;
  image?: string | StaticImport;
  imagePositionY?: number;
  className?: string;
  isActive?: boolean;
} & HTMLAttributes<HTMLDivElement>

const Testimonial: FC<TestimonialProps> = ({ name, company, role, quote, image, imagePositionY, className, isActive, style, ...rest }) => {
  return isActive && (
        <motion.blockquote 
          className="md:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0">
            {quote.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.02 * index }}
                className="inline-block"
              >
                {index === 0 ? <>&ldquo;{word}</> : index === quote.split(" ").length - 1 ? <>{word}&rdquo;</> : word}&nbsp;
              </motion.span>
            ))}
          </div>
          <motion.cite
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-4 md:mt-8 md:text-lg lg:text-xl not-italic block"
          >
            {name}, {role} at {company}
          </motion.cite>
        </motion.blockquote>
      )
};

export default Testimonial;