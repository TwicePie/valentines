import { useTypewriter } from '../hooks/useTypewriter';

interface Props {
    text: string;
    className?: string;
    speed?: number;
}

const TypewriterText = ({ text, className = '', speed = 50 }: Props) => {
    const displayedText = useTypewriter(text, speed);
    
    return <p className={className}>{displayedText}</p>;
};

export default TypewriterText;
