const LAYERS = 14;

export default function Bg42() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 grid select-none place-items-center overflow-hidden opacity-[0.07]"
    >
      <div
        className="grid font-display font-bold leading-none text-faint"
        style={{ fontSize: 'clamp(200px, 40vh, 500px)', transform: 'translateY(8%)' }}
      >
        {Array.from({ length: LAYERS }).map((_, i) => (
          <span
            key={i}
            className="col-start-1 row-start-1"
            style={{
              transform: `translate(${i * 3.5}px, ${i * 5}px)`,
              filter: `brightness(${(1 - i * 0.05).toFixed(2)})`,
            }}
          >
            42
          </span>
        ))}
      </div>
    </div>
  );
}