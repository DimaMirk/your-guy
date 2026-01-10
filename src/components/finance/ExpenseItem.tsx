type ExpenseItemProps = {
  title: string;
  amount: number;
};

export function ExpenseItem({ title, amount }: ExpenseItemProps) {
  return (
    <div className="flex justify-between text-sm">
      <span className="truncate">{title}</span>
      <span className="text-red-600">−{amount} ₴</span>
    </div>
  );
}
