import React, { useState, useEffect, useRef } from 'react';

const Loader = () => {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  
  // Simulated loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => prev < 100 ? prev + 1 : prev);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class Particle {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.5;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0 || 
            this.y > canvas.height || this.y < 0) {
          this.reset();
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${this.opacity})`;
        ctx.fill();
      }
    }
    
    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    createParticles();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-black z-50">
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      <div className="relative flex flex-col items-center gap-8">
        {/* Main Crystal Container */}
        <div className="relative w-48 h-48">
          {/* Rotating Rings */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle 
                cx="50" 
                cy="50" 
                r="48" 
                fill="none" 
                stroke="rgba(147, 51, 234, 0.2)" 
                strokeWidth="0.5"
                strokeDasharray="0.5 2" 
              />
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="rgba(147, 51, 234, 0.3)" 
                strokeWidth="0.5"
                strokeDasharray="0.5 2" 
              />
            </svg>
          </div>

          {/* Progress Circle */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 100 100" className="w-full h-full rotate-90">
              <circle 
                cx="50" 
                cy="50" 
                r="46" 
                fill="none" 
                stroke="rgba(147, 51, 234, 0.1)" 
                strokeWidth="2"
              />
              <circle 
                cx="50" 
                cy="50" 
                r="46" 
                fill="none" 
                stroke="rgba(147, 51, 234, 0.6)" 
                strokeWidth="2"
                strokeDasharray={`${2 * Math.PI * 46 * progress / 100} ${2 * Math.PI * 46}`}
                className="transition-all duration-300 ease-out"
              />
            </svg>
          </div>

          {/* Crystal */}
          <div className="absolute inset-0 flex items-center justify-center animate-float">
            <svg viewBox="0 0 100 100" className="w-3/4 h-3/4">
              <defs>
                <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e1333" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#4c3a80" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#9333ea" stopOpacity="0.7" />
                </linearGradient>
                <filter id="crystalGlow">
                  <feGaussianBlur stdDeviation="2" result="glow" />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <g filter="url(#crystalGlow)">
                <polygon 
                  points="50,10 90,40 50,90 10,40" 
                  fill="url(#crystalGrad)"
                  className="animate-pulse-crystal"
                />
              </g>
            </svg>
          </div>

          {/* Loading Particles */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-purple-500 rounded-full animate-particle"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 45}deg) translateX(${60}px)`,
                animation: `particle ${2 + i * 0.2}s infinite ease-in-out ${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Progress Text */}
        <div className="text-center">
          <div className="text-purple-300 font-bold text-2xl animate-pulse">
            {progress}%
          </div>
          <div className="text-purple-400/80 mt-2 animate-pulse-slow">
            Loading...
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-crystal {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes particle {
          0%, 100% { 
            transform: rotate(var(--rotation)) translateX(60px) scale(1);
            opacity: 0.8;
          }
          50% { 
            transform: rotate(var(--rotation)) translateX(70px) scale(1.5);
            opacity: 0.3;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-pulse-crystal {
          animation: pulse-crystal 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }

        .animate-particle {
          --rotation: 0deg;
          animation: particle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;