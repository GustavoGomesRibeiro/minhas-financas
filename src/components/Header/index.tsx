import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ReceiveScreen } from '@routes/NavigationRoutes';

import * as S from './styled';

export default function Header({ children }: any) {
  const navigation = useNavigation<ReceiveScreen>();

  return (
    <S.Container>
      <S.ContainerBack>
        <S.ButtonBack onPress={() => navigation.goBack()}>
          <S.Icon name="arrow-left" size={24} color="white" />
        </S.ButtonBack>
      </S.ContainerBack>
      {children}
    </S.Container>
  );
}
