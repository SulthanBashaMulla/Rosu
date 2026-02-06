import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: "sparkle" | "heart" | "star";
}

const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const types: Array<"sparkle" | "heart" | "star"> = ["sparkle", "heart", "star"];
    const newSparkles: Sparkle[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 7 + Math.random() * 6,
      size: 12 + Math.random() * 14,
      type: types[Math.floor(Math.random() * types.length)],
    }));
    setSparkles(newSparkles);
  }, []);

  const getEmoji = (type: "sparkle" | "heart" | "star") => {
    switch (type) {
      case "heart":
        return "💖";
      case "star":
        return "⭐";
      default:
        return "✨";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.left}%`,
            top: "-5%",
            fontSize: `${sparkle.size}px`,
            animation: `petal-fall ${sparkle.duration}s linear infinite`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          {getEmoji(sparkle.type)}
        </div>
      ))}
    </div>
  );
};

export default SparkleEffect;
