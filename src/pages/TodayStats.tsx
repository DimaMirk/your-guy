
import { Card } from "@/components/ui/card";
import { useFinanceStore } from "@/hooks/useFinanceStore";

export function TodayStats() {
  const { monthBalance, daysLeft } = useFinanceStore();

  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="p-4 space-y-1">
        <p className="text-sm text-muted-foreground">Баланс на місяць</p>
        <p className="text-xl font-semibold">{monthBalance} ₴</p>
      </Card>

      <Card className="p-4 space-y-1">
        <p className="text-sm text-muted-foreground">Днів залишилось</p>
        <p className="text-xl font-semibold">{daysLeft}</p>
      </Card>
    </div>
  );
}
