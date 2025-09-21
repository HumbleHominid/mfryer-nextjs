import clsx from "clsx";

export default function NavSocialWrapper({
  children,
  visible,
  delayFactor,
}: {
  children: React.ReactNode;
  visible: boolean;
  delayFactor: number;
}) {
  // Wrapper animating a drop-down when becoming visible. variable delay
  return (
    <div
      style={{ transitionDelay: `${200 + 100 * delayFactor}ms` }}
      className={clsx(
        "transition-all duration-500 ease-in-out",
        visible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0",
      )}
    >
      {children}
    </div>
  );
}
