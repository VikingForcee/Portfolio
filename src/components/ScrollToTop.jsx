import React, { useEffect, useState } from 'react';
import { Home, User, Code, Mail, Briefcase, FileText } from 'lucide-react';

const ScrollToTop = ({ pathname }) => {
  // Accept pathname as prop instead of using useLocation
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  // Map routes to page names and icons
  const pageMap = {
    '/': { name: 'Home', icon: Home },
    '/about': { name: 'About', icon: User },
    '/projects': { name: 'Projects', icon: Code },
    '/contact': { name: 'Contact', icon: Mail },
    '/portfolio': { name: 'Portfolio', icon: Briefcase },
    '/resume': { name: 'Resume', icon: FileText }
  };

  // Get current page info or fallback
  const getCurrentPageInfo = (path) => {
    const pageInfo = pageMap[path] || { name: 'Loading', icon: Home };
    return pageInfo;
  };

  useEffect(() => {
    const pageInfo = getCurrentPageInfo(pathname);
    setCurrentPage(pageInfo.name);
    
    // Start transition
    setIsTransitioning(true);
    
    // Scroll to top after a brief delay
    const scrollTimer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);

    // End transition
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 800);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(transitionTimer);
    };
  }, [pathname]);

  const pageInfo = getCurrentPageInfo(pathname);
  const IconComponent = pageInfo.icon;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-500 ease-in-out ${
        isTransitioning 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center">
        {/* Animated Icon */}
        <div className="mb-6 flex justify-center">
          <div className={`transform transition-all duration-700 ${
            isTransitioning ? 'scale-100 rotate-0' : 'scale-75 rotate-180'
          }`}>
            <IconComponent className="h-12 w-12 text-blue-400" />
          </div>
        </div>
        
        {/* Page Name */}
        <h2 className={`text-3xl font-bold text-white mb-4 transform transition-all duration-500 delay-150 ${
          isTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {currentPage}
        </h2>
        
        {/* Loading Bar */}
        <div className="w-32 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out ${
            isTransitioning ? 'w-full' : 'w-0'
          }`} />
        </div>
        
        {/* Subtle subtitle */}
        <p className={`text-gray-400 text-sm mt-4 transform transition-all duration-500 delay-300 ${
          isTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}>
          Loading...
        </p>
      </div>
      
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400 rounded-full transition-all duration-1000 ${
              isTransitioning ? 'opacity-20' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0.5}s`,
              animation: isTransitioning ? 'pulse 2s infinite' : 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollToTop;