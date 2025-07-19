import React from 'react';
import { FaHome, FaUser, FaTools, FaGraduationCap, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const sections = [
  { id: 'home', label: 'Home', icon: <FaHome /> },
  { id: 'about', label: 'About', icon: <FaUser /> },
  { id: 'skills', label: 'Skills', icon: <FaTools /> },
  { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
  { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
];

const SiteTimeline = () => {
  // Track active section for highlight (optional: use IntersectionObserver for real highlight)
  const [active, setActive] = React.useState('home');

  React.useEffect(() => {
    const handleScroll = () => {
      let found = 'home';
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.3) {
            found = sec.id;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col items-center timeline-nav" aria-label="Site Timeline">
      <div className="relative flex flex-col items-center h-[70vh] justify-between">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400/60 to-blue-500/30 h-full rounded-full" style={{zIndex:0}} />
        {sections.map((sec, i) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className={`timeline-node group flex flex-col items-center mb-2 ${active === sec.id ? 'active' : ''}`}
            aria-label={sec.label}
            tabIndex={0}
          >
            <span className={`timeline-dot ${active === sec.id ? 'active' : ''}`}>{sec.icon}</span>
            <span className="timeline-label text-xs mt-1 text-cyan-100 opacity-80 group-hover:opacity-100 transition">{sec.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default SiteTimeline;