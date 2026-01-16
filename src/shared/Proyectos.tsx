import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";

// Datos de proyectos
const portfolioData = [
  {
    id: 1,
    title: "Supervisión de Calidad con IA",
    shortDesc: "App de escritorio para auditoría automática de llamadas con NLP",
    longDesc: "Aplicación de escritorio end-to-end que automatiza el control de calidad en Call Centers. Desarrollé la interfaz en React/Electron e integré modelos de IA: Faster Whisper para transcripción y un modelo DistilBERT fine-tuneado por mí para clasificar riesgos y fraudes en las conversaciones. Genera reportes automáticos con timestamps, optimizando el tiempo de revisión de los supervisores.",
    technologies: ["Electron", "React", "TypeScript", "Python", "Faster Whisper", "DistilBERT", "Pandas"],
    image: "img/callcenter-ai.png", 
    github: "https://github.com/LuisFTEC",
    liveUrl: ""
  },
  {
    id: 2,
    title: "Proyecto en Construcción",
    shortDesc: "Próximamente...",
    longDesc: "###################################################### ###################################################### ######################################",
    technologies: ["React", "Node.js", "Pending..."],
    image: "img/placeholder2.png",
    github: "https://github.com/LuisFTEC",
    liveUrl: ""
  },
  {
    id: 3,
    title: "Proyecto Pendiente",
    shortDesc: "Se añadirá información pronto",
    longDesc: "****************************************************** ****************************************************** **************************************",
    technologies: ["Tech A", "Tech B", "Tech C"],
    image: "img/placeholder3.png",
    github: "https://github.com/LuisFTEC",
    liveUrl: ""
  }
];

export const Portfolio = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (id: number) => setExpandedProject(expandedProject === id ? null : id);

  return (
    <section id="portafolio" className="min-h-screen bg-black flex flex-col justify-center py-12">
      {/* max-w-7xl para alinearse con el resto de la web si usaste esa medida en Skills/Footer */}
      <div className="w-full max-w-7xl mx-auto px-6">

        {/* Encabezado ALINEADO A LA IZQUIERDA */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Proyectos</h2>
          <p className="text-gray-400 text-lg max-w-2xl">Soluciones que he desarrollado</p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioData.map((project) => (
            <div key={project.id} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all flex flex-col h-full">

              {/* Imagen */}
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label="Ver código en GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>

                <p className="text-gray-300 mb-4 flex-grow">{project.shortDesc}</p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">{tech}</span>
                  ))}
                </div>

                {/* Botón expandir */}
                <div className="mt-auto relative">
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="w-full flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 py-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                  >
                    {expandedProject === project.id ? <><FiChevronUp /> Ver menos</> : <><FiChevronDown /> Ver más</>}
                  </button>

                  {/* Modal expandido */}
                  {expandedProject === project.id && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">
                      <div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-3xl w-full p-6 relative shadow-2xl">
                        <button 
                          onClick={() => setExpandedProject(null)}
                          className="absolute top-4 right-4 text-gray-400 hover:text-white"
                        >
                          <FiX size={24} />
                        </button>
                        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.longDesc}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};