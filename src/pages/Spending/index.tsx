import { useState, useRef } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '@routes/NavigationRoutes';

import FlatListComponent from './components/FlatList';
import Title from '@components/Title/index';
import Select from '@components/Select/index';

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
  const [index, setIndex] = useState<number>(0);
  const [month, setMonth] = useState<string>('');

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

  return (
    <S.Content>
      <S.SafeAreaView>
        <S.Header></S.Header>
      </S.SafeAreaView>

      <S.Main>
        <S.ViewHeaderFlatList>
          <Title> Transações </Title>
          <Select month={month} setMonth={setMonth} />
        </S.ViewHeaderFlatList>
        <S.ContainerButtonsTransactions size={width}>
          {/* <S.TextTransaction style={{ color: index === 0 ? 'white' : 'black' }}>Despesas</S.TextTransaction>
          <S.TextTransaction style={{ color: index === 1 ? 'white' : 'black' }}>Rendas</S.TextTransaction> */}
          <S.TextTransaction>Despesas</S.TextTransaction>
          <S.TextTransaction>Rendas</S.TextTransaction>
          <S.TextTransaction>Budget</S.TextTransaction>
          <S.TextTransaction>Metas</S.TextTransaction>
        </S.ContainerButtonsTransactions>

        <Animated.View
          style={[
            {
              backgroundColor: '#19191A',
              width: width / 4,
              height: 3.5,
              // marginHorizontal: 40,
              // height: 40,
              // width: 100,
              // borderRadius: 20,
              // top: 80,
              // left: 5,
              // zIndex: -1,
              // position: 'absolute',
              transform: [{ translateX: x.interpolate({ inputRange: [0, width], outputRange: [0, width / 4] }) }],
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
          setIndex={setIndex}
          month={month}
        />
      </S.Main>
    </S.Content>
  );
}
