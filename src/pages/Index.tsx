// import { useState } from 'react';
// import { useFinanceStore } from '@/hooks/useFinanceStore';
// import { Button } from '@/components/ui/button';
// import { MainValue } from '@/components/MainValue';
// import { SecondaryStats } from '@/components/SecondaryStats';
// import { EmptyState } from '@/components/EmptyState';
// import { TodayExpensesList } from '@/components/TodayExpensesList';
// import { AddBalanceSheet } from '@/components/AddBalanceSheet';
// import { AddExpenseSheet } from '@/components/AddExpenseSheet';

// const getMonthName = () => {
//   const months = [
//     'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
//     'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
//   ];
//   const now = new Date();
//   return `${months[now.getMonth()]} ${now.getFullYear()}`;
// };

// const Index = () => {
//   const {
//     hasBalance,
//     startBalance,
//     setStartBalance,
//     addExpense,
//     getDaysLeft,
//     getRemainingBalance,
//     getDailyLimit,
//     getTodayExpenses,
//   } = useFinanceStore();

//   const [balanceSheetOpen, setBalanceSheetOpen] = useState(false);
//   const [expenseSheetOpen, setExpenseSheetOpen] = useState(false);

//   const dailyLimit = getDailyLimit();
//   const remainingBalance = getRemainingBalance();
//   const daysLeft = getDaysLeft();
//   const todayExpenses = getTodayExpenses();

//   return (
//     <div className="min-h-screen bg-background flex flex-col">
//       {/* Header */}
//       <header className="px-4 pt-6 pb-2">
//         <h1 className="text-lg font-semibold text-foreground text-center">
//           {getMonthName()}
//         </h1>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 px-4 pb-24">
//         {hasBalance ? (
//           <>
//             <MainValue value={dailyLimit ?? 0} />
//             <SecondaryStats
//               remainingBalance={remainingBalance ?? 0}
//               daysLeft={daysLeft}
//             />
//             <TodayExpensesList expenses={todayExpenses} />
            
//             {/* Edit balance link */}
//             <button
//               onClick={() => setBalanceSheetOpen(true)}
//               className="mt-6 text-sm text-muted-foreground underline underline-offset-2 w-full text-center"
//             >
//               Змінити баланс
//             </button>
//           </>
//         ) : (
//           <EmptyState onAddBalance={() => setBalanceSheetOpen(true)} />
//         )}
//       </main>

//       {/* Sticky CTA */}
//       {hasBalance && (
//         <div className="fixed bottom-0 left-0 right-0 p-4 pb-safe-bottom bg-background border-t border-border">
//           <Button
//             onClick={() => setExpenseSheetOpen(true)}
//             className="w-full h-14 text-base font-medium"
//           >
//             ➕ Додати витрату
//           </Button>
//         </div>
//       )}

//       {/* Sheets */}
//       <AddBalanceSheet
//         open={balanceSheetOpen}
//         onOpenChange={setBalanceSheetOpen}
//         onSave={setStartBalance}
//         initialValue={startBalance}
//       />
//       <AddExpenseSheet
//         open={expenseSheetOpen}
//         onOpenChange={setExpenseSheetOpen}
//         onSave={addExpense}
//       />
//     </div>
//   );
// };

// export default Index;
