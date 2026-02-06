import FloatingPetals from "@/components/FloatingPetals";
import SparkleEffect from "@/components/SparkleEffect";
import HeartShower from "@/components/HeartShower";
import roseBouquet from "@/assets/rose-bouquet.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Effects */}
      <FloatingPetals />
      <SparkleEffect />
      <HeartShower />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/50 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Header */}
        <div 
          className="text-center mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-4xl animate-heart-beat inline-block">❤️</span>
          <h1 className="text-3xl md:text-5xl font-serif text-primary font-bold mt-4 tracking-wide">
            Happy Rose Day
          </h1>
          <p className="text-muted-foreground text-lg mt-2 italic">
            A special surprise for You Saahiba 
          </p>
        </div>

        {/* Rose Bouquet Image */}
        <div 
          className="relative opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative animate-float">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-90" />
            
            <img
              src={roseBouquet}
              alt="Beautiful bouquet of red roses"
              className="relative w-80 h-80 md:w-[420px] md:h-[420px] object-contain drop-shadow-2xl"
            />
            
            {/* Decorative corner hearts */}
            <span className="absolute -top-4 -left-4 text-3xl animate-pulse-soft">💕</span>
            <span className="absolute -top-4 -right-4 text-3xl animate-pulse-soft" style={{ animationDelay: "0.5s" }}>💕</span>
            <span className="absolute -bottom-4 -left-4 text-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}>💕</span>
            <span className="absolute -bottom-4 -right-4 text-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }}>💕</span>
          </div>
        </div>

        {/* Romantic Message */}
        <div 
          className="mt-12 text-center max-w-lg opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-transparent p-8">
            <p className="text-2xl md:text-3xl font-serif text-primary leading-relaxed">
              "Chahey koi bhi situation ho,
            </p>
            <p className="text-2xl md:text-3xl font-serif text-primary leading-relaxed mt-2">
              Hamesha aapkay saath Rahungaa "
            </p>
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="text-2xl">🌹</span>
              <span className="text-muted-foreground italic">Meray Cute say Baba jii 🧕</span>
              <span className="text-2xl">🌹</span>
            </div>
          </div>
        </div>

        {/* Footer Hearts */}
        <div 
          className="mt-12 flex items-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.1s" }}
        >
          {["🌹", "❤️", "🌹", "💕", "🌹", "❤️", "🌹"].map((emoji, i) => (
            <span 
              key={i} 
              className="text-2xl animate-pulse-soft"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>

        {/* Subtle tagline */}
        <p 
          className="mt-8 text-muted-foreground text-sm opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.4s" }}
        >
          Made with love, just for you Samreen 💝
        </p>
      </div>
    </div>
  );
};

export default Index;
