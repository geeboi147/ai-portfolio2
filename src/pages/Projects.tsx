
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects where I explore the intersection of AI, design, and human experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
