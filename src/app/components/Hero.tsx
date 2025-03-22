const Hero = () => {
    return (
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=2000&q=80"
          alt="Perro y gato juntos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
          <div className="max-w-[2000px] mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
                Una propuesta única,
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  BI-FUNCIONAL
                </span>
              </h1>
              <button className="px-10 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold hover:shadow-xl">
                CONOCÉ MÁS
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  