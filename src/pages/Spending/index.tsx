import { useState, useCallback, useMemo } from 'react';

import ComponentSpending from '@components/Spending/index';
import ComponentInput from '@components/Input/index';
import { currencyInput } from '@utils/currency';

import * as S from './styled';

export default function Spending() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [price, setPrice] = currencyInput();

  const handleEnabled = () => {
    setIsEnabled((event) => !event);
  };

  return (
    <S.SafeAreaView>
      <S.Container>
        <S.ContentAddSpending>
          <ComponentInput setPrice={setPrice} price={price} />
        </S.ContentAddSpending>

        <ComponentSpending>
          <S.GeralBalance>
            <S.Details>
              <S.Border />
              <S.ContainerDetails>
                <S.Description>Despesas geral</S.Description>
                <S.Value>{isEnabled ? 'R$ 999,20' : 'R$ -------'}</S.Value>
              </S.ContainerDetails>
            </S.Details>
            <S.Button onPress={handleEnabled}>
              <S.Icon name={isEnabled ? 'eye' : 'eye-off'} size={26} color="#000" />
            </S.Button>
          </S.GeralBalance>
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
