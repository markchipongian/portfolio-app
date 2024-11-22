import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/Home';
import Contact from './pages/Contact';
import { AnimatePresence } from 'motion/react';

function App() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isFlashlightMode, setIsFlashlightMode] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        if (isFlashlightMode) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isFlashlightMode]);

    const toggleMode = () => {
        setIsFlashlightMode(!isFlashlightMode);
    };

    return (
        <>
            <div
                className="relative w-screen h-screen z-50"
                style={{
                    backgroundColor: isFlashlightMode ? 'black' : 'white',
                    overflow: 'hidden',
                    cursor: isFlashlightMode ? 'none' : 'default',
                }}>
                <NavigationBar onClick={toggleMode} />
                {isFlashlightMode && (
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            pointerEvents: 'none',
                            background: `radial-gradient(
              circle 200px at ${position.x}px ${position.y}px,
              rgba(255, 255, 255, 1),
              rgba(255, 255, 255, 0.3) 50%,
              transparent 70%
            )`,
                        }}
                    />
                )}
                <div
                    className="relative top-0 left-0 right-0 bottom-0 select-none z-50"
                    style={{
                        color: isFlashlightMode ? 'white' : 'black',
                        background: isFlashlightMode ? 'black' : 'transparent',
                        WebkitBackgroundClip: isFlashlightMode
                            ? 'text'
                            : 'unset',
                        WebkitTextFillColor: isFlashlightMode
                            ? 'transparent'
                            : 'unset',
                    }}>
                    <AnimatePresence>
                        <Routes
                            location={useLocation()}
                            key={location.pathname}>
                            <Route path="/" element={<HomePage />} />
                            <Route path="contact" element={<Contact />} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}

export default App;
