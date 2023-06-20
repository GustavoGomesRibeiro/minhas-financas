import { useCallback, useEffect, useState } from 'react';
import { ITotalAmount, IListExpense, IListIncome } from '@interfaces/api';
import { mockExpense } from '../mocks/expense/expense';
import { mockIncome } from '../mocks/income/income';

import apiServer from '../services/api';

const useConsumeApi = () => {
  const [amount, setAmount] = useState<ITotalAmount | any>([]);
  const [listExpenses, setListExpenses] = useState<IListExpense | any>([]);
  const [listIncomes, setListIncomes] = useState<IListIncome | any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState('');

  const getTotalAmount = useCallback(async () => {
    await apiServer.get('/total').then((response) => {
      if (response.status) {
        setAmount(response.data);
        setLoading(false);
      } else {
        setError('Erro ao tentar trazer o valor total!');
        setLoading(false);
      }
    });
  }, [amount]);

  const addIncome = useCallback(async (price: string, description: string) => {
    const value = price.replace(/[^a-zA-Z0-9]|[R]/g, '');

    await apiServer.post('/income', {
      name: description,
      value: Number(value),
    });
  }, []);

  const addExpense = useCallback(async (price: string, description: string) => {
    const value = price.replace(/[^a-zA-Z0-9]|[R]/g, '');

    await apiServer.post('/expense', {
      name: description,
      value: Number(value),
    });
  }, []);

  const getIncome = useCallback(async () => {
    await apiServer
      .get('/income')
      .then((response) => {
        if (response.status === 404) {
          setListExpenses(mockIncome);
        }

        if (response.status) {
          setListIncomes(response.data);
          setLoading(false);
        } else {
          setError('Erro ao tentar trazer o detalhes da receita!');
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err) {
          setListExpenses(mockIncome);
        }
      });
  }, [listIncomes]);

  const getExpense = useCallback(async () => {
    await apiServer
      .get('/expense')
      .then((response) => {
        if (response.status) {
          setListExpenses(response.data);
          setLoading(false);
        } else {
          setError('Erro ao tentar trazer o detalhes da despesa!');
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err) {
          setListExpenses(mockExpense);
        }
      });
  }, [listExpenses]);

  useEffect(() => {
    Promise.all([getTotalAmount(), getExpense(), getIncome()]);
  }, []);

  return { amount, listExpenses, listIncomes, loading, error, addIncome, addExpense };
};

export { useConsumeApi };
