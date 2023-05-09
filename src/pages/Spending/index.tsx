import { useState, useCallback } from 'react';

import ComponentSpending from '@components/Spending/index';
import ComponentInput from '@components/Input/index';
import { currencyInput } from '@utils/currency';

import * as S from './styled';

export default function Spending() {
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [balance, setBalance] = useState<number>(0);
  const [allBalance, setAllBalance] = useState([{ balance: '' }]);
  const [price, setPrice]: any = currencyInput();

  const handleEnabled = () => {
    setIsEnabled((event) => !event);
  };

  const addNewValue = useCallback(
    (value: any) => {
      setAllBalance([...allBalance, { balance: value }]);
      sumBalances(allBalance);
      setPrice('');
    },
    [allBalance, setAllBalance],
  );

  const sumBalances = useCallback(
    (balances: any) => {
      const removeComma = balances.map((item) => item.balance.replace(/,/g, '.'));
      const removeCaracters = removeComma.map((item) => parseInt(item.replace(/R|,|[!@#$%^&*]/g, '')));
      const balance = removeCaracters.slice(1);

      setBalance(balance.reduce((result, balance) => result + balance, 0));
    },
    [balance, setBalance],
  );

  const formatBalance = balance.toFixed(2);

  return (
    <S.SafeAreaView>
      <S.Container>
        <S.ContentAddSpending>
          <ComponentInput setPrice={setPrice} price={price} addNewValue={() => addNewValue(price)} />
        </S.ContentAddSpending>

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
            {allBalance.map((value) => {
              if (value.balance) {
                return (
                  <S.ContainerDetails key={Math.random()}>
                    <S.ContainerBalance>
                      <S.DescriptionBalance>Cartão de crédito</S.DescriptionBalance>
                      <S.Transaction>
                        <S.DescriptionBalance text="balance">
                          {isEnabled ? value.balance : 'R$ -------'}
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
