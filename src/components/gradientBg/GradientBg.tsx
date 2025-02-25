'use client';
import React, { useRef, useEffect, useCallback } from 'react';

export const GradientBg: React.FC = () => {
  // Define los colores
  const colors: string[] = [
    '#EE4443', '#EE4443', '#EF8888', '#EF8888', '#FFD292',
    '#FFD292', '#FFD292', '#FFD292', '#FFD292', '#FFD292', '#FFD292',
  ];

  // Obtiene un color aleatorio
  function getRandomColor(): string {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Define la clase Circle
  class Circle {
    x: number;
    y: number;
    angle: number;
    radius: number;
    firstColor: string;
    secondColor: string;

    constructor(w: number, h: number, minR: number, maxR: number) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.angle = Math.random() * Math.PI * 2;
      this.radius = Math.random() * (maxR - minR) + minR;
      this.firstColor = getRandomColor();
      this.secondColor = `${getRandomColor()}00`;
    }

    draw(ctx: CanvasRenderingContext2D, speed: number): void {
      this.angle += speed;
      const x = this.x + Math.cos(this.angle) * 200;
      const y = this.y + Math.sin(this.angle) * 200;

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
      gradient.addColorStop(0, this.firstColor);
      gradient.addColorStop(1, this.secondColor);

      ctx.globalCompositeOperation = 'overlay';
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Componente interno que maneja la animación
  const GradientAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const circlesRef = useRef<Circle[]>([]);
    const circlesNum = 10;
    const minRadius = 400;
    const maxRadius = 400;
    const speed = 0.002;

    const setCanvasSize = useCallback(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = (canvas.width = window.innerWidth * window.devicePixelRatio);
      const h = (canvas.height = window.innerHeight * window.devicePixelRatio);

      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      circlesRef.current = [];
      for (let i = 0; i < circlesNum; ++i) {
        circlesRef.current.push(new Circle(w, h, minRadius, maxRadius));
      }
    }, []);

    const drawAnimation = useCallback(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circlesRef.current.forEach((circle) => circle.draw(ctx, speed));
      window.requestAnimationFrame(drawAnimation);
    }, []);

    useEffect(() => {
      setCanvasSize();
      window.addEventListener('resize', setCanvasSize);
      window.requestAnimationFrame(drawAnimation);

      return () => {
        window.removeEventListener('resize', setCanvasSize);
      };
    }, [setCanvasSize, drawAnimation]);

    return <canvas ref={canvasRef} className="intro_canva" />;
  };

  // Devuelve el componente animado
  return <GradientAnimation />;
};
