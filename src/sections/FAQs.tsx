import { FC } from "react";

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
  return <section className="section">
    <div className="container">
      <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
      <div className="mt-10 md:mt-16 lg:mt-20">
        {faqs.map(({ question, answer }) => (
          <div key={question} className="border-t last:border-b py-6 md:py-8 lg:py-10 border-stone-400 border-dotted">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl">{question}</h3>
              <div className="inline-flex items-center justify-center size-11 rounded-full border border-stone-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </div>
            {/* <p className="mt-4 md:mt-6 lg:mt-8">{answer}</p> */}
          </div>
        ))}
      </div>
    </div>
  </section>;
};

export default FAQs;
