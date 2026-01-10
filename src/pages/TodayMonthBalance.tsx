import { Button } from "@/components/ui/button";
import { useFinanceStore } from "@/hooks/useFinanceStore";

export function TodayMonthBalance() {
  const balance = useFinanceStore((s) => s.monthBalance);

  return (
    <section className="rounded-xl bg-muted p-4 flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">
          Залишилось до кінця місяця
        </p>
        <p className="text-lg font-semibold">{balance} ₴</p>
      </div>

      <Button variant="link" size="sm">
        Змінити баланс
      </Button>
    </section>
  );
}
