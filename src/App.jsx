// import React, { useEffect, useRef } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import GetInTouch from "./components/Contect";
import Job from "./components/Job";
import Services from "./components/Services";
import Testimonials from "./components/Testimonial";
//  import Apoint from "./components/Apoint";
import { ServiceBanner} from "./components/Servicepage";
import ServiceSection from "./components/ServiceCards";
import ComingSoon from "./components/work/Videoediting";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-[#D91A46] h-full w-full">
        <Header />
        <Hero />
        <Services />
        <Testimonials />
        <GetInTouch />
        <Footer />
      </div>
    ),
  },
  {
    path: "/services",
    element: (
      <div className="bg-[#D91A46] h-full w-full">
        <Header />
        <ServiceBanner />
        <ServiceSection />
        {/* <Apoint/> */}
        <Footer />
      </div>
    ),
  },
  {
    path: "/OurWork",
    element: (
      <div className="bg-[#D91A46] h-full w-full ">
        <Header />
        {/* <h1 className="text-center text-white">Our Work</h1> */}
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "web-design",
        element: (
          <div >
            <ComingSoon />
          </div>
        ),
      },
      {
        path: "graphic-design",
        element: (
          <div>
            <ComingSoon />
          </div>
        ),
      },
      {
        path: "app-development",
        element: (
          <div>
            <ComingSoon />
          </div>
        ),
      },
      {
        path: "video-production",
        element: (
          <div>
            <ComingSoon />
          </div>
        ),
      },
      {
        path: "digital-marketing",
        element: <div>Digital Marketing Section</div>,
      },
    ],
  },
  {
    path: "/hiring",
    element: (
      <div className="bg-[#D91A46] h-full w-full">
        <Header />
        <Job />
        <Footer />
      </div>
    ),
  },
  {
    path: "/animated-blocks",
    element: (
      <div className="bg-[#D91A46] h-full w-full">
        <Header />
        <Footer />
      </div>
    ),
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

// Define the routes


export default App;
