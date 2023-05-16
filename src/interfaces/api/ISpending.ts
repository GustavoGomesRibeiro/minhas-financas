import { IListExpense } from '@interfaces/api/IListExpense';
import { IListIncome } from '@interfaces/api/IListIncome';

interface ISpendingIncome {
  listIncomes: IListIncome;
  formatBalance: any;
  isEnabledIncome: () => void;
  handleEnabledIncome: () => void;
}

interface ISpendingExpense {
  listExpenses: IListExpense;
  isEnabled: () => void;
  formatBalance: any;
  handleEnabled: () => void;
}

export { ISpendingIncome, ISpendingExpense };
