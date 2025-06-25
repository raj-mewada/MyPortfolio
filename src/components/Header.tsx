
import { Menu, X, Terminal } from 'lucide-react';

interface HeaderProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

const Header = ({ isSidebarOpen, onSidebarToggle }: HeaderProps) => {
  return (
    <header className="bg-vs-bg-secondary border-b border-vs-border h-16 flex items-center px-4">
      {/* Menu Toggle */}
      {/* <button
        onClick={onSidebarToggle}
        className="p-1 hover:bg-vs-bg-tertiary rounded transition-colors mr-4"
      >
        {isSidebarOpen ? (
          <X className="w-5 h-5 text-vs-text-secondary" />
        ) : (
          <Menu className="w-5 h-5 text-vs-text-secondary" />
        )}
      </button> */}
      <Terminal className="w-5 h-5 text-vs-accent scale-x-[-1]" />
<img src="../../public/Raj_Log_2.png" alt="" style={{width:'50px',height:'40px',filter: 'drop-shadow(16px 16px 20px) invert(75%)',paddingRight:'4px',paddingLeft:'5px'} }/>
      {/* Title */}
      <div className="flex items-center gap-2">
        <Terminal className="w-5 h-5 text-vs-accent" />
        <h1 className="font-mono text-vs-text-primary font-medium">
          <span className="syntax-keyword">private readonly</span>{' '}
          <span className="syntax-function">portfolio</span>{' '}
          <span className="text-vs-text-secondary">=</span>{' '}
          <span className="syntax-string">"Developer"</span>
        </h1>
      </div>

      {/* Tab indicators */}
      <div className="flex-1 flex items-center ml-6">
        <div className="flex gap-1">
          <div className="h-1 w-1 rounded-full bg-vs-green"></div>
          <div className="h-1 w-1 rounded-full bg-vs-orange"></div>
          <div className="h-1 w-1 rounded-full bg-vs-blue"></div>
        </div>
      </div>

      {/* Status */}
      <div className="text-vs-text-muted font-mono text-sm">
        Ready
      </div>
    </header>
  );
};

export default Header;
