"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Marquee from "react-fast-marquee";

const services = [
  {
    title: "VIDEO EDITING",
    color: "bg-[#ff4d79]",
    video:
      "https://res.cloudinary.com/dmrwefamp/video/upload/v1738589715/video1_dbuhbx.mp4", // Add your image path here
    points: [
      "High-quality video production",
      "Custom transitions and effects",
      "Real-time storytelling",
    ],
  },
  {
    title: "GRAPHIC DESIGN",
    color: "bg-[#7fffd4]",
    video:
      "https://res.cloudinary.com/dmrwefamp/video/upload/v1738589715/video2_tpei6s.mp4",
    points: [
      "Custom logo and brand designs",
      "Eye-catching materials",
      "Collaborative approach to bring your vision to life",
    ],
  },
  {
    title: "2D & 3D ANIMATION",
    color: "bg-[#d387ff]",
    video:"https://res.cloudinary.com/dmrwefamp/video/upload/v1738589715/video3_et3zhd.mp4", // Add your image path here
    points: [
      "High-Quality visuals and Storytelling",
      "Customized, Client-Centric Solutions",
      "Advanced Technology and Efficient Delivery",
    ],
  },
  {
    title: "WEB DEVELOPMENT",
    color: "bg-[#ff69b4]",
    video:
      "https://res.cloudinary.com/dmrwefamp/video/upload/v1738589715/video4_tv9abd.mp4", // Add your image path here
    points: [
      "Responsive, modern websites",
      "Latest technology and frameworks",
      "Support and maintenance",
    ],
  },
  {
    title: "APP DEVELOPMENT",
    color: "bg-[#40e0ff]",
    video:
      "https://res.cloudinary.com/dmrwefamp/video/upload/v1738589716/video5_uekypj.mp4", // Add your image path here
    points: [
      "Custom-built apps for unique business needs",
      "Seamless User Experience (UX) and High-Performance Design",
      "Cutting-Edge Technology and Expert Support",
    ],
  },
  {
    title: "SOCIAL MEDIA MANAGEMENT",
    color: "bg-[#ff8c40]",
    video:
      "https://res.cloudinary.com/dmrwefamp/video/upload/v1738589626/video6_othrg0.mp4", // Add your image path here
    points: [
      "Content Creation and Consistency",
      "Engagement Growth for Maximum Impact",
      "Analytics-Driven Results",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-yellow-300 min-h-screen w-full overflow-hidden font-mono">
      {/* Top Marquee */}
      <Marquee speed={100} gradient={false} className="py-2 bg-black">
        <span className="text-4xl bg-black font-extrabold text-yellow-300 whitespace-nowrap ">
          * OUR SERVICES * OUR SERVICES * OUR SERVICES * OUR SERVICES * OUR
          SERVICES * OUR SERVICES * OUR SERVICES
        </span>
      </Marquee>

      {/* Services Grid */}
      <div className="grid gap-16 p-4 md:m-28  md:grid-cols-2 lg:grid-cols-3 font-gogo">
        {services.map((service, index) => (
          <Card
            key={index}
            className={`${service.color} rounded-3xl border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
          >
            {" "}
            <div className=" rounded">
              <video
                src={service.video}
                muted
                loop
                autoPlay
                style={{
                  borderRadius: "1rem", // Adjust the value for rounding as needed
                  backgroundColor: "transparent", // Ensures the background is transparent
                }}
              ></video>
            </div>
            <h2 className="mb-4 text-2xl font-black">{service.title}</h2>
            <ul className="mb-6 space-y-2">
              {service.points.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-xl">•</span>
                  <span className="text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="w-full border-2 border-black bg-white font-bold hover:bg-black hover:text-white"
            >
              View more
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        ))}
      </div>

      {/* Bottom Marquee */}
      <Marquee
        speed={100}
        gradient={false}
        direction="right"
        className="py-1 bg-black"
      >
        <span className="text-4xl font-black text-yellow-300 whitespace-nowrap mr-8">
          CASE STUDIES CASE STUDIES CASE STUDIES CASE STUDIES CASE STUDIES CASE
        </span>
      </Marquee>
    </section>
  );
}
