import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  onAddBalance: () => void;
}

export const EmptyState = ({ onAddBalance }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
        <span className="text-2xl">💰</span>
      </div>
      <p className="text-foreground font-medium mb-2">
        Додай стартовий баланс
      </p>
      <p className="text-muted-foreground text-sm mb-6">
        щоб бачити ліміт на сьогодні
      </p>
      <Button
        variant="outline"
        onClick={onAddBalance}
        className="h-12 px-6"
      >
        Додати баланс
      </Button>
    </div>
  );
};
