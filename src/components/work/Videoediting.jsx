import { useState, useEffect } from "react";

const ComingSoon = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#D91A46] text-white text-center">
      <h1 className="text-6xl font-bold">
        Coming Soon<span>{dots}</span>
      </h1>
      <p className="text-lg mt-4">
        We're working on something exciting. Stay tuned!
      </p>
    </div>
  );
};

export default ComingSoon;
