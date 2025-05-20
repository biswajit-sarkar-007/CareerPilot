import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingData = [
  {
    title: 'Free',
    price: '0',
    features: [
      'Basic Resume Scan',
      '1 Interview Practice Session',
      'Limited ATS Compatibility Check',
      'Basic Job Description Analysis'
    ],
    buttonText: 'Start Free',
    isPopular: false
  },
  {
    title: 'Pro',
    price: '19',
    features: [
      'Unlimited Resume Optimizations',
      'Unlimited Interview Practice',
      'Complete ATS Compatibility Suite',
      'LinkedIn Profile Optimization',
      'Job Description Tailor',
      'Email Support'
    ],
    buttonText: 'Upgrade Now',
    isPopular: true
  },
  {
    title: 'Elite',
    price: '39',
    features: [
      'Everything in Pro',
      'Dedicated AI Career Coach',
      'Priority Support',
      'Salary Negotiation Training',
      'Custom Cover Letter Generator',
      'Advanced Analytics Dashboard'
    ],
    buttonText: 'Get Elite',
    isPopular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section section-dark-gradient">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Start <span className="text-gradient">Free</span>. Upgrade Anytime.</h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include core features to help you land your dream job.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-black-100 rounded-xl overflow-hidden ${
                plan.isPopular ? 'border-2 border-blue-electric' : 'border border-gray-800'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-blue-electric text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-medium">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-electric shrink-0 mt-0.5" />
                      <span className="text-gray-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-4 rounded-lg font-medium ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-blue-electric to-purple-neon text-white animate-glow'
                      : 'bg-black-200 text-white border border-gray-800 hover:border-blue-electric'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-medium">
            All plans include a 14-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;