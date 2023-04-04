import React from 'react';

import * as S from './styled';

export default function ComponentInput({ setPrice, price }) {
  return (
    <S.Container>
      <S.Input keyboardType="numeric" placeholder="R$0,00" onChangeText={setPrice} value={price} />
      <S.ContentIcon>
        <S.Icon name="plus" size={26} color="#fff" />
      </S.ContentIcon>
    </S.Container>
  );
}
