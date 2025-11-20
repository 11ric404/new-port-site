import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width, height;
        let mouseX = -1000;
        let mouseY = -1000;

        // Configuration
        const DOT_SPACING = 40;
        const DOT_RADIUS = 1.5;
        const MOUSE_RADIUS = 150;
        const REPEL_STRENGTH = 0.5;
        const RETURN_SPEED = 0.1;

        // Dot class
        class Dot {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.vx = 0;
                this.vy = 0;
            }

            update() {
                // Calculate distance to mouse
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < MOUSE_RADIUS) {
                    // Calculate angle and force
                    const angle = Math.atan2(dy, dx);
                    const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
                    const forceX = Math.cos(angle) * force * REPEL_STRENGTH * 20; // Push away
                    const forceY = Math.sin(angle) * force * REPEL_STRENGTH * 20;

                    // Move away from mouse
                    this.vx -= forceX;
                    this.vy -= forceY;
                }

                // Return to base position (spring effect)
                const homeDx = this.baseX - this.x;
                const homeDy = this.baseY - this.y;

                this.vx += homeDx * RETURN_SPEED;
                this.vy += homeDy * RETURN_SPEED;

                // Apply friction
                this.vx *= 0.8;
                this.vy *= 0.8;

                // Update position
                this.x += this.vx;
                this.y += this.vy;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, DOT_RADIUS, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(136, 146, 176, 0.2)'; // --text-secondary with low opacity
                ctx.fill();
            }
        }

        let dots = [];

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            dots = [];
            for (let x = 0; x < width; x += DOT_SPACING) {
                for (let y = 0; y < height; y += DOT_SPACING) {
                    dots.push(new Dot(x, y));
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            dots.forEach(dot => {
                dot.update();
                dot.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            init();
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        // Initialize
        init();
        animate();

        // Event Listeners
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'var(--bg-primary)'
            }}
        />
    );
};

export default InteractiveBackground;
