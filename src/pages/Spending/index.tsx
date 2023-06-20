import { useState, useRef } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '@routes/NavigationRoutes';

import FlatListComponent from './components/FlatList';
import Title from '@components/Title/index';
import { useConsumeApi } from '@hooks/useConsumeApi';

import { mockExpense } from '../../mocks/expense/expense';
import { mockIncome } from '../../mocks/income/income';
import { mockTotal } from '../../mocks/total/total';

import * as S from './styled';

export default function Spending() {
  const { width } = Dimensions.get('screen');
  const x = useRef(new Animated.Value(0)).current;

  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [isEnabledIncome, setIsEnabledIncome] = useState<boolean>(true);
  const [teste, setTeste] = useState<number>();

  const navigation = useNavigation<ReceiveScreen>();
  const { amount, listExpenses, listIncomes } = useConsumeApi();

  const handleEnabled = () => {
    setIsEnabled((event) => !event);
  };

  const handleEnabledIncome = () => {
    setIsEnabledIncome((event) => !event);
  };

  // if (!amount.expense) return;
  if (!mockTotal.expense) return;
  const formatBalance = mockTotal.expense.toFixed(2);
  // const formatBalance = amount.expense.toFixed(2);

  // console.log(teste, '>><<');

  return (
    <>
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
      </S.SafeAreaView>

      <S.Main>
        <Title> Transações </Title>
        <S.ContainerButtonsTransactions size={width}>
          <S.TextTransaction style={{ color: teste === 0 ? 'white' : null }}>Despesas</S.TextTransaction>
          <S.TextTransaction>Rendas</S.TextTransaction>
        </S.ContainerButtonsTransactions>

        <Animated.View
          style={[
            {
              backgroundColor: '#386df7',
              marginHorizontal: 30,
              height: 40,
              width: 100,
              borderRadius: 20,
              top: 80,
              left: 5,
              zIndex: -1,
              position: 'absolute',
              transform: [{ translateX: x.interpolate({ inputRange: [0, width], outputRange: [0, 100] }) }],
            },
          ]}
        />
        <FlatListComponent
          x={x}
          isEnabled={isEnabled}
          formatBalance={formatBalance}
          handleEnabled={handleEnabled}
          handleEnabledIncome={handleEnabledIncome}
          listExpenses={mockExpense}
          listIncomes={mockIncome}
          // listExpenses={listExpenses}
          // listIncomes={listIncomes}
          isEnabledIncome={isEnabledIncome}
          setTeste={setTeste}
        />
      </S.Main>
    </>
  );
}
