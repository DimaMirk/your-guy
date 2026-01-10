import { useFinanceStore } from "@/hooks/useFinanceStore";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function TodayExpenses() {
  const expenses = useFinanceStore((s) => s.todayExpenses);
  const total = useFinanceStore((s) => s.todayTotal);

  return (
    <section className="space-y-2">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Витрати за сьогодні
        </p>
        <p className="text-sm text-red-600">
          −{total} ₴
        </p>
      </div>

      <Collapsible>
        <CollapsibleTrigger className="text-sm underline">
          Показати список
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-2 space-y-2">
          {expenses.map((e) => (
            <div
              key={e.id}
              className="flex justify-between text-sm"
            >
              <span>{e.title}</span>
              <span>−{e.amount} ₴</span>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </section>
  );
}
