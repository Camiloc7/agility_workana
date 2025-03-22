import { Heart, Shield, Dumbbell, Sparkles } from "lucide-react";

const Benefits = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[2000px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-20">Beneficios de Agility+</h2>
        <div className="grid md:grid-cols-4 gap-12">
          {[
            { icon: Heart, title: "Sistema cardiovascular saludable" },
            { icon: Dumbbell, title: "Masa muscular magra y fuerte" },
            { icon: Shield, title: "Sistema inmunológico activo" },
            { icon: Sparkles, title: "Pelaje brilloso y salud digestiva" }
          ].map((benefit, index) => (
            <div key={index} className="group text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mb-8 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <benefit.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
