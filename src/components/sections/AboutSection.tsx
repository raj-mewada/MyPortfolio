
import { motion } from 'framer-motion';
import { Code2, Coffee, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 space-y-6"
    >
      {/* Code Comment Header */}
      <div className="font-mono text-vs-green">
        <div>{"// About.tsx"}</div>
        <div>{"// Personal information and introduction"}</div>
      </div>

      {/* Main Content */}
      <div className="bg-vs-bg-secondary rounded-lg p-6 border border-vs-border">
        <div className="font-mono space-y-4">
          {/* Interface Declaration */}
          <div>
            <span className="syntax-keyword">var</span>{' '}
            <span className="syntax-class">developer</span>{' '}
            <span className="syntax-keyword"> = new</span>{' '}
            <span className="syntax-class">Developer</span>{' '}
            <span className="text-vs-text-secondary">{'{'}</span>
          </div>

          {/* Properties */}
          <div className="ml-4 space-y-2">
            <div>
              <span className="syntax-function">name</span>
              <span className="text-vs-text-secondary"> = </span>
              <span className="syntax-string">"Raj Mewada"</span>
              <span className="text-vs-text-secondary">;</span>
            </div>
            <div>
              <span className="syntax-function">role</span>
              <span className="text-vs-text-secondary">: </span>
              <span className="syntax-string">".NET Developer"</span>
              <span className="text-vs-text-secondary">;</span>
            </div>
            <div>
              <span className="syntax-function">location</span>
              <span className="text-vs-text-secondary">: </span>
              <span className="syntax-string">"Bhopal, Madhya Pradesh"</span>
              <span className="text-vs-text-secondary">;</span>
            </div>
            <div>
              <span className="syntax-function">experience</span>
              <span className="text-vs-text-secondary">: </span>
              <span className="syntax-number">2.8</span>
              <span className="text-vs-text-secondary">;</span>
              <span className="syntax-comment"> // years</span>
            </div>
          </div>

          <div className="text-vs-text-secondary">{'}'}</div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-vs-bg-tertiary rounded-lg p-6 border border-vs-border">
        <h3 className="font-mono text-vs-blue font-medium mb-4">About Me</h3>
        <p className="text-vs-text-secondary leading-relaxed mb-4">
          I’m a dedicated .NET Developer with hands-on experience in ASP.NET Core MVC, REST APIs, C#, and OOPs. My technical expertise spans Windows Services, WinForms, Azure (including DevOps & Cosmos DB), IIS Server, and Fabric Data Management & Analytics. I'm proficient in both relational and NoSQL databases like SQL Server, MySQL, PostgreSQL, and MongoDB.
        </p>
        <p className="text-vs-text-secondary leading-relaxed mb-4">
          I’m also skilled in HTML/CSS/JavaScript, and creatively inclined with experience in Canva, Photography, and Video Editing. As a proud member of the Digital & Media Committee, I value teamwork and meaningful contribution.
        </p>
        <p className="text-vs-text-secondary leading-relaxed mb-4">
          🚀 Featured Project: VIBE – AI-Powered Healthcare Data Migration
          Built on Microsoft Fabric, VIBE is a secure, intelligent data migration solution transforming healthcare data integration across cloud platforms.
        </p>
        <p className="text-vs-text-secondary leading-relaxed mb-4">
          Career Goals:
          Short-term: Work with startups to gain versatile experience.
          Long-term: Grow into impactful roles at reputed Organisation.
        </p>
        <p className="text-vs-text-secondary leading-relaxed mb-4">
          Driven, attentive and committed to continuous learning, I aim to build solutions that make a difference in the tech space.
        </p>
        <p className="text-vs-text-secondary leading-relaxed">
          When I'm not coding, you'll find me exploring new technologies, contributing to
          open-source projects, or sharing knowledge with the developer community.
        </p>
      </div>

      {/* Fun Facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: Code2, label: 'Lines of Code', value: '100K+', color: 'vs-blue' },
          {
            icon: Coffee, label: 'Cups of Tea', value: (
              <span style={{ filter: 'brightness(0) invert(1)' }}>♾️</span>
            ), color: 'yellow-800'
          },
          { icon: Lightbulb, label: 'Projects Built', value: '50+', color: 'yellow-400' },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-vs-bg-secondary rounded-lg p-4 border border-vs-border text-center hover:border-vs-accent transition-colors"
          >
            <item.icon className={`w-8 h-8 text-${item?.color} mx-auto mb-2`} />
            <div className="font-mono text-2xl font-bold text-vs-text-primary">
              {item.value}
            </div>
            <div className="text-vs-text-muted text-sm">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AboutSection;