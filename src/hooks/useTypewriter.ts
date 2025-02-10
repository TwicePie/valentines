import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typing);
            }
        }, speed);

        return () => clearInterval(typing);
    }, [text, speed]);

    return displayedText;
};
