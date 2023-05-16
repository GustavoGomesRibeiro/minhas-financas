import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '@routes/NavigationRoutes';
import { Dimensions } from 'react-native';

import { ISpendingExpense, ISpendingIncome } from '@interfaces/api/ISpending';

import * as S from './styled';

const Incomes = ({ listIncomes, isEnabledIncome }) => {
  const { width } = Dimensions.get('screen');

  const navigation = useNavigation<ReceiveScreen>();

  return (
    <S.Container size={width}>
      <S.Balance>
        <S.ContainerDetails>
          <S.ContainerBalance>
            <S.DescriptionBalance>Cartão de crédito</S.DescriptionBalance>
            <S.Transaction>
              <S.DescriptionBalance text="balance">
                {isEnabledIncome ? `R$${listIncomes.value}` : 'R$ -------'}
              </S.DescriptionBalance>
            </S.Transaction>
          </S.ContainerBalance>

          <S.Divider />
        </S.ContainerDetails>
      </S.Balance>
    </S.Container>
  );
};

const Expenses = ({ listExpenses, isEnabled }) => {
  const { width } = Dimensions.get('screen');

  const navigation = useNavigation<ReceiveScreen>();

  return (
    <S.Container size={width}>
      <S.Balance>
        <S.ContainerDetails>
          <S.ContainerBalance>
            <S.DescriptionBalance>Cartão de crédito</S.DescriptionBalance>
            <S.Transaction>
              <S.DescriptionBalance text="balance">
                {isEnabled ? `R$${listExpenses.value}` : 'R$ -------'}
              </S.DescriptionBalance>
            </S.Transaction>
          </S.ContainerBalance>

          <S.Divider />
        </S.ContainerDetails>
      </S.Balance>
    </S.Container>
  );
};

export { Incomes, Expenses };
