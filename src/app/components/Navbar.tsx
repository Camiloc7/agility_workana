// "use client";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
//       <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <span className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             Agility
//           </span>
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-12">
//             {["PERROS", "GATOS", "AGILITY+", "BLOG", "DÓNDE COMPRAR"].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="text-gray-700 hover:text-indigo-600 transition-all duration-300 text-sm font-medium tracking-wider"
//               >
//                 {item}
//               </a>
//             ))}
//             <a
//               href="#"
//               className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-medium tracking-wider hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
//             >
//               CONTACTO
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100">
//           <div className="px-4 pt-2 pb-3 space-y-3">
//             {["PERROS", "GATOS", "AGILITY+", "BLOG", "DÓNDE COMPRAR", "CONTACTO"].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="block text-gray-700 hover:text-indigo-600 transition-all duration-300 text-sm font-medium tracking-wider"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





////////////////////////////////////////////////////



// "use client";
// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import Image from "next/image";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (menu) => {
//     setOpenDropdown(openDropdown === menu ? null : menu);
//   };

//   return (

//     <nav className="fixed w-full z-50 bg-white shadow-md h-[90px] flex items-center">
//       <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="flex justify-between items-center h-150%">


//           {/* Logo */}
//           <a href="#">
//             <Image
//               src="/agility.png"
//               alt="Agility"
//               width={180}
//               height={60}
//               priority
//             />
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-12">
//             {/* Perros */}
//             <div className="relative group">
//               <button
//                 onClick={() => toggleDropdown("perros")}
//                 className="flex items-center text-white hover:text-gray-300 transition-all duration-300 text-sm font-medium tracking-wider"
//               >
//                 PERROS <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               {openDropdown === "perros" && (
//                 <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2">
//                   <div className="px-4 py-2 text-gray-600 font-semibold">Secos</div>
//                   {[
//                     "Agility+",
//                     "Cachorros",
//                     "Adultos Talla Pequeña",
//                     "Adultos Talla Mediana y Grande",
//                     "Derma Control",
//                     "Adultos 7+",
//                     "Agility Control de peso",
//                   ].map((item) => (
//                     <a
//                       key={item}
//                       href="#"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     >
//                       {item}
//                     </a>
//                   ))}
//                   <div className="px-4 py-2 text-gray-600 font-semibold">Húmedos</div>
//                   {[
//                     "Agility+",
//                     "Cachorros",
//                     "Adultos Carne Vacuna",
//                     "Adultos Carne de Pollo",
//                     "Adultos Carne de Cerdo",
//                   ].map((item) => (
//                     <a
//                       key={item}
//                       href="#"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     >
//                       {item}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Gatos */}
//             <div className="relative group">
//               <button
//                 onClick={() => toggleDropdown("gatos")}
//                 className="flex items-center text-white hover:text-gray-300 transition-all duration-300 text-sm font-medium tracking-wider"
//               >
//                 GATOS <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               {openDropdown === "gatos" && (
//                 <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2">
//                   <div className="px-4 py-2 text-gray-600 font-semibold">Secos</div>
//                   {["Agility+", "Kitten", "Adults", "Urinary", "Control peso"].map((item) => (
//                     <a
//                       key={item}
//                       href="#"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     >
//                       {item}
//                     </a>
//                   ))}
//                   <div className="px-4 py-2 text-gray-600 font-semibold">Húmedos</div>
//                   {[
//                     "Agility+",
//                     "Gatitos",
//                     "Adultos Sardina",
//                     "Adultos Merluza",
//                     "Adultos Pollo",
//                     "Adultos Carne Vacuna",
//                     "Hígado Vacuno",
//                     "Urinary",
//                   ].map((item) => (
//                     <a
//                       key={item}
//                       href="#"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     >
//                       {item}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Agility+ */}
//             <div className="relative group">
//               <button
//                 onClick={() => toggleDropdown("agility")}
//                 className="flex items-center text-white hover:text-gray-300 transition-all duration-300 text-sm font-medium tracking-wider"
//               >
//                 AGILITY+ <ChevronDown className="ml-1 h-4 w-4" />
//               </button>
//               {openDropdown === "agility" && (
//                 <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2">
//                   <div className="px-4 py-2 text-gray-600 font-semibold">Perros</div>
//                   {["Secos", "Húmedos"].map((item) => (
//                     <a
//                       key={item}
//                       href="#"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     >
//                       {item}
//                     </a>
//                   ))}
//                   <div className="px-4 py-2 text-gray-600 font-semibold">Gatos</div>
//                   {["Secos", "Húmedos"].map((item) => (
//                     <a
//                       key={item}
//                       href="#"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     >
//                       {item}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Otras secciones */}
//             {["BLOG", "DÓNDE COMPRAR"].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="text-white hover:text-gray-300 transition-all duration-300 text-sm font-medium tracking-wider"
//               >
//                 {item}
//               </a>
//             ))}

//             <a
//               href="#"
//               className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-medium tracking-wider hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
//             >
//               CONTACTO
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-[#0b255d] border-t border-gray-700">
//           <div className="px-4 pt-2 pb-3 space-y-3">
//             {["PERROS", "GATOS", "AGILITY+", "BLOG", "DÓNDE COMPRAR", "CONTACTO"].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="block text-white hover:text-gray-300 transition-all duration-300 text-sm font-medium tracking-wider"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

const toggleDropdown = (menu: string) => {
  setOpenDropdown(openDropdown === menu ? null : menu);
};


  return (
    <nav className="fixed w-full z-50 bg-white shadow-md h-[90px] flex items-center">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Logo */}
          <a href="#">
            <Image
              src="/agility.png"
              alt="Agility"
              width={180}
              height={60}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {/* Perros */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("perros")}
                className="flex items-center text-[#0b255d] hover:text-gray-600 transition-all duration-300 text-sm font-medium tracking-wider"
              >
                PERROS <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === "perros" && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                  <div className="px-4 py-2 text-[#0b255d] font-semibold">Secos</div>
                  {[
                    "Agility+",
                    "Cachorros",
                    "Adultos Talla Pequeña",
                    "Adultos Talla Mediana y Grande",
                    "Derma Control",
                    "Adultos 7+",
                    "Agility Control de peso",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-[#0b255d] hover:bg-gray-100 transition-all"
                    >
                      {item}
                    </a>
                  ))}
                  <div className="px-4 py-2 text-[#0b255d] font-semibold">Húmedos</div>
                  {[
                    "Agility+",
                    "Cachorros",
                    "Adultos Carne Vacuna",
                    "Adultos Carne de Pollo",
                    "Adultos Carne de Cerdo",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-[#0b255d] hover:bg-gray-100 transition-all"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Gatos */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("gatos")}
                className="flex items-center text-[#0b255d] hover:text-gray-600 transition-all duration-300 text-sm font-medium tracking-wider"
              >
                GATOS <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === "gatos" && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                  <div className="px-4 py-2 text-[#0b255d] font-semibold">Secos</div>
                  {["Agility+", "Kitten", "Adults", "Urinary", "Control peso"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-[#0b255d] hover:bg-gray-100 transition-all"
                    >
                      {item}
                    </a>
                  ))}
                  <div className="px-4 py-2 text-[#0b255d] font-semibold">Húmedos</div>
                  {[
                    "Agility+",
                    "Gatitos",
                    "Adultos Sardina",
                    "Adultos Merluza",
                    "Adultos Pollo",
                    "Adultos Carne Vacuna",
                    "Hígado Vacuno",
                    "Urinary",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-[#0b255d] hover:bg-gray-100 transition-all"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Agility+ */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown("agility")}
                className="flex items-center text-[#0b255d] hover:text-gray-600 transition-all duration-300 text-sm font-medium tracking-wider"
              >
                AGILITY+ <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === "agility" && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                  <div className="px-4 py-2 text-[#0b255d] font-semibold">Perros</div>
                  {["Secos", "Húmedos"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-[#0b255d] hover:bg-gray-100 transition-all"
                    >
                      {item}
                    </a>
                  ))}
                  <div className="px-4 py-2 text-[#0b255d] font-semibold">Gatos</div>
                  {["Secos", "Húmedos"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-[#0b255d] hover:bg-gray-100 transition-all"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Otras secciones */}
            {["BLOG", "DÓNDE COMPRAR"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#0b255d] hover:text-gray-600 transition-all duration-300 text-sm font-medium tracking-wider"
              >
                {item}
              </a>
            ))}

            {/* Botón Contacto */}
            <a
              href="#"
              className="px-6 py-2 bg-[#0b255d] text-white rounded-full text-sm font-medium tracking-wider shadow-md 
              hover:shadow-lg hover:bg-[#09204a] transition-all duration-300 transform hover:scale-105"
            >
              CONTACTO
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#0b255d]">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-3">
            {["PERROS", "GATOS", "AGILITY+", "BLOG", "DÓNDE COMPRAR", "CONTACTO"].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-[#0b255d] hover:text-gray-600 transition-all duration-300 text-sm font-medium tracking-wider"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
