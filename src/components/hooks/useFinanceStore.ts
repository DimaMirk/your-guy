import { useEffect, useState } from "react";
import {
  calculateDailyLimit,
  calculateTodayTotal,
  getDaysLeftInMonth,
} from "@/lib/finance-calculations";
import {
  loadFinanceData,
  saveFinanceData,
} from "@/lib/storage";

type Expense = {
  id: string;
  title: string;
  amount: number;
  date: string;
};

export function useFinanceStore() {
  const [monthBalance, setMonthBalance] = useState(0);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const data = loadFinanceData();
    setMonthBalance(data.monthBalance);
    setExpenses(data.expenses);
  }, []);

  useEffect(() => {
    saveFinanceData({ monthBalance, expenses });
  }, [monthBalance, expenses]);

  const today = new Date().toISOString().slice(0, 10);

  const todayExpenses = expenses.filter(
    (e) => e.date === today
  );

  const todayTotal = calculateTodayTotal(todayExpenses);
  const daysLeft = getDaysLeftInMonth();
  const dailyLimit = calculateDailyLimit(
    monthBalance - todayTotal,
    daysLeft
  );

  function addExpense(title: string, amount: number) {
    setExpenses((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        amount,
        date: today,
      },
    ]);
  }

  function updateMonthBalance(value: number) {
    setMonthBalance(value);
  }

  return {
    // state
    monthBalance,
    expenses,
    todayExpenses,
    todayTotal,
    daysLeft,
    dailyLimit,

    // actions
    addExpense,
    updateMonthBalance,
  };
}
