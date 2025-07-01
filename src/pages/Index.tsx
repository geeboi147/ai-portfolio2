
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProfilePicture from '../components/ProfilePicture';
import AIChatbot from '../components/AIChatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              {/* Profile Picture */}
              <div className="flex justify-center mb-8">
                <ProfilePicture />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I'm Oluwaseyi <span className="inline-block animate-bounce">👋</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                I build AI-powered experiences that feel human.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link 
                  to="/projects"
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/about"
                  className="group border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  Learn More About Me
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="px-6 py-16 bg-white/70">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What I Do
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I specialize in creating digital experiences that bridge the gap between complex technology and human needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-4 group-hover:bg-blue-200 transition-colors">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Full-Stack Development
                </h3>
                <p className="text-gray-600">
                  Building robust applications from concept to deployment using modern technologies and best practices.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex p-4 bg-purple-100 rounded-2xl mb-4 group-hover:bg-purple-200 transition-colors">
                  <Palette className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Design & UX
                </h3>
                <p className="text-gray-600">
                  Creating intuitive interfaces that prioritize user experience and accessibility in every interaction.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex p-4 bg-green-100 rounded-2xl mb-4 group-hover:bg-green-200 transition-colors">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  AI Integration
                </h3>
                <p className="text-gray-600">
                  Incorporating artificial intelligence to enhance functionality while maintaining human-centered design.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to build something amazing?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                I'm always excited to take on new challenges and collaborate on innovative projects.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default Index;
