"use client";

import { TypeAnimation } from "react-type-animation";
// import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="bg-[#D91A46] flex flex-col items-start ml-3 md:pl-16 relative text-white mt-24 mb-10 md:mb-48">
      {/* Top text */}
      <h2 className="w-44 text-2xl md:text-3xl font-bold mb-4">
        <img className="mix-blend-multiply" src="/image.jpg" alt="hello" />
      </h2>

      {/* Animated agency name */}
      <div className="text-left mb-4">
        <TypeAnimation
          sequence={[
            "WE ARE BAGORA AGENCY", // Text to animate
            1000, // Pause for 1 second
            "", // Clear text
            500, // Pause for 0.5 seconds
          ]}
          wrapper="h1"
          speed={10}
          className="text-6xl md:text-9xl font-gogo"
          style={{
            WebkitTextStroke: "2px white",
            textShadow: "4px 4px 0px rgba(0,0,0,1)",
          }}
          repeat={Infinity} // Loop infinitely
        />
      </div>

      {/* Subtitle */}
      <p className="text-2xl md:text-5xl mb-8 text-left">
        The Best Agency For Your Business
      </p>

      {/* CTA Button */}
      <Button
        size="lg"
        className="bg-purple-500 mg  h-10 w-28 md:w-44 text-black px-8 py-4 text-lg rounded-none border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-purple-400 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all transform hover:translate-x-[-3px] hover:translate-y-[-3px] uppercase font-bold"
      >
        LET&apos;S TALK!
      </Button>

      {/* <ChevronDown className="font-greatLakes" /> */}
      <img
        src="/arrow1.svg"
        alt=""
        className="mt-5 md:h-8 h-5 w-5 md:w-20 animate-bounce"
      />
      <img
        src="/arrow1.svg"
        alt=""
        className="h-5 w-5  md:h-8 md:w-20 animate-bounce"
      />
      {/* <img src="/arrow2.png" alt="" /> */}
    </div>
  );
}
