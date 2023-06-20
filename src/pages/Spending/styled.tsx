import styled from 'styled-components/native';
import { Animated } from 'react-native';

interface Props {
  size: number;
}

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Header = styled.View`
  background-color: #1b3065;
`;

const ContainerButtons = styled.View`
  height: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 15px;
`;

const ButtonRegister = styled.TouchableOpacity`
  margin: 0px 10px;
  background-color: #386df7;
  padding: 10px;
  border-radius: 20px;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const Main = styled.ScrollView`
  background-color: #fff;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  height: 270px;
`;

const ContainerButtonsTransactions = styled.View<Props>`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin: 0px 30px;
  /* width: ${(props) => props.size}; */
  /* width: 150px; */
`;

const TextTransaction = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  margin: 0px 5px;
  /* border-radius: 15px;
  background-color: red; */
`;

export {
  SafeAreaView,
  Main,
  Header,
  ContainerButtons,
  ContainerButtonsTransactions,
  ButtonRegister,
  Text,
  TextTransaction,
};
