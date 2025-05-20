import { motion } from 'framer-motion';
import { PlayCircle, Notebook as Robot } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden relative bg-black-true">
      <div className="absolute inset-0 bg-black-true"></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-bold mb-6 text-white drop-shadow-lg">
              Land Your <span className="text-blue-electric">Dream Job</span> with <span className="text-blue-electric">AI</span>.
            </h1>
            <p className="text-xl mb-8 text-gray-light max-w-lg mx-auto lg:mx-0">
              <span className="text-white">AI-tailored resumes.</span> <span className="text-blue-electric">Real interview simulations.</span> <span className="text-white">Career clarity.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#try-free"
                className="btn btn-primary animate-glow text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try For Free
              </motion.a>
              <motion.a
                href="#watch-demo"
                className="btn btn-secondary flex items-center justify-center gap-2 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayCircle size={20} />
                Watch Demo
              </motion.a>
            </div>
            <p className="mt-6 text-sm text-gray-light">
              <span className="text-blue-electric font-semibold">Already trusted by 10,000+ job seekers globally</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-black-200 rounded-2xl p-6 border border-gray-800 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-electric to-purple-neon"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-black-100 rounded-full">
                  <Robot className="h-6 w-6 text-teal-neon" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Resume Analysis</h3>
                  <p className="text-gray-medium text-sm">Optimizing for ATS</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-black p-4 rounded-lg border border-gray-800">
                  <div className="h-2 w-24 bg-gray-800 rounded mb-2"></div>
                  <div className="h-2 w-20 bg-gray-800 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-2 w-32 bg-gray-800 rounded"></div>
                  </div>
                </div>
                <div className="bg-black p-4 rounded-lg border border-gray-800">
                  <div className="h-2 w-32 bg-gray-800 rounded mb-2"></div>
                  <div className="h-2 w-28 bg-gray-800 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="h-2 w-40 bg-gray-800 rounded"></div>
                  </div>
                </div>
                <div className="bg-black p-4 rounded-lg border border-gray-800">
                  <div className="h-2 w-36 bg-gray-800 rounded mb-2"></div>
                  <div className="h-2 w-24 bg-gray-800 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-2 w-36 bg-gray-800 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="h-8 w-full bg-blue-electric rounded-md opacity-80"></div>
              </div>
            </div>
            
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-purple-neon opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-blue-electric opacity-10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;