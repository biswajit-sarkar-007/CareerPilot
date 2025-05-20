import { motion } from 'framer-motion';
import { FileText, VideoIcon, Search, Linkedin, FileEdit, BookOpen } from 'lucide-react';

const featureData = [
  {
    title: 'Resume Optimizer',
    description: 'AI-powered resume analysis and optimization for specific job descriptions.',
    icon: <FileText className="h-6 w-6" />,
    color: 'blue-electric'
  },
  {
    title: 'Interview Practice Bot',
    description: 'Simulate real interviews with AI and get instant feedback on your responses.',
    icon: <VideoIcon className="h-6 w-6" />,
    color: 'purple-neon'
  },
  {
    title: 'ATS Scanner',
    description: 'Check if your resume will pass Applicant Tracking Systems with our ATS simulator.',
    icon: <Search className="h-6 w-6" />,
    color: 'teal-neon'
  },
  {
    title: 'LinkedIn Profile Booster',
    description: 'Optimize your LinkedIn profile to attract recruiters and hiring managers.',
    icon: <Linkedin className="h-6 w-6" />,
    color: 'blue-electric'
  },
  {
    title: 'Job Description Tailor',
    description: 'Customize your application materials for specific job requirements automatically.',
    icon: <FileEdit className="h-6 w-6" />,
    color: 'purple-neon'
  },
  {
    title: 'Skill Gap Analyzer',
    description: 'Identify skills you need to develop to qualify for your target positions.',
    icon: <BookOpen className="h-6 w-6" />,
    color: 'teal-neon'
  }
];

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="section section-dark-gradient">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Powerful <span className="text-gradient">Features</span></h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Our comprehensive suite of AI-powered tools will revolutionize your job search
            and career development journey.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="card card-hover p-6">
                <div 
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 bg-opacity-20`}
                  style={{ backgroundColor: `var(--${feature.color}-rgb)` }}
                >
                  <div style={{ color: `var(--${feature.color})` }}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-medium">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;