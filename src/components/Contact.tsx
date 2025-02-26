import { useRef, useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { sendEmail } from "../lib/emailJS";
import { ToastContainer } from 'react-toastify';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
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
    <section className="py-20" id={isDesktop ? "Contacto" : undefined}>
      <ToastContainer theme="light"/>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-2">
            <img
              src="./Contactanos.svg"
              alt="Contact representative"
              className="w-full max-w-2xl mx-auto"
            />
          </div>
          <div className="pt-20 flex-1 w-full" id={!isDesktop ? "Contacto" : undefined}>
            <div className="bg-white p-5 rounded-2xl shadow-lg border border-[#DFE0E0]">
              <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
              <form
                ref={formRef}
                onSubmit={(e) => sendEmail(e, formRef)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-3 text-start">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="ps-3 w-full py-2 border-1 border-[#DFE0E0] bg-[#FAFBFC] rounded-lg focus:ring-1 focus:ring-red-500 outline-none"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Correo
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="ps-3 w-full py-2 border-1 border-[#DFE0E0] bg-[#FAFBFC] rounded-lg focus:ring-1 focus:ring-red-500 outline-none"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="text-start">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 mb-2 border-1 border-[#DFE0E0] bg-[#FAFBFC] rounded-lg focus:ring-1 focus:ring-red-500 outline-none"
                    placeholder="Asunto de tu mensaje"
                    required
                  />
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium my-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border-1 border-[#DFE0E0] bg-[#FAFBFC] rounded-lg focus:ring-1 focus:ring-red-500 outline-none"
                    placeholder="Escribe tu mensaje"
                    required
                  ></textarea>
                </div>
                <Button id='boton' variant="semi-rounded" color="red" className="lg:flex items-start">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
