import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-24">
      <div className="max-w-[2000px] mx-auto px-4 grid md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Agility</h3>
          <p className="text-gray-400">Nutrición premium para mascotas</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-6">PRODUCTOS</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Perros</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Gatos</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Agility+</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-6">AYUDA</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Preguntas frecuentes</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Dónde comprar</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-6">REDES SOCIALES</h3>
          <div className="flex space-x-6">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white transition-all duration-300">
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-20 pt-8 text-center">
        <p className="text-sm text-gray-400">© 2024 Agility. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
