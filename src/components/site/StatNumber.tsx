import { useCountUp } from "@/hooks/use-count-up";

interface Props {
  raw: string; // e.g. "12,000+" or "48" or "200+"
  className?: string;
}

function parse(raw: string): { value: number; prefix: string; suffix: string } {
  const clean = raw.replace(/,/g, "");
  const match = clean.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return { value: 0, prefix: "", suffix: raw };
  return {
    prefix: match[1],
    value: parseInt(match[2], 10),
    suffix: match[3],
  };
}

export function StatNumber({ raw, className = "" }: Props) {
  const { value, prefix, suffix } = parse(raw);
  const { count, ref } = useCountUp(value, 1600);

  // Format with commas if original had them — explicit en-US prevents compact notation (e.g. "286.0K")
  const formatted =
    raw.includes(",")
      ? count.toLocaleString("en-US")
      : String(count);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
