import React from 'react';
import Hearts from '../components/Hearts';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-opacity-50">
            <div className="mockup-browser bg-base-300 border mx-4 bg-opacity-90 shadow-xl">
                <div className="mockup-browser-toolbar">
                    <div className="input text-pink-400 font-semibold">Happy Valentines My love !</div>
                </div>
                <div className="bg-base-200 flex justify-center px-4 py-16 bg-opacity-90">
                    <img 
                        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmVhcXJnM2J6dHc4bmhrb3ppcXgyejYwOGpxNWY0MWY1cjF0a2g0NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13V2lGH2cUYgzC/giphy.gif" 
                        alt="Valentine's Day Animation" 
                        className="max-w-[300px] rounded-xl"
                    />
                </div>
            </div>
            <Hearts />
        </div>
    );
};

export default Home;
