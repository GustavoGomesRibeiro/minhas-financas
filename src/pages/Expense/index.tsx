import { useState, useCallback } from 'react';

import ComponentInput from '@components/Input';
import Header from '@components/Header';
import InputText from '@components/InputText';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '@routes/NavigationRoutes';
import { currencyInput } from '@utils/currency';

import * as S from './styled';

export default function Expense() {
  const [allBalance, setAllBalance] = useState([{ balance: '' }]);
  const [expense, setExpense] = useState('');
  const [price, setPrice]: any = currencyInput();

  const navigation = useNavigation<ReceiveScreen>();

  const addNewValue = useCallback(
    (value: any) => {
      setAllBalance([...allBalance, { balance: value }]);
      setPrice('');
      setExpense('');
    },
    [allBalance, setAllBalance],
  );
  return (
    <S.SafeAreaView>
      <S.ContainerHeader>
        <Header>
          <ComponentInput setPrice={setPrice} price={price} addNewValue={() => addNewValue(price)} />
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
          <S.ButtonRegister addNewValue={() => {}}>
            <S.Text>Adicionar</S.Text>
          </S.ButtonRegister>
        </S.Footer>
      </S.Main>
    </S.SafeAreaView>
  );
}
