import React, { useState, useEffect } from 'react';
import { Animated, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '@routes/NavigationRoutes';
import { useListByMonth } from '@hooks/useListByMonth';
import { VictoryPie, VictoryLabel, VictoryTheme } from 'victory-native';

import { Expenses, Incomes } from '@components/Menu/index';

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
  month,
}) {
  const navigation = useNavigation<ReceiveScreen>();
  const { listExpensesByMonth, listIncomesByMonth } = useListByMonth();
  const [dataChartExpenses, setDataChartExpenses] = useState();

  const { width } = Dimensions.get('screen');

  const _onMomentumScrollEnd = ({ nativeEvent }: any) => {
    const position = nativeEvent.contentOffset.x;
    const index = Math.round(position / width);

    setIndex(index);
  };

  useEffect(() => {
    setDataChartExpenses(listExpensesByMonth[month]), [dataChartExpenses];
  });

  // console.log(listExpensesByMonth[month]);

  return (
    <Animated.ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      scrollEventThrottle={16}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
        useNativeDriver: true,
      })}
      onMomentumScrollEnd={_onMomentumScrollEnd}
    >
      <S.ContainerFlatList size={width}>
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

        <S.Chart>
          {month ? (
            <>
              <VictoryPie
                colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
                padAngle={({ datum }) => datum.y}
                // innerRadius={100}
                innerRadius={70}
                labelRadius={100}
                data={dataChartExpenses}
                x={'name'}
                y={'value'}
                // labelComponent={
                //   <VictoryLabel textAnchor="middle" verticalAnchor="middle" x={200} y={200} style={{ fontSize: 30 }} />
                // }
              />
            </>
          ) : null}
        </S.Chart>

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
          data={listExpensesByMonth[month]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <Expenses listExpenses={item} isEnabled={isEnabled} />;
          }}
        />
      </S.ContainerFlatList>

      <S.ContainerFlatList size={width}>
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
          data={listIncomesByMonth[month]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <Incomes listIncomes={item} isEnabledIncome={isEnabledIncome} />;
          }}
        />
      </S.ContainerFlatList>
    </Animated.ScrollView>
  );
}
