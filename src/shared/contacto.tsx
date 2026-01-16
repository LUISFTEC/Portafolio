import { useState } from "react";
import { FiX, FiCopy, FiCheck } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [copied, setCopied] = useState(false);
  const emailReal = "Luisftec2022@gmail.com"; // El texto que se copiará al portapapeles

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailReal);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Volver al estado normal después de 2 seg
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    // Fondo oscuro (Backdrop)
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-all"
      onClick={onClose} // Si hacen clic afuera, se cierra
    >
      {/* Contenedor del Modal */}
      <div 
        className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-md w-full relative shadow-2xl transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro cierre el modal
      >
        {/* Botón Cerrar (X) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
        >
          <FiX size={24} />
        </button>

        {/* Contenido */}
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-blue-500/10 rounded-full mb-6 text-blue-400">
            <FaEnvelope size={40} />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">¡Contáctame!</h2>
          <p className="text-gray-400 mb-8">
            Si tienes alguna propuesta o proyecto, no dudes en escribirme.
          </p>

          {/* Área del Correo (Imagen para seguridad) */}
          <div className="bg-black/50 border border-gray-800 rounded-xl p-4 w-full flex items-center justify-between gap-4 mb-2">
            {/* AQUÍ VA LA IMAGEN DE TU CORREO */}
            {/* Si aún no tienes la imagen, usa este placeholder temporalmente */}
            <div className="h-6 flex items-center select-none opacity-90">
               {/* Reemplaza este <span> por: <img src="img/email-image.png" alt="email" className="h-5" /> */}
               <span className="text-gray-300 font-mono text-lg blur-[0.5px] select-none pointer-events-none">
                 Luisftec2022@gmail.com
               </span>
            </div>

            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                copied 
                  ? "bg-green-500/20 text-green-400 hover:bg-green-500/30" 
                  : "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
              }`}
            >
              {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
              {copied ? "¡Copiado!" : "Copiar"}
            </button>
          </div>
          
          <p className="text-xs text-gray-600 mt-2">
            Haz clic en copiar para llevarte el correo al portapapeles.
          </p>
        </div>
      </div>
    </div>
  );
};