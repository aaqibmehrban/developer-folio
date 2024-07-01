"use client";
import React, { useEffect, useState } from 'react';

const LightEffect = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  const updatePosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-0 h-0"
      style={{
        transform: `translate(${position.x - 160}px, ${position.y - 160}px)`,
      }}
    >
      <div className="w-80 h-80 rounded-full bg-[#2596be] opacity-20 blur-3xl"></div>
    </div>
  );
};

export default LightEffect;
