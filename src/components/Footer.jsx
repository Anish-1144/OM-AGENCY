"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";
import {Link} from "react-router-dom";

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
  };

  return (
    <footer className="bg-[#B57BEE] px-6 py-12 md:mt-5md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info & Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-black">
              Crafting Visions, Frame by Frame
            </h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                          flex items-center justify-center transition-all 
                          hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                          flex items-center justify-center transition-all 
                          hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                          flex items-center justify-center transition-all 
                          hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                          flex items-center justify-center transition-all 
                          hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                          flex items-center justify-center transition-all 
                          hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-black">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {["Services", "Career", "Work", "Contact us"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-black hover:underline w-fit"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Updates Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-black">Updates</h3>
            <p className="text-black">
              Subscribe to our UPDATES section to receive the latest news and
              updates.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                placeholder="Get news and updates..."
                className="flex-1 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                         rounded-none focus-visible:ring-0 focus-visible:ring-offset-0
                         placeholder:text-gray-500"
              />
              <Button
                type="submit"
                className="bg-[#FFD93D] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                         rounded-none transition-all hover:translate-x-[3px] hover:translate-y-[3px] 
                         hover:shadow-none hover:bg-[#FFD93D]"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
