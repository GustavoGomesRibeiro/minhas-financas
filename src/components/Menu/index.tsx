import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '@routes/NavigationRoutes';
import { Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import * as S from './styled';

const Incomes = ({ listIncomes, isEnabledIncome }) => {
  const { width } = Dimensions.get('screen');

  const navigation = useNavigation<ReceiveScreen>();

  const timestamp = listIncomes.created_at;
  const date = new Date(timestamp);

  const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

  return (
    <S.Container size={width}>
      <S.Balance>
        <S.ContainerDetails>
          <S.ContainerBalance>
            <S.ContentIcon>
              <FontAwesome name="shopping-cart" size={20} color="black" />
            </S.ContentIcon>
            <S.DescriptionBalance>Cartão de crédito</S.DescriptionBalance>
            <S.Transaction>
              <S.DescriptionBalance text="balance">
                {isEnabledIncome ? `R$${listIncomes.value}` : 'R$ -------'}
              </S.DescriptionBalance>
              <S.Date>{formattedDate}</S.Date>
            </S.Transaction>
          </S.ContainerBalance>
        </S.ContainerDetails>
      </S.Balance>
    </S.Container>
  );
};

const Expenses = ({ listExpenses, isEnabled }) => {
  const { width } = Dimensions.get('screen');

  const navigation = useNavigation<ReceiveScreen>();

  const timestamp = listExpenses.created_at;
  const date = new Date(timestamp);

  const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

  return (
    <S.Container size={width}>
      <S.Balance>
        <S.ContainerDetails>
          <S.ContainerBalance>
            <S.ContentIcon>
              <FontAwesome name="shopping-cart" size={20} color="black" />
            </S.ContentIcon>
            <S.DescriptionBalance>Cartão de crédito</S.DescriptionBalance>
            <S.Transaction>
              <S.DescriptionBalance text="balance">
                {isEnabled ? `R$${listExpenses.value}` : 'R$ -------'}
              </S.DescriptionBalance>
              <S.Date>{formattedDate}</S.Date>
            </S.Transaction>
          </S.ContainerBalance>
        </S.ContainerDetails>
      </S.Balance>
    </S.Container>
  );
};

export { Incomes, Expenses };
