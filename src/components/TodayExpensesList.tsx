import type { Expense } from '@/hooks/useFinanceStore';

interface TodayExpensesListProps {
  expenses: Expense[];
}

export const TodayExpensesList = ({ expenses }: TodayExpensesListProps) => {
  if (expenses.length === 0) return null;

  return (
    <div className="mt-6 space-y-2">
      <h3 className="text-sm font-medium text-muted-foreground">Витрати сьогодні</h3>
      <div className="space-y-2">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="flex items-center justify-between rounded-lg bg-card p-3"
          >
            <span className="text-sm text-foreground">{expense.category}</span>
            <span className="font-medium text-foreground">
              −{expense.amount.toLocaleString('uk-UA')} ₴
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
