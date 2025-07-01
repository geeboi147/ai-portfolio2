
interface Project {
  id: number;
  name: string;
  description: string;
  stack: string[];
  image: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Fallback gradient when image fails to load */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">💻</div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
