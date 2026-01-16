import { useState } from "react"; // <--- 1. IMPORTANTE: Importar useState
import { Inicio } from "../shared/Inicio";
import { Portfolio } from "../shared/Proyectos";
import { Skills } from "../shared/Skills";
import { Navbar } from "../shared/Navbar";
import { ContactModal } from "../shared/contacto"; // <--- 2. Asegúrate de importar tu Modal (revisa si la ruta es correcta)

export const HomePage = () => {
  // 4. CREAR EL ESTADO (La "memoria" para saber si abrir o cerrar)
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div>
      {/* 5. CORRECCIÓN DEL ERROR: Pasarle la función al Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <Inicio />
      <Skills />
      <Portfolio />
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
};