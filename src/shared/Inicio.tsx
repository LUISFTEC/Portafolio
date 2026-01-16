import Aos from "aos";
import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export const Inicio = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  const linkedinUrl = 'https://www.linkedin.com/in/luisftec/';
  const githubUrl = 'https://github.com/luisftec';

  return (
    <section id="home" className="h-screen flex items-center bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Columna izquierda: Texto + botones */}
          <div data-aos="fade-right" className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Luis <br /> Salazar
            </h1>
            <p className="text-gray-400 italic mb-6">
              Egresado de Ingeniería de Sistemas - UPN 2025
            </p>
            <p className="text-gray-300 mb-6">
              Busco oportunidades para aprender, crecer y aportar en proyectos de software y análisis de datos.
            </p>

            {/* Botón y redes alineados horizontalmente */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              {/* Descargar CV */}
              <a
                href="img/cv_pierofernandez2025.pdf"
                download="cv_pierofernandez2025.pdf"
                className="flex items-center gap-2 px-6 py-3 border-2 border-white rounded-lg bg-black text-white hover:bg-white hover:text-black transition-colors"
              >
                <FaDownload className="w-4 h-4" />
                Descargar CV
              </a>

              {/* Redes sociales */}
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors text-2xl">
                <FaLinkedin />
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors text-2xl">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Columna derecha: Imagen */}
          <div data-aos="zoom-in-up" className="flex justify-center md:justify-end">
            <img
              src="img/luis.jpg"
              alt="Luis Salazar"
              className="rounded-3xl md:rounded-full w-64 h-64 md:w-80 md:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
