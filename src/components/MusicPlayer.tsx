import { useState, useRef } from 'react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                const playPromise = audioRef.current.play();
                if (playPromise) {
                    playPromise.catch((e) => {
                        console.error("Playback failed:", e);
                        setError(true);
                    });
                }
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 bg-base-200 p-4 rounded-xl shadow-lg">
            <audio
                ref={audioRef}
                src="/valentines/thisong.mp3"
                loop
                onError={(e) => {
                    console.error("Audio error:", e);
                    setError(true);
                }}
            />
            <button
                onClick={togglePlay}
                className={`btn btn-circle ${error ? 'btn-error' : 'btn-primary'}`}
                disabled={error}
            >
                {error ? '❌' : isPlaying ? '🎵' : '▶️'}
            </button>
        </div>
    );
};

export default MusicPlayer;
