import { Zap, Linkedin, Twitter, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black-true via-black-deep to-gray-dark border-t border-gray-800 shadow-2xl">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 mr-2 text-blue-electric" />
              <span className="font-bold text-xl text-white">CareerPilot</span>
            </div>
            <p className="text-gray-medium max-w-xs">
              Empowering careers with AI intelligence. Land your dream job faster with data-driven guidance.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-medium hover:text-blue-electric transition duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-medium hover:text-blue-electric transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-medium hover:text-blue-electric transition duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-medium hover:text-white transition duration-300">About</a></li>
                <li><a href="#" className="text-gray-medium hover:text-white transition duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-medium hover:text-white transition duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-medium hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-medium hover:text-white transition duration-300">Documentation</a></li>
                <li><a href="#" className="text-gray-medium hover:text-white transition duration-300">Tutorials</a></li>
                <li><a href="#" className="text-gray-medium hover:text-white transition duration-300">Support</a></li>
                <li><a href="#" className="text-gray-medium hover:text-white transition duration-300">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Subscribe to our newsletter</h4>
            <p className="text-gray-medium mb-4">
              Get the latest career tips and job market insights delivered to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-black-200 border border-gray-800 rounded-l-lg px-4 py-2 text-white w-full focus:outline-none focus:border-purple-neon focus:ring-2 focus:ring-purple-neon/50"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-electric to-purple-neon text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition duration-300 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-medium text-sm">
            © 2025 CareerPilot. All rights reserved.
          </p>
          <p className="text-gray-medium text-sm flex items-center mt-4 md:mt-0">
            Built with <Heart size={14} className="mx-1 text-purple-neon" /> by CareerPilot Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;