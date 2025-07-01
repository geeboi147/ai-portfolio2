
import Navbar from '../components/Navbar';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Me
            </h1>
            <p className="text-xl text-gray-600">
              Let's connect and build something amazing together
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Get In Touch
              </h2>
              
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and design. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:oguntoye.oluwaseyi@gmail.com" 
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium">oguntoye.oluwaseyi@gmail.com</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/oguntoye-oluwaseyi-80188911b" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium">LinkedIn Profile</span>
                </a>
                
                <a 
                  href="https://github.com/geeboi147" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors group"
                >
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Github className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium">GitHub Profile</span>
                </a>
                
                <div className="flex items-center space-x-3 text-gray-700">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium">Available for remote work</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Let's collaborate on
              </h3>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>AI-powered web applications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Full-stack development projects</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Open-source contributions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Consulting on tech architecture</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Speaking at tech events</span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-white/50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  "The best way to predict the future is to create it." - Looking forward to creating something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
