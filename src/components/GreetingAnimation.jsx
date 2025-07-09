import React, { useState, useEffect } from 'react';

const GreetingAnimation = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const greetings = [
    { text: 'नमस्ते', language: 'Hindi' },
    { text: 'Hello', language: 'English' },
    { text: 'Bonjour', language: 'French' },
    { text: 'Hallo', language: 'German' },
    { text: 'Hola', language: 'Spanish' },
    { text: 'こんにちは', language: 'Japanese' }
  ];

  useEffect(() => {
    // Check if animation has been shown before
    const hasSeenAnimation = localStorage.getItem('greetingAnimationShown');
    
    if (hasSeenAnimation) {
      onComplete();
      return;
    }

    // Mark animation as shown

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        
        if (nextIndex >= greetings.length) {
          clearInterval(interval);
          // Fade out after showing all greetings
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onComplete();
            }, 500);
          }, 1000);
          return prevIndex;
        }
        
        return nextIndex;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center">
        <div 
          key={currentIndex}
          className="animate-pulse"
        >
          <h1 className="text-6xl md:text-8xl font-light text-white mb-4 transition-all duration-300 transform">
            {greetings[currentIndex]?.text}
          </h1>
          <p className="text-xl text-gray-300 opacity-70">
            {greetings[currentIndex]?.language}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreetingAnimation;