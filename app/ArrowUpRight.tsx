export default function ArrowUpRight({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`arrow-up-right ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
