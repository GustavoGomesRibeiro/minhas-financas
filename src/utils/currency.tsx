import { useState } from 'react';

const { format: formatCurrency } = Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  style: 'currency',
});

function currencyInput() {
  const [price, setPrice] = useState<string>('');
  function handleChange(price: string) {
    const decimal = Number(price.replace(/\D/g, '')) / 100;
    setPrice(formatCurrency(decimal || 0).replace('R$\xa0', 'R$'));
  }
  return [price, handleChange];
}

export { currencyInput };
