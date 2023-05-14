import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '@routes/NavigationRoutes';

import * as S from './styled';

function ComponentExpense({ formatBalance, listExpenses, isEnabled, handleEnabled }: any) {
  if (!listExpenses.list) return;

  const navigation = useNavigation<ReceiveScreen>();

  return (
    <S.Container>
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

      <S.Balance>
        {listExpenses.list.slice(0, 3).map((expense) => {
          if (expense.value) {
            return (
              <S.ContainerDetails key={Math.random()}>
                <S.ContainerBalance>
                  <S.DescriptionBalance>Cartão de crédito</S.DescriptionBalance>
                  <S.Transaction>
                    <S.DescriptionBalance text="balance">
                      {isEnabled ? `R$${expense.value}` : 'R$ -------'}
                    </S.DescriptionBalance>
                  </S.Transaction>
                </S.ContainerBalance>

                <S.Divider />
              </S.ContainerDetails>
            );
          }
        })}
      </S.Balance>

      <S.ContainerButtonResume>
        <S.ButtonGeneralResume onPress={() => navigation.navigate('Home')}>
          <S.DescriptionButton>Ver valores</S.DescriptionButton>
        </S.ButtonGeneralResume>
      </S.ContainerButtonResume>
    </S.Container>
  );
}

function ComponentIncome({ formatBalance, listIncomes, isEnabledIncome, handleEnabledIncome }: any) {
  if (!listIncomes.list) return;

  const navigation = useNavigation<ReceiveScreen>();

  return (
    <S.Container>
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

      <S.Balance>
        {listIncomes.list.slice(0, 3).map((expense) => {
          if (expense.value) {
            return (
              <S.ContainerDetails key={Math.random()}>
                <S.ContainerBalance>
                  <S.DescriptionBalance>Cartão de crédito</S.DescriptionBalance>
                  <S.Transaction>
                    <S.DescriptionBalance text="balance">
                      {isEnabledIncome ? `R$${expense.value}` : 'R$ -------'}
                    </S.DescriptionBalance>
                  </S.Transaction>
                </S.ContainerBalance>

                <S.Divider />
              </S.ContainerDetails>
            );
          }
        })}
      </S.Balance>

      <S.ContainerButtonResume>
        <S.ButtonGeneralResume onPress={() => navigation.navigate('Home')}>
          <S.DescriptionButton>Ver valores</S.DescriptionButton>
        </S.ButtonGeneralResume>
      </S.ContainerButtonResume>
    </S.Container>
  );
}

export { ComponentExpense, ComponentIncome };
