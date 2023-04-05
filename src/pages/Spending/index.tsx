import { useState, useCallback, useMemo } from 'react';

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

  const addNewValue = (value: any) => {
    setAllBalance([...allBalance, { balance: value }]);
    setPrice('');
  };

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

          <S.Divider />

          <S.Balance>
            <S.ContainerDetails>
              {allBalance.map((balance) => {
                return (
                  <>
                    <S.Transaction key={Math.random()}>
                      <S.Description text="balance">{balance.balance}</S.Description>
                    </S.Transaction>

                    <S.Divider />
                  </>
                );
              })}
            </S.ContainerDetails>
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
