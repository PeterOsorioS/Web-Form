import { useEffect, useState } from "react";
import { icons_tech } from "../data/iconos";

export function TechStack() {
  
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="lg:p-20 pt-20">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center pb-20 text-3xl">Tecnologías</h2>
        {isDesktop ? (
          <div className="grid  lg:grid-cols-10 gap-y-12 gap-x-6 p-6">
            {icons_tech.map((tech, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center group"
              >
                <img
                  src={tech.image || "/placeholder.svg"}
                  alt={tech.name}
                  className="h-20 w-auto duration-200"
                />
                <p className="absolute bottom-[-2rem] text-black text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative mx-auto overflow-hidden">
            <div className="slide-icon-track">
              {[...icons_tech, ...icons_tech].map((tech, index) => (
                <div
                  key={index}
                  className="shrink-0 w-50 text-center flex flex-col items-center"
                >
                  <img
                    src={tech.image || "/placeholder.svg"}
                    alt={tech.name}
                    className="h-20 w-auto opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                  />
                  <p className=" bottom-[-2rem] text-lg font-semibold">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
