import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is CareerPilot free to use?",
    answer: "CareerPilot offers a free plan with basic features to help you get started. For more advanced tools and unlimited usage, we offer affordable Pro and Elite plans."
  },
  {
    question: "What makes the AI different from other resume builders?",
    answer: "CareerPilot's AI is specifically trained on millions of successful resumes and job descriptions, allowing it to make highly targeted recommendations. Unlike generic tools, our AI understands industry-specific requirements and the latest hiring trends."
  },
  {
    question: "How do you tailor resumes to specific job descriptions?",
    answer: "Our AI analyzes the job description to identify key skills, qualifications, and keywords. It then compares this with your resume and suggests specific changes to highlight relevant experience and use matching terminology that will help you pass ATS systems."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes! You can cancel your subscription at any time with no questions asked. If you cancel within the first 14 days, you're eligible for a full refund under our money-back guarantee."
  },
  {
    question: "How accurate is the interview practice bot?",
    answer: "Our interview bot is trained on thousands of real interview questions from top companies. It simulates realistic interview scenarios and provides feedback based on criteria used by actual hiring managers. While no simulation is perfect, users report feeling significantly more prepared for their real interviews."
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. We take data security very seriously. Your information is encrypted and stored securely. We never share your personal data with third parties, and you can request deletion of your data at any time."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section section-dark-gradient">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Everything you need to know about CareerPilot and how it can help advance your career.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-5 flex items-center justify-between rounded-lg transition duration-300 ${
                  openIndex === index
                    ? 'bg-black-200 border-blue-electric'
                    : 'bg-black border-gray-800'
                } border`}
              >
                <span className="font-medium text-white">{faq.question}</span>
                <span className={`${openIndex === index ? 'text-blue-electric' : 'text-gray-medium'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-black-100 text-gray-medium rounded-b-lg border-x border-b border-gray-800">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;