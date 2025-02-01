import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const jobCategories = [
  {
    title: "VIDEO EDITORS",
    color: "bg-white",
    borderColor: "border-black",
  },
  {
    title: "GRAPHIC DESIGNERS",
    color: "bg-yellow-300",
    borderColor: "border-black",
  },
  {
    title: "WEB & APP DEVS",
    color: "bg-purple-300",
    borderColor: "border-black",
  },
  {
    title: "3D & 2D ANIMATORS",
    color: "bg-emerald-300",
    borderColor: "border-black",
  },
];

export default function Job() {
  return (
    <div>
      <div className="min-h-60 bg-[#D91A46] p-6 md:mt-6 md:pl-24 md:pr-24 font-bold">
        {/* Header Box */}
        <div className="mb-8 rounded-xl border-4 border-black bg-orange-400 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-greatLakes md:text-3xl">
            READY TO MAKE A MEANINGFULL IMPACT ?
          </h2>
          <p className="mt-2 text-lg">
            At BAGOORA, our true strength lies in the exceptional talent of our
            team, we&apos;re always looking for new talent to join us, so if
            you&apos;re passionate..
          </p>
        </div>

        {/* Job Categories Grid */}
        <div className=" md:h-100px w-200px md:pr-40 mb-8 grid gap-6 md:grid-cols-2 md:gap-8">
          {jobCategories.map((job) => (
            <Card
              key={job.title}
              className={`${job.color} ${job.borderColor} group relative overflow-hidden rounded-xl border-4 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1`}
            >
              <h3 className="mb-4 text-xl font-black">{job.title}</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
              <Button
                variant="default"
                className="border-2 border-black bg-black font-bold text-white transition-transform hover:translate-x-1 hover:bg-black/90"
              >
                Apply
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Scrolling Text Banner */}
      <Marquee speed={100} gradient={false} className="py-1 bg-black w-full">
        <span className="text-4xl font-black text-white whitespace-nowrap mr-8">
          * GROW WITH US * GROW WITH US * GROW WITH US * GROW WITH US * GROW
          WITH US
        </span>
      </Marquee>

      <Marquee
        speed={100}
        gradient={false}
        direction="right"
        className="py-1 bg-black w-full m-1"
      >
        <span className="text-4xl  font-black text-white whitespace-nowrap mr-8">
          * GROW WITH US * GROW WITH US * GROW WITH US * GROW WITH US * GROW
          WITH US
        </span>
      </Marquee>

      {/* Contact Button */}
      <div className="flex justify-center">
        <Button className="border-4 border-black m-4 bg-purple-600 px-8 py-6 text-xl font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:bg-purple-700">
          GET IN TOUCH 
          
        </Button>
      </div>
    </div>
  );
}
