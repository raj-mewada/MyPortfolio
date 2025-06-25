
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import { Menu, X } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-vs-bg-primary text-vs-text-primary">
      {/* Header */}
      <Header
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
          <Sidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-3rem)] bg-vs-bg-primary">
          {/* Tab Bar */}
          <div className="flex item-center bg-vs-bg-secondary border-b border-vs-border">
            <div className="flex item-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-4 hover:bg-vs-bg-tertiary rounded transition-colors"
              >
                {isSidebarOpen ? (
                  <X className="w-5 h-5 text-vs-text-secondary" />
                ) : (
                  <Menu className="w-5 h-5 text-vs-text-secondary" />
                )}
              </button>
              <div className="px-4 pt-3 bg-vs-bg-primary border-r border-vs-border">
                <span className="font-mono text-sm text-vs-text-primary">
                  {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}.
                  {activeSection === 'about' || activeSection === 'contact' ? 'tsx' :
                    activeSection === 'skills' ? 'tsx' : 'json'}
                </span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="h-[calc(100vh-6rem)] overflow-y-auto">
            {renderActiveSection()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
