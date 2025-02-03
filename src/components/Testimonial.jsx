"use client";

import { Star, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    content:
      "The communication was very smooth and highly available team for any issues or strategic discussions.",
    author: {
      name: "Nadeem Khan",
      role: "Co-Founder",
      company: "HonestStory",
      avatar:
        "https://res.cloudinary.com/dmrwefamp/image/upload/v1738590679/avatar-1-1_yzbbco.png",
    },
  },
  {
    content:
      "Growth Hackers quickly jumped on board and instantly helped bring our CAC down by 40%. We sensed that they took ownership of our problems as their own.",
    author: {
      name: "Madhav Krishna",
      role: "CEO",
      company: "Vahan",
      avatar:
        "https://res.cloudinary.com/dmrwefamp/image/upload/v1738590679/avatar-1-2_zxeadh.png",
    },
  },
  {
    content:
      "Their strategic approach and deep understanding of growth marketing transformed our business metrics significantly.",
    author: {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow",
      avatar:
        "https://res.cloudinary.com/dmrwefamp/image/upload/v1738590679/avatar-1-3_a40xc1.png",
    },
  },
  {
    content:
      "Exceptional service delivery and consistent results. They've become an integral part of our growth strategy.",
    author: {
      name: "Alex Rodriguez",
      role: "Head of Growth",
      company: "ScaleUp Inc",
      avatar:
        "https://res.cloudinary.com/dmrwefamp/image/upload/v1738590679/avatar-1_zw1kui.png",
    },
  },
  {
    content:
      "The team's dedication and innovative solutions helped us achieve our targets well ahead of schedule.",
    author: {
      name: "Emily Watson",
      role: "Operations Head",
      company: "NextGen Solutions",
      avatar: "/placeholder.svg",
    },
  },
];

const bgColors = [
  "bg-pink-400",
  "bg-green-400",
  "bg-blue-400",
  "bg-yellow-400",
  "bg-purple-400",
];

export default function TestimonialsSection() {
  return (
    <section className="relative px-6 py-24 overflow-hidden bg-[url('https://res.cloudinary.com/dmrwefamp/image/upload/v1738589714/test-bg_cp15hz.svg')] bg-cover bg-center">
      {/* Decorative elements */}
      <div className="absolute top-8 left-8">
        <Sparkles className="w-8 h-8 text-white/20" />
      </div>
      <div className="absolute bottom-8 right-8">
        <Sparkles className="w-8 h-8 text-white/20" />
      </div>
      <div className="absolute bottom-0 right-0">
        <div className="w-64 h-64 border-4 border-white/10 rounded-full transform translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Heading */}
      <div className="text-center mb-20 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Testimonials that make us cartwheel with joy
        </h2>
      </div>

      {/* Testimonials Marquee */}
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={false}
        className="max-w-full pb-32 overflow-hidden"
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-[400px] mx-4">
            <div className="flex flex-col items-start gap-8 p-4">
              <div className="flex-1 space-y-6">
                {/* Speech bubble */}
                <div className="relative">
                  <div
                    className={`${
                      bgColors[index % bgColors.length]
                    } p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,200)]`}
                  >
                    <p className="text-lg text-black">{testimonial.content}</p>
                  </div>
                  {/* Speech bubble pointer */}
                  <div className="absolute -bottom-4 right-8 w-8 h-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-8 h-8 bg-transparent transform -rotate-45 shadow-[px_4px_0px_0px_rgba(0,0,0,0.25)]" />
                  </div>
                </div>

                {/* Author info */}
                <div className="flex items-center justify-end gap-4">
                  <div className="text-right">
                    <div className="flex gap-1 justify-end mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 bg-black fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <div className="text-white text-lg font-semibold">
                      {testimonial.author.name}
                    </div>
                    <div className="text-white/90 text-sm">
                      {testimonial.author.role}
                    </div>
                    <div className="text-white/90 text-sm">
                      {testimonial.author.company}
                    </div>
                  </div>
                  <Avatar className="w-12 h-12 border-2 border-white bg-red-500">
                    <AvatarImage src={testimonial.author.avatar} />
                    <AvatarFallback>
                      {testimonial.author.name[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
