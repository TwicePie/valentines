import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hearts from '../components/Hearts';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const navigate = useNavigate();

    // Updated image URLs to use local images
    const images = [
        "/valentines/images/img1.jpg",
        "/valentines/images/img2.jpg",
    ];

    return (
        <div className="min-h-screen p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-center text-pink-600">
                    Our Memories !
                </h1>
                <button 
                    className="btn btn-primary"
                    onClick={() => navigate('/about')}
                >
                    Next Surprise ➡️
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 shadow-xl cursor-pointer transform transition-transform hover:scale-105"
                        onClick={() => setSelectedImage(image)}
                    >
                        <figure>
                            <img
                                src={image}
                                alt={`Memory ${index + 1}`}
                                className="w-full h-64 object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <p className="text-center text-pink-400">
                                Memory #{index + 1} ❤️
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <img
                            src={selectedImage}
                            alt="Enlarged view"
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                        <button
                            className="absolute top-4 right-4 btn btn-circle btn-sm"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
            <Hearts />
        </div>
    );
};

export default Gallery;
