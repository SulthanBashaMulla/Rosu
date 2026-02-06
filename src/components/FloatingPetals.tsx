import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  type: "rose" | "petal";
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 14 + Math.random() * 18,
      rotation: Math.random() * 360,
      type: Math.random() > 0.3 ? "petal" : "rose",
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute text-primary"
          style={{
            left: `${petal.left}%`,
            top: "-5%",
            fontSize: `${petal.size}px`,
            animation: `petal-fall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            transform: `rotate(${petal.rotation}deg)`,
            opacity: petal.type === "petal" ? 0.8 : 0.9,
          }}
        >
          {petal.type === "rose" ? "🌹" : "🥀"}
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
