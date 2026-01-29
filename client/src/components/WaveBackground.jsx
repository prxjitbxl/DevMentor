import React, { useEffect, useRef } from 'react';

const WaveBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width, height;
        let waves = [];

        // Initialize waves
        const initWaves = () => {
            waves = [];
            const waveCount = 5; // Restored to 5 for depth (was 3, originally 6)
            for (let i = 0; i < waveCount; i++) {
                waves.push({
                    y: height / 2,
                    length: 0.003 + i * 0.001,
                    amplitude: 80 + i * 20,
                    speed: 0.005 + i * 0.002,
                    offset: i * 2,
                    // Use darker strokes for visibility against white
                    color: `rgba(180, 180, 190, ${0.15 + i * 0.05})`,
                    stroke: `rgba(100, 100, 110, ${0.3})`
                });
            }
        };

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initWaves();
        };

        const handleMouseMove = (e) => {
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY
            };
        };

        const draw = (time) => {
            ctx.clearRect(0, 0, width, height);

            // Clean white/silver gradient background
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, '#ffffff');
            gradient.addColorStop(1, '#e5e5ea');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            waves.forEach((wave, i) => {
                ctx.beginPath();

                // Interaction: Wave tends towards mouse Y
                const mouseInfluence = (mouseRef.current.y - height / 2) * 0.2 * (i + 1);

                // Optimization: Step x by 2 for balance between performance and smoothness
                for (let x = 0; x < width; x += 2) {
                    const y = wave.y +
                        Math.sin(x * wave.length + time * wave.speed + wave.offset) * wave.amplitude +
                        (mouseInfluence * Math.sin(x / width * Math.PI) * 0.5); // Smooth bend

                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                // Fill area below wave
                ctx.lineTo(width, height);
                ctx.lineTo(0, height);
                ctx.closePath();
                ctx.fillStyle = wave.color;
                ctx.fill();

                // Stroke for distinct "Architectural Line" look
                ctx.strokeStyle = wave.stroke;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame((t) => draw(t * 0.002));
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();
        draw(0);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none"
        />
    );
};

export default WaveBackground;
