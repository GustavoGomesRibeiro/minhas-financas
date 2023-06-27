import React, { useMemo } from 'react';
import { mockExpense } from '../mocks/expense/expense';
import { mockIncome } from '../mocks/income/income';

import { dayToMonth } from '@utils/transformMonth';

const useListByMonth = () => {
  // const listExpensesByMonth2 = useMemo(() => {
  //   const separatedExpenses = {};

  //   mockExpense.reduce((acc, expense) => {
  //     const createdAt = new Date(expense.created_at);
  //     const month = createdAt.getMonth() + 1;
  //     const nameMonth = dayToMonth(month);

  //     if (!acc[month]) {
  //       acc[month] = [expense];
  //     } else {
  //       acc[month].push(expense);
  //     }

  //     console.log(expense, '>>teste<<');
  //     return acc;
  //   });
  // }, []);
  const listExpensesByMonth = useMemo(() => {
    return mockExpense.reduce((acc, expense) => {
      const createdAt = new Date(expense.created_at);
      const month = createdAt.getMonth() + 1;
      const nameMonth = dayToMonth(month);

      if (!acc[nameMonth]) {
        acc[nameMonth] = [expense];
      } else {
        acc[nameMonth].push(expense);
      }

      return acc;
    }, {});
  }, []);

  // console.log(listExpensesByMonth, '>>teste<<');

  // const listExpensesByMonth2 = useMemo(() => {
  //   const separatedExpenses = {};

  //   mockExpense.forEach((expense) => {
  //     const createdAt = new Date(expense.created_at);
  //     const month = createdAt.getMonth() + 1;
  //     const nameMonth = dayToMonth(month);

  //     if (!separatedExpenses[month]) {
  //       separatedExpenses[nameMonth] = [expense];
  //     } else {
  //       separatedExpenses[nameMonth].push(expense);
  //     }
  //   });

  //   return separatedExpenses;
  // }, []);

  const listIncomesByMonth = useMemo(() => {
    const separatedIncomes = {};

    mockIncome.forEach((income) => {
      const createdAt = new Date(income.created_at);
      const month = createdAt.getMonth() + 1;
      const nameMonth = dayToMonth(month);

      if (!separatedIncomes[month]) {
        separatedIncomes[nameMonth] = [income];
      } else {
        separatedIncomes[nameMonth].push(income);
      }
    });

    return separatedIncomes;
  }, []);

  return { listExpensesByMonth, listIncomesByMonth };
};

export { useListByMonth };
