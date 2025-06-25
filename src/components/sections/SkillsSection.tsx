
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, color: 'vs-blue' },
        { name: 'TypeScript', level: 90, color: 'vs-purple' },
        { name: 'Next.js', level: 85, color: 'vs-cyan' },
        { name: 'Tailwind CSS', level: 90, color: 'vs-green' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, color: 'vs-yellow' },
        { name: 'Python', level: 85, color: 'vs-orange' },
        { name: 'PostgreSQL', level: 80, color: 'vs-blue' },
        { name: 'MongoDB', level: 75, color: 'vs-green' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 95, color: 'vs-purple' },
        { name: 'Docker', level: 80, color: 'vs-cyan' },
        { name: 'AWS', level: 75, color: 'vs-orange' },
        { name: 'VS Code', level: 100, color: 'vs-blue' },
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 space-y-6"
    >
      {/* Code Comment Header */}
      <div className="font-mono text-vs-green">
        <div>{"// Skills.ts"}</div>
        <div>{"// Technical skills and proficiency levels"}</div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="bg-vs-bg-secondary rounded-lg p-6 border border-vs-border"
          >
            {/* Category Header */}
            <div className="font-mono mb-4">
              <span className="syntax-keyword">interface</span>{' '}
              <span className="syntax-class">{category.title}Skills</span>{' '}
              <span className="text-vs-text-secondary">{'{'}</span>
            </div>

            {/* Skills List */}
            <div className="space-y-3 ml-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                  className="space-y-2"
                >
                  {/* Skill Name */}
                  <div className="flex justify-between items-center font-mono text-sm">
                    <span className="syntax-function">{skill.name}</span>
                    <span className="syntax-number">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-vs-bg-primary rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) + 0.3, duration: 0.8 }}
                      className={`h-full bg-${skill.color} rounded-full relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="font-mono text-vs-text-secondary mt-4">{'}'}</div>
          </motion.div>
        ))}
      </div>

      {/* Code Snippet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-vs-bg-tertiary rounded-lg p-6 border border-vs-border"
      >
        <div className="font-mono space-y-2">
          <div>
            <span className="syntax-keyword">const</span>{' '}
            <span className="syntax-function">mySkills</span>{' '}
            <span className="text-vs-text-secondary">=</span>{' '}
            <span className="text-vs-text-secondary">{'{'}</span>
          </div>
          <div className="ml-4">
            <span className="syntax-function">passion</span>
            <span className="text-vs-text-secondary">: </span>
            <span className="syntax-string">"Building amazing things"</span>
            <span className="text-vs-text-secondary">,</span>
          </div>
          <div className="ml-4">
            <span className="syntax-function">learning</span>
            <span className="text-vs-text-secondary">: </span>
            <span className="syntax-keyword">true</span>
            <span className="text-vs-text-secondary">,</span>
          </div>
          <div className="ml-4">
            <span className="syntax-function">collaboration</span>
            <span className="text-vs-text-secondary">: </span>
            <span className="syntax-string">"Always ready"</span>
          </div>
          <div className="text-vs-text-secondary">{'}'}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;
