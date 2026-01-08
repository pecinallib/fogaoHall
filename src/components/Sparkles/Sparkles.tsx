export function Sparkles() {
  const sparkleCount = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {sparkleCount.map((num) => (
        <div key={num} className={`sparkle sparkle-${num}`}></div>
      ))}
    </div>
  );
}
