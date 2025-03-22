import { ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="py-24">
      <div className="max-w-[2000px] mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold">Blog de mascotas</h2>
          <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium text-lg flex items-center">
            Ver todo <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Mi gato y yo: ¿Cómo afecta a mi gato la llegada de una nueva persona a casa?",
              image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=2000&q=80",
              date: "22 Mar 2024"
            },
            {
              title: "¿Sabías qué es el Canicross? Un deporte en el que vos y tu perro se convierten en un gran equipo.",
              image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=2000&q=80",
              date: "20 Mar 2024"
            },
            {
              title: "¿Los perros sueñan? Qué dice la ciencia sobre el mundo onírico de tu mejor amigo.",
              image: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=2000&q=80",
              date: "18 Mar 2024"
            }
          ].map((post, index) => (
            <div key={index} className="group">
              <div className="relative h-[400px] rounded-3xl overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <span className="text-sm text-gray-500">{post.date}</span>
              <h3 className="text-2xl font-semibold mt-4 mb-6 line-clamp-2">{post.title}</h3>
              <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
                Leer más <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
