const Categories = () => {
  return (
    <div className="py-24">
      <div className="max-w-[2000px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "PERRO",
              description: "Nutrición premium para tu mejor amigo",
              image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=2000&q=80"
            },
            {
              title: "GATO",
              description: "Alimento especializado para felinos",
              image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=2000&q=80"
            }
          ].map((category, index) => (
            <div key={index} className="group relative h-[600px] overflow-hidden rounded-3xl">
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-12">
                <h3 className="text-4xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-xl text-white/90 mb-8">{category.description}</p>
                <button className="w-fit px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  Ver productos
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
