import { useState } from 'react';
import { FiMenu, FiX, FiHome, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';

// 1. Definimos que este componente recibe una "orden" (función) para abrir el contacto
interface NavbarProps {
  onOpenContact: () => void;
}

// 2. Recibimos esa función aquí arriba ({ onOpenContact })
export const Navbar = ({ onOpenContact }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  const navItems = [
    { id: 'home', label: 'Inicio', icon: <FiHome /> },
    { id: 'skills', label: 'Habilidades', icon: <FiCode /> },
    { id: 'portafolio', label: 'Proyectos', icon: <FiBriefcase /> },
    { id: 'contact', label: 'Contacto', icon: <FiMail /> },
  ];

  const goTo = (id: string) => {
    setActive(id);
    setOpen(false); // Cierra el menú móvil si está abierto

    // --- AQUÍ ESTÁ EL ÚNICO CAMBIO ---
    // Si el botón presionado es 'contact', ejecutamos la función del modal y NO hacemos scroll.
    if (id === 'contact') {
      onOpenContact();
      return; // "return" significa: detente aquí, no sigas bajando.
    }
    // ---------------------------------

    // --- ESTO ES TU CÓDIGO ORIGINAL (NO SE TOCÓ) ---
    // Busca la sección y baja hasta ella (Scroll)
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* NAVBAR DESKTOP (IGUAL QUE ANTES) */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-2xl px-4 py-2 shadow-xl flex gap-2">
          {navItems.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition
                ${
                  active === id
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
            >
              <span className="text-base">{icon}</span>
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* BOTÓN MÓVIL (IGUAL QUE ANTES) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-5 right-5 z-50 p-3 rounded-xl bg-gray-900/90 border border-gray-700 backdrop-blur-md shadow-lg"
      >
        {open ? <FiX className="text-white w-6 h-6" /> : <FiMenu className="text-white w-6 h-6" />}
      </button>

      {/* MENÚ MÓVIL (IGUAL QUE ANTES) */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-md pt-24 px-6 flex flex-col gap-2">
          {navItems.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className={`flex items-center gap-3 px-5 py-4 rounded-xl transition
                ${
                  active === id
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
            >
              <span className="text-xl">{icon}</span>
              <span className="text-base font-medium">{label}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
};