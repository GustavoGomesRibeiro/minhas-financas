import React, { useState } from 'react';
import { Modal } from 'react-native';

import { MONTHS } from '@utils/months';

import * as S from './styled';

export default function Select({ month, setMonth }: any) {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <S.Container>
      <S.ButtonSelect onPress={() => setModal(true)}>
        <S.Text>{month ? month : 'Selecione o Mês'}</S.Text>
        <S.Icon name="keyboard-arrow-down" size={24} color="black" />
      </S.ButtonSelect>

      <Modal animationType="slide" visible={modal} onRequestClose={() => setModal(false)}>
        <S.SafeAreaView>
          <S.ViewModal>
            <S.ButtonSelect onPress={() => setModal(false)}>
              <S.Icon name="keyboard-arrow-left" size={24} color="black" />
            </S.ButtonSelect>

            <S.Text>Selecione o Mês</S.Text>

            <S.ButtonSelect onPress={() => setModal(false)}>
              <S.Text modal>Cancelar</S.Text>
            </S.ButtonSelect>
          </S.ViewModal>

          <S.ListMonths>
            {MONTHS.map((m) => {
              return (
                <S.ButtonSelectModal
                  month={m.month === month}
                  onPress={() => {
                    setMonth(m.month);
                    setModal(false);
                  }}
                >
                  <S.ViewReturnListMonths key={m.id}>
                    <S.Text>{m.month}</S.Text>
                    {m.month === month && <S.Icon name="check" size={24} color={month ? 'green' : ''} />}
                  </S.ViewReturnListMonths>
                </S.ButtonSelectModal>
              );
            })}
          </S.ListMonths>
        </S.SafeAreaView>
      </Modal>
    </S.Container>
  );
}
