
import { useState } from 'react';
import { 
  User, 
  Code, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin,
  FileText,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [explorerOpen, setExplorerOpen] = useState(true);

  const menuItems = [
    { id: 'about', label: 'About.tsx', icon: User },
    { id: 'skills', label: 'Skills.tsx', icon: Code },
    { id: 'projects', label: 'Projects.json', icon: Briefcase },
    { id: 'contact', label: 'Contact.tsx', icon: Mail },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: FileText, label: 'Resume', href: '#' },
  ];

  return (
    <div className="w-64 bg-vs-sidebar border-r border-vs-border flex flex-col h-full">
      {/* Header */}
      <div className="flex p-4 border-b border-vs-border">
        <h2 className="text-vs-text-primary font-mono text-sm font-medium">
          PORTFOLIO EXPLORER
        </h2>
      </div>

      {/* File Explorer */}
      <div className="flex-1 p-2">
        <div className="mb-4">
          <button
            onClick={() => setExplorerOpen(!explorerOpen)}
            className="flex items-center gap-2 w-full text-vs-text-secondary hover:text-vs-text-primary transition-colors text-sm font-mono"
          >
            {explorerOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            src
          </button>
          
          {explorerOpen && (
            <div className="ml-4 mt-2 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`flex items-center gap-2 w-full p-2 rounded text-sm font-mono transition-all duration-200 group ${
                    activeSection === item.id
                      ? 'bg-vs-accent text-vs-text-primary'
                      : 'text-vs-text-secondary hover:text-vs-text-primary hover:bg-vs-bg-tertiary'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="syntax-string">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="w-1 h-4 bg-vs-blue ml-auto rounded-full" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="border-t border-vs-border pt-4 pb-4">
          <h3 className="text-vs-text-muted font-mono text-xs uppercase mb-3">
            External Links
          </h3>
          <div className="space-y-1">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-2 p-2 rounded text-sm font-mono text-vs-text-secondary hover:text-vs-text-primary hover:bg-vs-bg-tertiary transition-all duration-200 group"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      {/* VS-style status bar */}

      </div>
      <div className="border-t border-vs-border p-2 bg-vs-bg-primary">
        <div className="flex items-center justify-between text-xs font-mono text-vs-text-muted">
          <span  >TypeScript React</span>
          <span className="syntax-number">UTF-8</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
