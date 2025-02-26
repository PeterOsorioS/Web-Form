import { Button } from "./ui/Button"

export function Support() {
  return (
    <section className="lg:p-20 pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 ">
          <div className="flex-1 m-5 lg:m-10 mt-0">
            <h2 className="text-3xl font-bold text-center  lg:text-start mb-10">¿Necesitas ayuda inmediata?</h2>
            <p className="text-gray-400 text-center   mb-8 md:text-start">
              Nuestro equipo de soporte está disponible 24/7 para
              ayudarte con cualquier problema técnico. Ofrecemos
              soluciones integrales de soporte IT para mantener tu
              infraestructura tecnológica funcionando de manera óptima.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-normal gap-4">
              <Button variant="semi-rounded" color="dark-red">Contactar soporte</Button>
              <Button variant="semi-rounded" color="white">Cancelar soporte</Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              src="Necesitas_Ayuda.webp"
              alt="Support representative"
              className="w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto"
            />
            <div className="absolute top-40 left-10 md:top-72 md:left-22 lg:top-72 lg:left-12 animate-float-delayed">
              <img src="./Abstract_Hashtag.svg" alt="" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16" />
            </div>
            <div className="absolute top-24 right-16 md:top-48 md:right-28 lg:top-44 lg:right-14 animate-float">
              <img src="./Abstract_Hashtag.svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

