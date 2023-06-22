import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
  modal: string;
  month: boolean;
}

const Container = styled.View`
  flex: 1;
`;

const ButtonSelect = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonSelectModal = styled.TouchableOpacity<Props>`
  border-bottom-width: 0.5px;
  border-bottom-color: #eee;
  padding: 10px 5px;
  background-color: ${(props) => (props.month ? '#eee' : '#fff')};
`;

const Text = styled.Text<Props>`
  color: #000;
  font-size: ${(props) => (props.modal ? '16px' : '18px')};
  font-weight: ${(props) => (props.modal ? 'bold' : '400')};
  padding: 10px;
`;

const Icon = styled(MaterialIcons)``;

const SafeAreaView = styled.SafeAreaView``;

const ViewModal = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  border-bottom-color: '#ddd';
  border-bottom-width: 0.5px;
`;

const ListMonths = styled.ScrollView``;

const ViewReturnListMonths = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

export {
  Container,
  ButtonSelect,
  ButtonSelectModal,
  Text,
  Icon,
  SafeAreaView,
  ViewModal,
  ListMonths,
  ViewReturnListMonths,
};
