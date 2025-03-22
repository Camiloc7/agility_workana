const Newsletter = () => {
  return (
    <div className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
      <div className="relative max-w-[2000px] mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">¡No te pierdas nuestras novedades!</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-6 py-4 rounded-l-full text-lg"
            />
            <button className="px-10 py-4 bg-gray-900 text-white rounded-r-full text-lg font-medium">
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
