type BalanceValueProps = {
  value: number;
  positive?: boolean;
  negative?: boolean;
  size?: "sm" | "md" | "lg";
};

export function BalanceValue({
  value,
  positive,
  negative,
  size = "md",
}: BalanceValueProps) {
  const sizeClass =
    size === "lg"
      ? "text-4xl"
      : size === "sm"
      ? "text-sm"
      : "text-xl";

  const colorClass = positive
    ? "text-green-700"
    : negative
    ? "text-red-600"
    : "text-foreground";

  return (
    <span className={`font-semibold ${sizeClass} ${colorClass}`}>
      {value} ₴
    </span>
  );
}
