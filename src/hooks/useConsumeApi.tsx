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

  useEffect(() => {
    const response = getTotalAmount();
  }, []);

  return { amount };
};

export { useConsumeApi };
