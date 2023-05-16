import React from 'react';
import { Animated, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '@routes/NavigationRoutes';

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
}) {
  const navigation = useNavigation<ReceiveScreen>();

  return (
    <Animated.ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      pagingEnabled={true}
      scrollEventThrottle={16}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x } } }], {
        useNativeDriver: true,
      })}
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

        <FlatList
          data={listExpenses.list}
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

        <FlatList
          data={listIncomes.list}
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
