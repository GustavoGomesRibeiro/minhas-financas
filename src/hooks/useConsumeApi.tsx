import { useCallback, useEffect, useState } from 'react';
import { ITotalAmount } from '@interfaces/api';
import apiServer from '../services/api';

const useConsumeApi = () => {
  const [amount, setAmount] = useState<ITotalAmount | any>([]);
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

  const addExpense = useCallback(async () => {
    await apiServer.post('/expense', {
      name: 'teste',
      value: 1800,
    });
  }, []);

  useEffect(() => {
    const response = getTotalAmount();
  }, []);

  return { amount, addIncome, addExpense };
};

export { useConsumeApi };
