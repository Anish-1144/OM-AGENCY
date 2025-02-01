import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ourWorkItems = [
  { path: "web-design", label: "Web Design" },
  { path: "graphic-design", label: "Graphic Design" },
  { path: "app-development", label: "App Development" },
  { path: "video-production", label: "Video Production" },
  { path: "digital-marketing", label: "Digital Marketing" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-transparent w-full relative">
      <div className="container mx-auto px-4">
        <div className="p-6 flex items-center justify-between h-36">
          <Link to="/" className="flex-shrink-0">
            <div className="bg-white w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
              <img src="/logo.png" onClick={handleMenuClose} alt="" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-2xl">
            <NavLink
              to="/services"
              className="text-white font-semibold hover:text-opacity-80 transition-colors"
            >
              SERVICES
            </NavLink>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white font-semibold hover:text-opacity-80 transition-colors focus:outline-none">
                OUR WORK <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none min-w-[200px]">
                {ourWorkItems.map((item) => (
                  <DropdownMenuItem
                    key={item.path}
                    className="focus:bg-[#D91A46] focus:text-white"
                  >
                    <Link
                      to={`/our-work/${item.path}`}
                      className="w-full p-2 font-medium"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/hiring"
              className="text-white font-semibold hover:text-opacity-80 transition-colors"
            >
              HIRING
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="secondary"
              className="font-bold mb-2 bg-white h-12 w-32 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none hover:bg-white"
            >
              GET IN TOUCH!
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img
              className="h-10 w-10 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none hover:bg-white"
              src="/menu.png"
              alt=""
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/services"
                className="text-white font-semibold hover:text-opacity-80 transition-colors"
                onClick={handleMenuClose}
              >
                SERVICES
              </Link>

              {/* Mobile Our Work Submenu */}
              <div className="space-y-2">
                <div className="text-white font-semibold">OUR WORK</div>
                <div className="pl-4 space-y-2">
                  {ourWorkItems.map((item) => (
                    <Link
                      key={item.path}
                      to={`/our-work/${item.path}`}
                      className="block text-white text-sm hover:text-opacity-80 transition-colors"
                      onClick={handleMenuClose}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/hiring"
                className="text-white font-semibold hover:text-opacity-80 transition-colors"
                onClick={handleMenuClose}
              >
                HIRING
              </Link>

              <Button
                variant="secondary"
                className="font-bold w-full bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none hover:bg-white"
                onClick={handleMenuClose}
              >
                GET IN TOUCH!
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
