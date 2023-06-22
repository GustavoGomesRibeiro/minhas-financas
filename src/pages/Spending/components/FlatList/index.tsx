import React, { useState, useCallback } from 'react';
import { Animated, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '@routes/NavigationRoutes';

import { Expenses, Incomes } from '@components/Menu/index';

import { dayToMonth } from '@utils/transformMonth';

import * as S from './styled';

export default function FlatListComponent({
  x,
  isEnabled,
  formatBalance,
  handleEnabled,
  listExpenses,
  isEnabledIncome,
  handleEnabledIncome,
  listIncomes,
  setIndex,
}) {
  const [month, setMonth] = useState('Janeiro');
  const [teste, setTeste] = useState({});
  const navigation = useNavigation<ReceiveScreen>();

  const { width } = Dimensions.get('screen');

  const _onMomentumScrollEnd = ({ nativeEvent }: any) => {
    const position = nativeEvent.contentOffset.x;
    const index = Math.round(position / width);

    setIndex(index);
  };

  const getMonth = useCallback(() => {
    const separatedExpenses = {};

    listExpenses.forEach((expense) => {
      const createdAt = new Date(expense.created_at);
      const month = createdAt.getMonth() + 1;
      const nameMonth = dayToMonth(month);

      if (!separatedExpenses[month]) {
        separatedExpenses[nameMonth] = [expense];
      } else {
        separatedExpenses[nameMonth].push(expense);
      }
    });

    setTeste(separatedExpenses);

    return separatedExpenses;
  }, []);

  // getMonth();

  console.log(teste, '>>><<<<<');

  return (
    <Animated.ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      pagingEnabled={true}
      scrollEventThrottle={16}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
        useNativeDriver: true,
      })}
      onMomentumScrollEnd={_onMomentumScrollEnd}
    >
      <S.ContainerFlatList>
        <S.GeralBalance>
          <S.Details>
            <S.Border />
            <S.ContainerDetails>
              <S.Description>Despesas geral</S.Description>
              <S.Value>{isEnabled ? `R$ ${formatBalance}` : 'R$ -------'}</S.Value>
            </S.ContainerDetails>
          </S.Details>
          <S.Button onPress={handleEnabled}>
            <S.Icon name={isEnabled ? 'eye' : 'eye-off'} size={26} color="#000" />
          </S.Button>
        </S.GeralBalance>

        <S.ViewAdd>
          <S.ButtonAdd onPress={() => navigation.navigate('Expense')}>
            <S.Text text>Adicionar nova despesa</S.Text>
            <S.ViewIcon>
              <S.Icon name="plus" size={26} color="#000" />
            </S.ViewIcon>
          </S.ButtonAdd>
        </S.ViewAdd>

        <FlatList
          // data={listExpenses.list}
          data={listExpenses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <Expenses listExpenses={item} isEnabled={isEnabled} />;
          }}
        />
        <S.ContainerButtonResume>
          <S.ButtonGeneralResume onPress={() => navigation.navigate('Home')}>
            <S.DescriptionButton>Ver valores</S.DescriptionButton>
          </S.ButtonGeneralResume>
        </S.ContainerButtonResume>
      </S.ContainerFlatList>

      <S.ContainerFlatList>
        <S.GeralBalance>
          <S.Details>
            <S.Border />
            <S.ContainerDetails>
              <S.Description>Renda geral</S.Description>
              <S.Value>{isEnabledIncome ? `R$ ${formatBalance}` : 'R$ -------'}</S.Value>
            </S.ContainerDetails>
          </S.Details>
          <S.Button onPress={handleEnabledIncome}>
            <S.Icon name={isEnabledIncome ? 'eye' : 'eye-off'} size={26} color="#000" />
          </S.Button>
        </S.GeralBalance>

        <S.ViewAdd>
          <S.ButtonAdd onPress={() => navigation.navigate('Income')}>
            <S.Text text>Adicionar nova renda</S.Text>
            <S.ViewIcon>
              <S.Icon name="plus" size={26} color="#000" />
            </S.ViewIcon>
          </S.ButtonAdd>
        </S.ViewAdd>

        <FlatList
          // data={listIncomes.list}
          data={listIncomes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <Incomes listIncomes={item} isEnabledIncome={isEnabledIncome} />;
          }}
        />
        <S.ContainerButtonResume>
          <S.ButtonGeneralResume onPress={() => navigation.navigate('Home')}>
            <S.DescriptionButton>Ver valores</S.DescriptionButton>
          </S.ButtonGeneralResume>
        </S.ContainerButtonResume>
      </S.ContainerFlatList>
    </Animated.ScrollView>
  );
}
