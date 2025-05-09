import React, { useEffect, useRef } from 'react';

export const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 50 : 100;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      connected: Array<number>;
    }> = [];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 1.5 + 0.5;
      
      // Particle colors in the cyberpunk/gaming theme
      const colors = [
        'rgba(0, 255, 255, 0.7)',  // Cyan
        'rgba(128, 0, 255, 0.7)',  // Purple
        'rgba(0, 128, 255, 0.7)',  // Blue
        'rgba(0, 255, 128, 0.7)',  // Green
      ];
      
      const randColor = colors[Math.floor(Math.random() * colors.length)];
      
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        color: randColor,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        connected: []
      });
    }
    
    // Animation frame
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Boundary check
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Reset connections
        p.connected = [];
        
        // Find connections to other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
          const maxDistance = 100;
          
          if (distance < maxDistance) {
            p.connected.push(j);
            
            // Draw connection line
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };
    
    // Handle window resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', handleResize);
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 opacity-30" 
    />
  );
};