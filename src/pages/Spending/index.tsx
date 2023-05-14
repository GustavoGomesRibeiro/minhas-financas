import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '@routes/NavigationRoutes';

import { ComponentExpense, ComponentIncome } from '@components/Spending/index';
import { useConsumeApi } from '@hooks/useConsumeApi';

import * as S from './styled';

export default function Spending() {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [isEnabledIncome, setIsEnabledIncome] = useState<boolean>(true);

  const navigation = useNavigation<ReceiveScreen>();
  const { amount, listExpenses, listIncomes } = useConsumeApi();

  const handleEnabled = () => {
    setIsEnabled((event) => !event);
  };
  const handleEnabledIncome = () => {
    setIsEnabledIncome((event) => !event);
  };

  if (!amount.expense) return;
  const formatBalance = amount.expense.toFixed(2);

  return (
    <S.SafeAreaView>
      <S.Header>
        <S.ContainerButtons>
          <S.ButtonRegister onPress={() => navigation.navigate('Expense')}>
            <S.Text>Despesas</S.Text>
          </S.ButtonRegister>
          <S.ButtonRegister onPress={() => navigation.navigate('Income')}>
            <S.Text>Rendas</S.Text>
          </S.ButtonRegister>
        </S.ContainerButtons>
      </S.Header>

      <S.Container>
        <ComponentExpense
          listExpenses={listExpenses}
          formatBalance={formatBalance}
          isEnabled={isEnabled}
          handleEnabled={handleEnabled}
        />
        <ComponentIncome
          listIncomes={listIncomes}
          isEnabledIncome={isEnabledIncome}
          handleEnabledIncome={handleEnabledIncome}
          formatBalance={formatBalance}
        />
      </S.Container>
    </S.SafeAreaView>
  );
}
