import { useState, useCallback } from 'react';

import ComponentInput from '@components/Input';
import Header from '@components/Header';
import InputText from '@components/InputText';
import { currencyInput } from '@utils/currency';
import { useConsumeApi } from '@hooks/useConsumeApi';

import * as S from './styled';

export default function Expense() {
  const [expense, setExpense] = useState<string>('');
  const [price, setPrice]: any = currencyInput();

  const { addIncome } = useConsumeApi();

  const addNewValue = useCallback((value: any, description: string) => {
    addIncome(value, description);
    setPrice('');
    setExpense('');
  }, []);

  return (
    <S.SafeAreaView>
      <S.ContainerHeader>
        <Header>
          <ComponentInput setPrice={setPrice} price={price} />
        </Header>
      </S.ContainerHeader>
      <S.Main>
        <S.ContainerItems>
          <S.Description>
            <S.Title>Descrição</S.Title>
            <InputText setExpense={setExpense} expense={expense} />
          </S.Description>
        </S.ContainerItems>

        <S.Footer>
          <S.ButtonRegister onPress={() => addNewValue(price, expense)}>
            <S.Text>Adicionar</S.Text>
          </S.ButtonRegister>
        </S.Footer>
      </S.Main>
    </S.SafeAreaView>
  );
}
