import { useState } from "react";
import { projects } from "../data/projects";
import { project } from "../types";
import { Button } from "./ui/Button";

export function Projects() {
  // Usamos el tipo Project o null
  const [selectedProject, setSelectedProject] = useState<project | null>(null);

  // Definimos el tipo de project en la función
  const handleSelect = (project: project) => {
    setSelectedProject(selectedProject?.id === project.id ? null : project);
  };

  return (
    <section className="py-20 bg-[#F3F4F5]">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-black mb-6 text-center">
          Nuestros Proyectos
        </h2>
        <p className="text-gray-700 mb-12 text-center max-w-2xl mx-auto">
          Desarrollamos soluciones innovadoras que transforman la manera en que
          nuestros clientes hacen negocios.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1D3557] p-6 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#192F4D]"
              onClick={() => handleSelect(project)}
            >
              <h3 className="text-2xl font-bold text-[#F1FAEE]">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="mt-8 p-8 bg-[#1D3557] rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1 flex justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-80 rounded-lg shadow-lg hover:scale-110 duration-500 transition-transform"
                />
              </div>
              <div className="flex-1 text-white">
                <h3 className="text-3xl font-bold text-[#F1FAEE] mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex justify-center gap-2 pt-10">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="semi-rounded">Ver</Button>
                  </a>
                  <Button
                    variant="semi-rounded"
                    color="white"
                    onClick={() => setSelectedProject(null)}
                  >
                    Cerrar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
