import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceSection from "./ServiceCards";

export function ServiceBanner() {
  return (
    <div className="w-full bg-[#D91A46] bg-cover h-full overflow-hidden md:mb-2 text-white p-5 flex flex-col md:flex-row items-center gap-8">
      {/* Left section with title and description */}
      <div className="flex-1 space-y-4 md:space-y-6">
        <div className="mb-8 rounded-xl border-4 border-black bg-orange-400 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-greatLakes md:text-3xl text-black font-bold">
            "UNLEASH YOUR BRAND'S POTENTIAL WITH OUR EXPERT SERVICES"
          </h2>
        </div>
        <h1 className="text-3xl md:text-6xl font-gogo p-6 hidden md:block">
          GROW THROUGH OUR SPECTRUM OF SERVICES
        </h1>
        <p className="text-lg opacity-90 max-w-xl px-4">
          We don't just offer services, we offer Brand Transformations! Whether
          it's creating compelling narratives or mastering social media, our
          services are designed to boost your brand's visibility, deepen
          customer connections, and drive lasting growth.
        </p>
      </div>

      {/* Right section with image */}
      <div className="w-96 md:w-1/2">
        <img
          src="https://res.cloudinary.com/dmrwefamp/image/upload/v1738591537/service_ijraws.png"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
