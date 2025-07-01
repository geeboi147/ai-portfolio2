
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About Me
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                I'm Oluwaseyi, a full-stack developer passionate about merging design and AI. 
                I enjoy creating tools that feel human and intuitive.
              </p>
              
              <p className="mb-6">
                My journey in technology started with a curiosity about how things work and evolved 
                into a passion for building experiences that bridge the gap between complex technology 
                and human needs. I believe that the best software feels invisible, it just works, 
                naturally and beautifully.
              </p>
              
              <p className="mb-6">
                When I'm not coding, you'll find me exploring new technologies, reading about 
                design principles, or spending quality time with loved ones.
              </p>
              
              <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What I'm currently working on
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Building AI-powered developer tools</li>
                  <li>• Exploring the intersection of design and machine learning</li>
                  <li>• Contributing to open-source projects</li>
                  <li>• Learning about human-computer interaction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
