import { useState } from "react"
import { Button } from "./ui/Button"
import { ChevronsLeftRightEllipsis } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseMenu = ( e: React.MouseEvent<HTMLDivElement> ) => {
    const target = e.target as HTMLElement;
    if ( target.closest("a") || target.closest("button") ) {
          setIsOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:px-24 bg-[#FFFFFF]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl text-black uppercase hover:text-[#1D3557] flex items-center  font-monomaniac group">
              <ChevronsLeftRightEllipsis className="text-[#457B9D] w-10 h-10" />
              <p className="px-2">Web</p>
              <p>
                <span className="ml-1">F</span>
                <span className=" text-[#457B9D] group-hover:text-[#1D3557]">{'{}'}</span>
                <span className="">RM</span>
              </p>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 justify-center content-center">
            <a href="#" className="text-black border-b-2 border-[#457B9D] w-16 hover:text-[#1D3557] transition-colors">
              Inicio
            </a>
            <a href="#Nosotros" className="text-black hover:text-[#1D3557] w-16 transition-colors">
              Nosotros
            </a>
            <a href="#Servicios" className="text-black hover:text-[#1D3557] w-16 transition-colors">
              Servicios
            </a>
          </div>
          <a href="#Contacto">
            <Button className="hidden md:flex" variant="rounded" color="red">Contáctanos</Button>
          </a>

          {/* Mobile Navigation Button */}
          <button className="md:hidden text-[#1D3557]" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-4" onClick={handleCloseMenu}>
              <a href="#" className="text-black hover:text-[#1D3557] transition-colors">
                Inicio
              </a>
              <a href="#Nosotros" className="text-black hover:text-[#1D3557] transition-colors">
                Nosotros
              </a>
              <a href="#Servicios" className="text-black hover:text-[#1D3557] transition-colors">
                Servicios
              </a>
              <a href="#Contacto" className="md:hidden flex justify-center">
                <Button variant="rounded" color="red">Contáctanos</Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

