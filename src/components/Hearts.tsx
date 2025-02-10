import { useEffect, useState } from 'react';

const Hearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; animationDuration: number }[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const heart = {
        id: Date.now(),
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 2, // Between 2-5 seconds
      };
      setHearts(prev => [...prev, heart]);
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id));
      }, heart.animationDuration * 1000);
    };

    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hearts-container fixed inset-0 pointer-events-none">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart absolute text-pink-500"
          style={{
            left: `${heart.left}%`,
            animation: `float ${heart.animationDuration}s linear`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default Hearts;
