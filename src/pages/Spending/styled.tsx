import styled from 'styled-components/native';
import { Animated } from 'react-native';

interface Props {
  size: number;
}

const Content = styled.View`
  flex: 1;
  background-color: #19191a;
`;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Header = styled.View``;

const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const ViewHeaderFlatList = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
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
  /* width: ${(props) => props.size}; */
`;

const TextTransaction = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  margin: 0px 5px;
`;

export { Content, SafeAreaView, ViewHeaderFlatList, Main, Header, ContainerButtonsTransactions, Text, TextTransaction };
