import { useState, useRef } from 'react';
import { Animated, FlatList, Dimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '@routes/NavigationRoutes';

// import { ComponentExpense, ComponentIncome } from '@components/Spending/index';
import { Expenses, Incomes } from '@components/Menu/index';
import FlatListComponent from './components/FlatList';
import Title from '@components/Title/index';
import { useConsumeApi } from '@hooks/useConsumeApi';

import * as S from './styled';

export default function Spending() {
  const { width } = Dimensions.get('screen');
  const x = useRef(new Animated.Value(0)).current;

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
          <S.TextTransaction>Despesas</S.TextTransaction>
          <S.TextTransaction>Rendas</S.TextTransaction>
        </S.ContainerButtonsTransactions>

        <Animated.View
          style={[
            {
              backgroundColor: '#386df7',
              marginHorizontal: 30,
              height: 4,
              width: width / 2,
              borderRadius: 2,
              marginTop: -4,
              transform: [{ translateX: x.interpolate({ inputRange: [0, width], outputRange: [0, width / 2] }) }],
            },
          ]}
        />
        <FlatListComponent
          x={x}
          isEnabled={isEnabled}
          formatBalance={formatBalance}
          handleEnabled={handleEnabled}
          handleEnabledIncome={handleEnabledIncome}
          listExpenses={listExpenses}
          isEnabledIncome={isEnabledIncome}
          listIncomes={listIncomes}
        />
      </S.Main>
    </>
  );
}
