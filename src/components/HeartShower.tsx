import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: "heart" | "sparkle-heart" | "double-heart";
}

const HeartShower = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const types: Array<"heart" | "sparkle-heart" | "double-heart"> = [
      "heart",
      "sparkle-heart",
      "double-heart",
    ];
    const newHearts: Heart[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 8 + Math.random() * 8,
      size: 12 + Math.random() * 14,
      type: types[Math.floor(Math.random() * types.length)],
    }));
    setHearts(newHearts);
  }, []);

  const getEmoji = (type: "heart" | "sparkle-heart" | "double-heart") => {
    switch (type) {
      case "sparkle-heart":
        return "💖";
      case "double-heart":
        return "💕";
      default:
        return "❤️";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            top: "-5%",
            fontSize: `${heart.size}px`,
            animation: `petal-fall ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          {getEmoji(heart.type)}
        </div>
      ))}
    </div>
  );
};

export default HeartShower;
