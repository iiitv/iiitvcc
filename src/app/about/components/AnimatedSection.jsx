import { useScrollAnimation } from "@/app/about/hooks/useScrollAnimation";

export default function AnimatedSection({ children, className = "" }) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`animated-scroll ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
