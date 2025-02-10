import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hearts from '../components/Hearts';

const Home = () => {
    const [isLetterOpen, setIsLetterOpen] = useState(false);
    const navigate = useNavigate();
    const handleNextPage = () => {
        setIsLetterOpen(false);
        navigate('/about');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-opacity-50 gap-4">
            <div className="mockup-browser bg-base-300 border mx-4 bg-opacity-90 shadow-xl">
                <div className="mockup-browser-toolbar">
                    <div className="input text-pink-400 font-semibold">Happy Valentines My love !</div>
                </div>
                <div className="bg-base-200 flex flex-col items-center px-4 py-16 bg-opacity-90 gap-4">
                    <img 
                        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmVhcXJnM2J6dHc4bmhrb3ppcXgyejYwOGpxNWY0MWY1cjF0a2g0NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13V2lGH2cUYgzC/giphy.gif" 
                        alt="Valentine's Day Animation" 
                        className="max-w-[300px] rounded-xl"
                    />
                    
                    <button 
                        className="btn btn-primary mt-4"
                        onClick={() => setIsLetterOpen(!isLetterOpen)}
                    >
                        {isLetterOpen ? '💌 Mwahh' : '💌 Buka ini Cintaaa'}
                    </button>

                    {isLetterOpen && (
                        <div className="card bg-base-100 p-4 mt-4 animate-fade-down animate-once">
                            <p className="text-pink-400">Dear My love, Arista </p>
                            <p className="mt-2">Selamat Hari Valentine cintakuuuu ! ❤️</p>
                            <p className="mt-2">With love,</p>
                            <p>Your Handsome Boy 😏 
                                <br /> Cintakuuu maaf yaaa aku cuman bisa kasih kamu
                                <br /> website ini, one day i'll give u another gift !
                                <br /> Love youuuu ❤️🌻💗💖🌹
                            </p>
                            <button 
                                className="btn btn-ghost mt-4"
                                onClick={handleNextPage}
                            >
                                Next Surprise ➡️
                            </button>
                        </div>
                    )}

                </div>
            </div>
            <Hearts />
        </div>
    );
};

export default Home;
