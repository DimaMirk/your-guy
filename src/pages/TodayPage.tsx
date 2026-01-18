import { TodayHeader } from "./TodayHeader";
import { TodayHero } from "./TodayHero";
import { TodayStats } from "./TodayStats";
import { TodayMonthBalance } from "./TodayMonthBalance";
import { TodayExpenses } from "./TodayExpenses";
import { TodayActions } from "./TodayActions";
import { useState } from "react";
import { AddBalanceSheet } from "@/components/AddBalanceSheet";
import { useFinanceStore } from "@/hooks/useFinanceStore";
import { AddExpenseSheet } from "@/components/AddExpenseSheet";

export function TodayPage() {
  const [isBalanceOpen, setIsBalanceOpen] = useState(false);
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);

  const { monthBalance, updateMonthBalance, addExpense } = useFinanceStore();


  return (
    <main className="mx-auto max-w-md px-4 py-6 space-y-6">
      <TodayHeader />
      <TodayHero />
      <TodayStats />
      <TodayMonthBalance onEdit={() => setIsBalanceOpen(true)}/>
      <TodayExpenses />
      <TodayActions  onEdit={() => setIsBalanceOpen(true)} openExpense={() => setIsExpenseOpen(true)} />

      <AddBalanceSheet
        open={isBalanceOpen}
        onOpenChange={setIsBalanceOpen}
        onSave={updateMonthBalance}
        initialValue={monthBalance}
      />

      <AddExpenseSheet
        open={isExpenseOpen}
        onOpenChange={setIsExpenseOpen}
        onSave={({ amount, category, comment }) => {
          addExpense(category, amount);
        }}
      />
    </main>
  );
}

