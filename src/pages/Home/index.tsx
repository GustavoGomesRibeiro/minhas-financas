import React from 'react';
import { useAuthentication } from '@hooks/useAuthentication';
import { useConsumeApi } from '@hooks/useConsumeApi';
import { buttonStatics } from '@utils/configButtonsStatics';
import { MaterialIcons } from '@expo/vector-icons';

import * as S from './styled';

export default function Home() {
  const { logout } = useAuthentication();
  const { amount } = useConsumeApi();

  return (
    <S.Container>
      <S.ContentHeader>
        <S.Header>
          <S.ItemsHeader>
            <S.Perfil></S.Perfil>
            <S.Month>
              <S.Text>Março</S.Text>
            </S.Month>
            <S.Button onPress={logout}>
              <S.Icon name="log-out" size={24} color="#000" />
              <S.Text>Sair</S.Text>
            </S.Button>
          </S.ItemsHeader>

          <S.Values>
            <S.Description>
              <S.ValueSpending icon="up">
                <S.Icon name="arrow-up" size={24} color="#000" />
              </S.ValueSpending>
              <S.DescriptionSpeding>
                <S.Text>Receita</S.Text>
                <S.TextDescription text="green">R${amount.income}</S.TextDescription>
              </S.DescriptionSpeding>
            </S.Description>

            <S.Description>
              <S.ValueSpending icon="down">
                <S.Icon name="arrow-down" size={24} color="#000" />
              </S.ValueSpending>
              <S.DescriptionSpeding>
                <S.Text>Despesas</S.Text>
                <S.TextDescription text="red">R${amount.expense}</S.TextDescription>
              </S.DescriptionSpeding>
            </S.Description>
          </S.Values>
        </S.Header>
      </S.ContentHeader>

      <S.MainCotainer>
        <S.Main>
          <S.Title>Estatísticas</S.Title>
          <S.Options>
            {buttonStatics.map((i) => {
              return (
                <S.Buttons>
                  <S.DivIcon>
                    <S.ContentIcon style={{ backgroundColor: i.background }}>
                      <MaterialIcons name={i.icon} size={20} color="black" />
                    </S.ContentIcon>
                    <S.TextButtonStatic>{i.statics}</S.TextButtonStatic>
                  </S.DivIcon>
                  <S.TextButtonStatic>{i.name}</S.TextButtonStatic>
                </S.Buttons>
              );
            })}
          </S.Options>
        </S.Main>
      </S.MainCotainer>
    </S.Container>
  );
}
