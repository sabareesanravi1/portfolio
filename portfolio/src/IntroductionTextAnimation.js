import React, { useState, useEffect } from 'react';

const IntroductionTextAnimation = () => {
    const texts = [
        "Harnessing the capabilities of Java to develop robust and scalable software solutions.",
        "Leveraging the power of AWS to architect and deploy scalable cloud-based solutions.",
        "Mastering the art of SQL to manipulate and analyze data with precision and efficiency.",
        "Crafting dynamic user interfaces with ReactJS, driving immersive and responsive web experiences.",
        "Building REST APIs that enable seamless communication and integration between systems."
    ];

    const [currentText, setCurrentText] = useState(0);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowText(false); // Hide current text
            setTimeout(() => {
                setCurrentText((prevText) => (prevText === texts.length - 1 ? 0 : prevText + 1));
                setShowText(true); // Show new text
            }, 500); // Wait for fade-out transition to complete
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p className={showText ? 'fade-in show' : 'fade-in'}>{texts[currentText]}</p>
        </div >
    );
};

export default IntroductionTextAnimation;
