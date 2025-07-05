import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Main animated sphere with morphing and glow effects */}
          <div className="w-96 h-96 md:w-[500px] md:h-[500px] bg-gradient-to-br from-red-900/30 via-red-700/20 to-red-600/10 animate-float animate-glow animate-morph"></div>
          
          {/* Secondary layer with different animation timing */}
          <div className="absolute inset-8 bg-gradient-to-tl from-red-800/20 to-transparent rounded-full animate-pulse [animation-delay:1s]"></div>
          
          {/* Floating particles with staggered animations */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-red-500/60 rounded-full animate-bounce [animation-delay:0.5s]"></div>
          <div className="absolute top-32 right-16 w-1 h-1 bg-white/40 rounded-full animate-ping [animation-delay:1s]"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-red-400/50 rounded-full animate-pulse [animation-delay:1.5s]"></div>
          <div className="absolute bottom-40 right-12 w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce [animation-delay:2s]"></div>
          <div className="absolute top-1/2 left-8 w-1 h-1 bg-red-300/40 rounded-full animate-ping [animation-delay:0.8s]"></div>
          <div className="absolute top-20 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse [animation-delay:2.3s]"></div>
          
          {/* Multiple rotating rings with different speeds */}
          <div className="absolute inset-0 rounded-full border border-red-500/20 animate-spin [animation-duration:20s]"></div>
          <div className="absolute inset-4 rounded-full border border-white/10 animate-spin [animation-duration:30s] [animation-direction:reverse]"></div>
          <div className="absolute inset-12 rounded-full border border-red-400/15 animate-spin [animation-duration:25s]"></div>
          
          {/* Orbiting elements */}
          <div className="absolute inset-0 animate-spin [animation-duration:40s]">
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-red-500/50 rounded-full transform -translate-x-1/2"></div>
          </div>
          <div className="absolute inset-0 animate-spin [animation-duration:35s] [animation-direction:reverse]">
            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-white/30 rounded-full transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center">
          <span className="text-2xl md:text-3xl font-bold">
            <span className="text-red-500">TEDx</span>
            <span className="text-white">Chirec</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#speakers" className="text-gray-300 hover:text-white transition-colors">Speakers</a>
          <a href="#schedule" className="text-gray-300 hover:text-white transition-colors">Schedule</a>
          <a href="#tickets" className="text-gray-300 hover:text-white transition-colors">Tickets</a>
        </div>
        
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-colors">
          Register
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 text-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-wide text-glow">
          Fail Forward
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
          Ideas that challenge our perception of reality.
        </p>
        
        <button className="border-2 border-red-500 text-white hover:bg-red-500 hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105">
          Book Now
        </button>
      </div>
    </div>
  );
}
