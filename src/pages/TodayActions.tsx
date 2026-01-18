import { Button } from "@/components/ui/button";

export function TodayActions({ onEdit, openExpense }) {
  return (
    <div className="flex gap-3 pt-2">
      <Button className="flex-1" onClick={openExpense}>
        + Додати витрату
      </Button>

      <Button variant="outline" className="flex-1">
        + Додати дохід
      </Button>

      <Button variant="ghost" className="flex-1" onClick={onEdit}>
        Задати бюджет
      </Button>
    </div>
  );
}
