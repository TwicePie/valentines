import Hearts from "../components/Hearts";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  pt-60">
      <div className="relative group w-64 h-64 cursor-pointer">
        {/* Letter content - placed first so it's behind */}
        <div className="absolute inset-4 flex items-center justify-center p-4 bg-white rounded-lg shadow-inner transform translate-y-4 group-hover:translate-y-[-120%] transition-transform duration-500 z-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-pink-600 mb-2">Dear My Love</h2>
            <p className="text-gray-700">Selamat ! Kamu dapat bunga yeaaaayyy 🌹🌹🌹</p>
            <p className="text-gray-700">Ku kasih waktu udaaa di malang yaaaa </p>
          </div>
        </div>

        {/* Envelope back - placed second */}
        <div className="absolute inset-0 bg-pink-200 rounded-lg shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 z-20">
          {/* Envelope flap */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-pink-300 rounded-t-lg origin-bottom transform group-hover:rotate-x-180 transition-transform duration-500 z-30" 
               style={{ transformStyle: 'preserve-3d' }}>
            <div className="absolute inset-0 flex items-center justify-center bg-pink-100 rounded-lg backface-hidden">
              <span className="text-pink-500 text-xl">❤️</span>
            </div>
          </div>
        </div>
      </div>
      <Hearts />
    </div>
  );
};

export default About;
