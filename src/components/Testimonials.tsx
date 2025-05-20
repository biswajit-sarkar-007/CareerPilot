import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'Software Engineer',
    company: 'Google',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'CareerPilot helped me completely revamp my resume and interview skills. After just 3 weeks of using it, I landed my dream job at Google!'
  },
  {
    name: 'Marcus Chen',
    position: 'Product Manager',
    company: 'Amazon',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'The interview practice bot was a game-changer. It helped me identify weaknesses in my responses and improve dramatically. Highly recommend!'
  },
  {
    name: 'Jessica Patel',
    position: 'UX Designer',
    company: 'Apple',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'I was struggling to get past ATS systems for months. CareerPilots resume optimization got me 5 interviews in just two weeks!'
  },
  {
    name: 'David Wilson',
    position: 'Data Scientist',
    company: 'Netflix',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'The personalized feedback on my LinkedIn profile helped me increase profile views by 300%. Soon after, recruiters started reaching out to me directly.'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section section-dark-gradient relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(185,128,242,0.1),transparent_70%)]"></div>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Loved by <span className="text-gradient">Thousands</span></h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            See how CareerPilot has transformed job searches and careers for professionals around the world.
          </p>
        </motion.div>

        <div className="relative px-4">
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={activeIndex}
                className="bg-black-200 rounded-2xl p-8 border border-gray-800"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-white">{testimonials[activeIndex].name}</h4>
                      <p className="text-gray-medium text-sm">
                        {testimonials[activeIndex].position} at {testimonials[activeIndex].company}
                      </p>
                      <div className="flex justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-blue-electric fill-blue-electric" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="text-lg italic mb-4 relative">
                      <span className="text-6xl text-blue-electric opacity-20 absolute -top-8 -left-2">"</span>
                      <p className="relative z-10 text-gray-light">
                        {testimonials[activeIndex].quote}
                      </p>
                      <span className="text-6xl text-blue-electric opacity-20 absolute -bottom-12 right-0">"</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 mt-6">
                      <div className="h-1 w-8 rounded-full bg-blue-electric"></div>
                      <div className="h-1 w-24 rounded-full bg-gray-800"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-gray-800 hover:border-blue-electric transition duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'bg-blue-electric w-6' : 'bg-gray-800'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full border border-gray-800 hover:border-blue-electric transition duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;