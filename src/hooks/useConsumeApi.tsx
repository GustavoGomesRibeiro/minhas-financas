import { useCallback, useEffect, useState } from 'react';
import { ITotalAmount, IListExpense } from '@interfaces/api';
import apiServer from '../services/api';

const useConsumeApi = () => {
  const [amount, setAmount] = useState<ITotalAmount | any>([]);
  const [listExpenses, setListExpenses] = useState<IListExpense | any>([]);
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
  }, []);

  const addIncome = useCallback(async () => {
    await apiServer.post('/income', {
      name: 'teste',
      value: 1800,
    });
  }, []);

  const addExpense = useCallback(async (value: any, description: any) => {
    await apiServer.post('/expense', {
      name: description,
      value: value,
    });
  }, []);

  const getExpense = useCallback(async () => {
    await apiServer.get('/expense').then((response) => {
      if (response.status) {
        setListExpenses(response.data);
        setLoading(false);
      } else {
        setError('Erro ao tentar trazer o detalhes da despesa!');
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    Promise.all([getTotalAmount(), getExpense()]);
  }, []);

  return { amount, listExpenses, loading, error, addIncome, addExpense };
};

export { useConsumeApi };
