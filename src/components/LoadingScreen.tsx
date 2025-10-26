import { useEffect, useState } from "react";
import logo from "@/assets/ubjcs-logo.png";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onLoadComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-primary transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center animate-fade-in">
        <img
          src={logo}
          alt="UBJCS Logo"
          className="w-32 h-32 mx-auto mb-6 animate-pulse"
        />
        <h1 className="text-4xl font-bold text-white mb-2">UBJCS</h1>
        <p className="text-white/90 text-lg">UP Bihar Jharkhand Cultural Society</p>
        <div className="mt-8">
          <div className="w-48 h-1 bg-white/30 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-white rounded-full animate-[slide-in-right_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
