import { useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '@routes/NavigationRoutes';

import ComponentSpending from '@components/Spending/index';
import { useConsumeApi } from '@hooks/useConsumeApi';

import * as S from './styled';

export default function Spending() {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);

  const navigation = useNavigation<ReceiveScreen>();
  const { amount, listExpenses } = useConsumeApi();

  const handleEnabled = () => {
    setIsEnabled((event) => !event);
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
          <S.ButtonRegister onPress={() => navigation.navigate('Expense')}>
            <S.Text>Rendas</S.Text>
          </S.ButtonRegister>
        </S.ContainerButtons>
      </S.Header>

      <S.Container>
        <ComponentSpending>
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
            {listExpenses.list.map((expense) => {
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
        </ComponentSpending>

        <ComponentSpending>
          <S.GeralBalance>
            <S.Button onPress={handleEnabled}>
              <S.Icon name={isEnabled ? 'eye' : 'eye-off'} size={26} color="#000" />
            </S.Button>
          </S.GeralBalance>
        </ComponentSpending>
      </S.Container>
    </S.SafeAreaView>
  );
}
