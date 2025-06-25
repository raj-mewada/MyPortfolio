
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/username/ecommerce",
      live: "https://ecommerce-demo.com",
      status: "completed"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "Collaborative task management with real-time updates",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      github: "https://github.com/username/taskapp",
      live: "https://taskapp-demo.com",
      status: "in-progress"
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description: "Weather forecasting app with interactive charts",
      technologies: ["React", "Chart.js", "OpenWeather API"],
      github: "https://github.com/username/weather",
      live: "https://weather-demo.com",
      status: "completed"
    }
  ];

  return (
    <div className="p-6 font-mono">
      {/* File Header */}
      <div className="flex items-center gap-2 mb-6">
        <Folder className="w-4 h-4 text-vs-cyan" />
        <span className="text-vs-text-muted text-sm">
          <span className="syntax-comment">// Projects showcase</span>
        </span>
      </div>

      {/* Code Structure */}
      <div className="space-y-6">
        <div className="text-vs-text-primary">
          <span className="syntax-keyword">const</span>{' '}
          <span className="syntax-function">projects</span>{' '}
          <span className="text-vs-text-secondary">=</span>{' '}
          <span className="syntax-string">"Featured Work"</span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ml-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-vs-bg-secondary border border-vs-border rounded-sm p-4 hover:border-vs-accent transition-colors group"
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Folder className="w-4 h-4 text-vs-cyan" />
                  <span className="syntax-function font-medium">{project.name}</span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="p-1 hover:bg-vs-bg-tertiary rounded transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="w-4 h-4 text-vs-text-secondary hover:text-vs-text-primary" />
                  </a>
                  <a
                    href={project.live}
                    className="p-1 hover:bg-vs-bg-tertiary rounded transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="w-4 h-4 text-vs-text-secondary hover:text-vs-text-primary" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-vs-text-secondary text-sm mb-4 leading-relaxed">
                <span className="syntax-comment">// {project.description}</span>
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-vs-bg-tertiary text-vs-text-primary text-xs rounded border border-vs-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Status */}
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  project.status === 'completed' ? 'bg-vs-green' : 'bg-vs-orange'
                }`}></div>
                <span className="text-vs-text-muted text-xs">
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer comment */}
        <div className="mt-8 text-vs-text-muted text-sm">
          <span className="syntax-comment">
            // More projects available on GitHub
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
