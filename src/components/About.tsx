import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, BrainCircuit, Briefcase } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="h-5 w-5 text-blue-electric" />,
      text: "AI-optimized resumes based on job descriptions"
    },
    {
      icon: <BrainCircuit className="h-5 w-5 text-blue-electric" />,
      text: "Instant feedback from AI on interviews"
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-blue-electric" />,
      text: "Salary trends & job market insights"
    },
    {
      icon: <Briefcase className="h-5 w-5 text-blue-electric" />,
      text: "LinkedIn and portfolio enhancements"
    }
  ];

  return (
    <section id="about" className="section section-dark-gradient relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">What Makes <span className="text-gradient">CareerPilot</span> Unique?</h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Powered by advanced AI, we analyze job markets and optimize your career profile to maximize your chances of landing interviews and offers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-black-200 to-black border border-gray-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-[80%] max-h-[80%] bg-black-200 rounded-xl overflow-hidden flex flex-col">
                  <div className="bg-black-100 p-3 border-b border-gray-800 flex items-center">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-medium mx-auto">CareerPilot AI Assistant</div>
                  </div>
                  <div className="flex-1 p-4 overflow-y-auto">
                    <div className="flex items-start mb-4">
                      <div className="bg-blue-electric bg-opacity-20 p-2 rounded-full mr-3 mt-1">
                        <BrainCircuit className="h-4 w-4 text-blue-electric" />
                      </div>
                      <div>
                        <div className="bg-black-100 rounded-lg p-3 text-sm">
                          <p className="text-gray-light">I've analyzed your resume against the job description. Here are the key improvements to make:</p>
                          <ul className="list-disc pl-4 mt-2 text-gray-medium">
                            <li>Add more quantifiable achievements</li>
                            <li>Highlight leadership experience</li>
                            <li>Include relevant technologies</li>
                          </ul>
                        </div>
                        <p className="text-xs text-gray-medium mt-1">CareerPilot AI • 2m ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-gray-medium bg-opacity-20 p-2 rounded-full mr-3 mt-1">
                        <div className="h-4 w-4 text-gray-medium">U</div>
                      </div>
                      <div>
                        <div className="bg-black rounded-lg p-3 text-sm">
                          <p className="text-gray-light">Can you help me prepare for the behavioral interview questions?</p>
                        </div>
                        <p className="text-xs text-gray-medium mt-1">You • Just now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-teal-neon opacity-5 rounded-full blur-3xl"></div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-neon opacity-5 rounded-full blur-3xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Your Personal AI Career Coach
            </h3>
            
            <p className="text-gray-medium">
              CareerPilot doesn't just scan your resume—it understands your career goals and provides personalized guidance to help you succeed in today's competitive job market.
            </p>

            <ul className="space-y-4 mt-6">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-sm text-gray-medium italic mt-8">
              "Used by 10,000+ job seekers globally, with a 78% success rate of securing interviews."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;