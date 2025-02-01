import { Card } from "@/components/ui/card";
import Marquee from "react-fast-marquee";
import {
  TrendingUp,
  Brush,
  Smartphone,
  Video,
  Search,
  Globe,
} from "lucide-react";

export default function App() {
  const services = [
    {
      title: "SEO & ASO",
      subtitle: "Rank Rocket",
      icon: <Search className="w-8 h-8" />,
      color: "rgb(255, 182, 193)",
      details: [
        "Skyrocket To The Top Of Search Results",
        "Reel In Quality Traffic With Ease",
      ],
      description:
        "Dominate search rankings across web and app stores with our data-driven optimization strategies. We combine cutting-edge SEO techniques with ASO expertise to maximize your digital visibility and drive qualified traffic to your platforms.",
    },
    {
      title: "ORGANIC MARKETING",
      subtitle: "Authentic Growth",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "rgb(0, 255, 255)",
      details: [
        "Forge Lasting Customer Connections",
        "Achieve Sustainable, Long-Term Success",
      ],
      description:
        "Build genuine relationships with your audience through authentic content and engagement strategies. Our organic marketing approach focuses on creating meaningful connections that translate into long-term customer loyalty and sustainable business growth.",
    },
    {
      title: "AI ENGINEERING",
      subtitle: "& DEVELOPMENT",
      icon: <Smartphone className="w-8 h-8" />,
      color: "rgb(255, 140, 0)",
      details: [
        "AI Agent Development",
        "Custom GPT Creation",
        "Process Automation",
      ],
      description:
        "Transform your business operations with cutting-edge AI solutions tailored to your specific needs. Our team develops custom AI agents and GPT models that automate complex processes and deliver intelligent insights for enhanced decision-making.",
    },
    {
      title: "PERFORMANCE",
      subtitle: "MARKETING",
      icon: <Video className="w-8 h-8" />,
      color: "rgb(144, 238, 144)",
      details: [
        "Optimise Your Marketing Spend",
        "Achieve Measurable, Real-Time Results",
      ],
      description:
        "Maximize your ROI with data-driven performance marketing strategies that deliver measurable results. We optimize your campaigns in real-time, ensuring every marketing dollar is invested in channels that drive the highest conversion rates.",
    },
    {
      title: "CREATIVES &",
      subtitle: "MESSAGING",
      icon: <Brush className="w-8 h-8" />,
      color: "rgb(255, 182, 193)",
      details: [
        "Develop Captivating Visual Content",
        "Craft Persuasive, Impactful Messages",
      ],
      description:
        "Capture attention and drive engagement with compelling visual content and strategic messaging. Our creative team crafts unique narratives and visuals that resonate with your target audience and strengthen your brand identity.",
    },
    {
      title: "web",
      subtitle: "DEVELOPMENT",
      icon: <Globe className="w-8 h-8" />,
      color: "rgb(220, 220, 18)",
      details: [
        "Create Stunning, Functional Websites",
        "Deliver Seamless User Experiences",
      ],
      description:
        "Build powerful, scalable websites that combine stunning design with robust functionality. Our WordPress development solutions deliver exceptional user experiences while ensuring your site is secure, fast, and easy to manage.",
    },
  ];

  return (
    <div className="  font-gogo bg-purple-700 bg-cover  ">
      <Marquee speed={100} gradient={false} className="py-2 bg-black">
        <span className="text-4xl bg-black font-extrabold text-yellow-300 whitespace-nowrap ">
          * OUR SERVICES * OUR SERVICES * OUR SERVICES * OUR SERVICES * OUR
          SERVICES * OUR SERVICES * OUR SERVICES
        </span>
      </Marquee>
      <div className="max-w-7xl p-4 mx-auto mt-8 md:mt-16 ">
        <div className=" grid gap-12 md:grid-cols-2  ">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <Card
                className="border-4 border-white/10 hover:border-white transition-colors duration-200 overflow-hidden group shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]"
                style={{
                  backgroundColor: service.color,
                  transform: `rotate(${Math.random() * 2 - 1}deg)`,
                }}
              >
                <div className="p-6 relative">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-200" />
                  <div className="absolute right-4 top-4 w-16 h-16 border-4 border-black flex items-center justify-center bg-white transform -rotate-12">
                    {service.icon}
                  </div>
                  <div className="pr-20">
                    <h3 className="font-black text-3xl text-black mb-1 tracking-tight leading-none">
                      {service.title}
                    </h3>
                    <p className="font-bold text-xl text-black mb-6 tracking-tighter">
                      {service.subtitle}
                    </p>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-black font-bold flex items-center gap-2"
                        >
                          <span className="inline-block w-4 h-4 bg-black" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-4 border-black transform rotate-45" />
                  <div className="absolute top-1/2 right-20 w-4 h-4 bg-black transform -rotate-12" />
                </div>
              </Card>
              <div className="bg-black backdrop-blur-sm p-6 border-l-4 border-white text-white font-medium leading-relaxed">
                {service.description}
              </div>
            </div>
          ))}
        </div>
        <Marquee speed={100} gradient={false} className="py-1 bg-purple-700">
          <span className="text-4xl font-black text-yellow-300 whitespace-nowrap mr-8"></span>
        </Marquee>
      </div>
      <style jsx global>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
        .glitch-text {
          position: relative;
          animation: glitch 1s infinite;
          text-transform: uppercase;
          letter-spacing: -2px;
        }
      `}</style>
    </div>
  );
}
