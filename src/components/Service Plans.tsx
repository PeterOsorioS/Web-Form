import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Plans } from "../data/plans";
import { Button } from "./ui/Button";
import { CheckCircle } from "lucide-react";

export function ServicePlans() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="Servicios" className="lg:px-20 mx-auto py-10">
      <h4 className="text-black font-bold text-3xl pb-10 text-center">
        Nuestros Planes
      </h4>
      <div className="slider-container min-h-[500px]">
        <Slider {...settings}>
          {Plans.map((plan, index) => (
            <div key={index} className="p-5 flex flex-col items-center h-full">
              <div 
                className="bg-[#FAFBFC] border border-gray-300 rounded-2xl shadow-lg p-6 text-center
                 w-80 mx-auto hover:scale-105 transition-transform duration-300 min-h-[500px] flex flex-col">
                <p
                  className={`text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${plan.degradado} mb-2 uppercase`}
                >
                  {plan.name}
                </p>
                <p className="text-gray-700 font-medium text-sm">
                  {plan.description}
                </p>
                <p className="text-black font-bold text-3xl py-3">
                  ${plan.price}
                  <span className="text-sm font-medium text-gray-400">
                    {" "}
                    / Pago Único
                  </span>
                </p>
                <div className="mt-auto">
                  <a href="#Contacto">
                    <Button variant="rounded" className="w-full mt-4">
                      Cotiza ahora
                    </Button>
                  </a>
                </div>
                <ul className="text-left mt-5 space-y-2 text-gray-700 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      {typeof feature === "string" ? (
                        <>
                          <CheckCircle className="text-[#E63946] w-5 h-5 mr-2" />
                          {feature}
                        </>
                      ) : (
                        <>
                          <feature.icon className="w-5 h-5 mr-2" />
                          {feature.text}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
