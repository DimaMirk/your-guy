interface SecondaryStatsProps {
  remainingBalance: number;
  daysLeft: number;
}

export const SecondaryStats = ({ remainingBalance, daysLeft }: SecondaryStatsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-lg bg-card p-4">
        <p className="text-xs text-muted-foreground mb-1">
          Залишилось до кінця місяця
        </p>
        <p className="text-xl font-semibold text-foreground">
          {remainingBalance.toLocaleString('uk-UA')} ₴
        </p>
      </div>
      <div className="rounded-lg bg-card p-4">
        <p className="text-xs text-muted-foreground mb-1">
          Днів до кінця
        </p>
        <p className="text-xl font-semibold text-foreground">
          {daysLeft}
        </p>
      </div>
    </div>
  );
};
