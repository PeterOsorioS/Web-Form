export function Hero() {
  return (
    <section className="relative pt-28 lg:pt-48 lg:px-20 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Innovative Software
              <br />
              Solutions Provider
            </h1>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="flex-1 relative">
            <img
              src="./Foto_Inicio2.webp"
              alt="Professional with laptop"
              className="w-full max-w-xl mx-auto"
            />
            {/* Floating Elements */}
            <div className="absolute top-32  right-0 animate-float-delayed">
              <img  
                src="./Abstract_Hashtag.svg" 
                alt="" 
                className="w-15 h-15" 
              />
            </div>
            <div className="absolute top-48 bottom-0 left-0 animate-float">
              <img 
                src="./Abstract_Hashtag.svg" 
                alt="" 
                className="w-15 h-15" 
              />
            </div>
          </div>
        </div>
      </div>
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-red-500/ rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl" />
    </section>
  )
}

