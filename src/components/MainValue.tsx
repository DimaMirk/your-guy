import { cn } from '@/lib/utils';

interface MainValueProps {
  value: number;
}

export const MainValue = ({ value }: MainValueProps) => {
  const getValueClass = () => {
    if (value > 0) return 'value-positive';
    if (value < 0) return 'value-negative';
    return 'value-neutral';
  };

  return (
    <div className="text-center py-8">
      <p className="text-sm text-muted-foreground mb-2">
        Можеш витратити сьогодні
      </p>
      <p className={cn("text-display tracking-tight", getValueClass())}>
        {value.toLocaleString('uk-UA')} ₴
      </p>
    </div>
  );
};
