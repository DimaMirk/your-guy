import { ExpenseItem } from "./ExpenseItem";

type Expense = {
  id: string;
  title: string;
  amount: number;
};

type ExpenseListProps = {
  expenses: Expense[];
};

export function ExpenseList({ expenses }: ExpenseListProps) {
  if (!expenses.length) {
    return <p className="text-sm text-muted-foreground">Витрат немає</p>;
  }

  return (
    <div className="space-y-2">
      {expenses.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
        />
      ))}
    </div>
  );
}
