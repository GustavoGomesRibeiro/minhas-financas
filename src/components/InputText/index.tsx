import React from 'react';

import * as S from './styled';

export default function ComponentInputText({ setExpense, expense }) {
  return (
    <S.Container>
      <S.Input placeholder="Despesas" onChangeText={setExpense} value={expense} />
      <S.Icon name="clipboard" size={18} color="black" />
    </S.Container>
  );
}
