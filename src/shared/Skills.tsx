import { useState } from "react";
import { 
  FaPython, FaReact, FaGitAlt, FaGithub, FaRobot 
} from "react-icons/fa";
import { SiSqlite, SiPostgresql, SiJira } from "react-icons/si";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// --- 1. DATOS DE TECNOLOGÍAS ---
const technologiesData = [
  {
    name: "Python",
    icon: <FaPython className="text-blue-400 text-2xl" />,
    color: "border-blue-500",
    bgColor: "bg-blue-500/10",
    details: [
      "Aplicaciones de escritorio con Tkinter",
      "Backend con FastAPI",
      "Automatización de procesos",
      "Procesamiento de datos"
    ]
  },
  {
    name: "React + TS",
    icon: <FaReact className="text-cyan-400 text-2xl" />,
    color: "border-cyan-500",
    bgColor: "bg-cyan-500/10",
    details: [
      "Interfaces modernas y responsive",
      "Componentes reutilizables",
      "TypeScript para seguridad de tipos",
      "Gestión de estado con Hooks"
    ]
  },
  {
    name: "SQLite",
    icon: <SiSqlite className="text-orange-400 text-2xl" />,
    color: "border-orange-500",
    bgColor: "bg-orange-500/10",
    details: [
      "Bases de datos locales",
      "Consultas optimizadas",
      "Diseño de esquemas simples",
      "Integración con aplicaciones desktop"
    ]
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-purple-400 text-2xl" />,
    color: "border-purple-500",
    bgColor: "bg-purple-500/10",
    details: [
      "Bases de datos avanzadas",
      "Consultas complejas",
      "Integración con backend",
      "Diseño de bases de datos relacionales"
    ]
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-red-400 text-2xl" />,
    color: "border-red-500",
    bgColor: "bg-red-500/10",
    details: [
      "Control de versiones",
      "Ramas y merges",
      "Resolución de conflictos",
      "Workflows colaborativos"
    ]
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-300 text-2xl" />,
    color: "border-gray-400",
    bgColor: "bg-gray-800",
    details: [
      "Pull requests y code review",
      "Repositorios remotos",
      "GitHub Actions básico",
      "Gestión de issues y proyectos"
    ]
  },
  {
    name: "IA / NLP", // CORREGIDO: Sin espacio inicial
    icon: <FaRobot className="text-green-400 text-2xl" />,
    color: "border-green-500",
    bgColor: "bg-green-500/10",
    details: [
      "Whisper para transcripción",
      "BERT y DistilBERT para análisis de texto",
      "Procesamiento multilingüe",
      "Modelos pre-entrenados"
    ]
  },
  {
    name: "Jira",
    icon: <SiJira className="text-blue-600 text-2xl" />,
    color: "border-blue-600",
    bgColor: "bg-blue-600/10",
    details: [
      "Gestión de proyectos ágiles",
      "Seguimiento de tareas",
      "Planificación de sprints",
      "Tableros Kanban personalizados"
    ]
  }
];

// --- 2. COMPONENTE INDIVIDUAL ---

interface TechCardProps {
  tech: typeof technologiesData[0];
  isOpen: boolean;
  onToggle: () => void;
}

const TechCard = ({ tech, isOpen, onToggle }: TechCardProps) => {
  // ID único para accesibilidad
  const contentId = `details-${tech.name.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div 
      // MEJORA: hover:-translate-y-1 da el efecto de elevación
      className={`bg-gray-900/90 border-2 ${tech.color} ${tech.bgColor} rounded-xl p-5 
                 transition-all duration-300 hover:border-opacity-100 border-opacity-40 
                 hover:-translate-y-1 hover:shadow-lg`}
    >
      <button 
        className="flex items-center justify-between w-full focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-lg p-1 cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-gray-800/90 rounded-lg transition-colors group-hover:bg-gray-800">
            {tech.icon}
          </div>
          <span className="text-white font-semibold text-lg text-left">{tech.name}</span>
        </div>
        <div className="p-1.5 bg-gray-800/70 rounded-md transition-transform duration-300">
          {isOpen ? 
            <FiChevronUp className="text-white text-lg" /> : 
            <FiChevronDown className="text-white text-lg" />
          }
        </div>
      </button>

      {/* Contenido desplegable */}
      <div 
        id={contentId}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="ml-2 text-gray-300 space-y-2 pl-12">
            {tech.details.map((detail, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-400 mr-2 text-sm mt-0.5">•</span>
                <span className="text-sm leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- 3. COMPONENTE PRINCIPAL ---

export const Skills = () => {
  const [openTechName, setOpenTechName] = useState<string | null>(null);

  const handleToggle = (name: string) => {
    setOpenTechName(prev => prev === name ? null : name);
  };

  return (
    <section id="skills" className="min-h-screen bg-black py-16 flex flex-col justify-center">
      {/* max-w-7xl para más espacio horizontal en pantallas grandes */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-left">
            Tecnologías y Herramientas
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            Tecnologías y herramientas esenciales que uso día a día.
          </p>
        </div>

        {/* GRID RESPONSIVE:
            - items-start: Evita que se estiren verticalmente.
            - lg:grid-cols-4: 4 columnas en PC.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
          {technologiesData.map((tech) => (
            <TechCard 
              key={tech.name} 
              tech={tech} 
              isOpen={openTechName === tech.name}
              onToggle={() => handleToggle(tech.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};