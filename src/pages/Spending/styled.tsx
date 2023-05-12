import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface Props {
  text: string;
}

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.ScrollView`
  padding: 0px 20px;
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

const ContentAddSpending = styled.View``;

const Button = styled.TouchableOpacity``;

const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const Icon = styled(Feather)``;

const GeralBalance = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ComponentSpending = styled.View``;

const Details = styled.View`
  flex-direction: row;
`;

const ContainerDetails = styled.View``;

const Border = styled.View`
  background-color: #4bae51;
  height: 50px;
  width: 5px;
  margin-right: 10px;
`;

const Description = styled.Text<Props>`
  color: ${(props) => (props.text ? '#000' : '#b1b1b1')};
  font-size: ${(props) => (props.text ? '18px' : '14px')};
  padding: ${(props) => (props.text ? '0px 20px' : '0px')};
`;

const DescriptionBalance = styled.Text<Props>`
  color: ${(props) => (props.text ? '#2d8ce6' : '#000')};
  font-size: ${(props) => (props.text ? '18px' : '18px')};
  font-weight: ${(props) => (props.text ? '900' : '500')};
`;

const Value = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

const Balance = styled.View``;

const ContainerBalance = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Transaction = styled.View`
  background-color: #fdfdfd;
  height: 50px;
  margin: 10px 0px;
  justify-content: center;
  align-items: flex-end;
`;

const Divider = styled.View`
  height: 2px;
  background-color: #f3f5f4;
`;

export {
  SafeAreaView,
  Container,
  Header,
  ContainerButtons,
  ButtonRegister,
  Text,
  ContentAddSpending,
  Button,
  Icon,
  GeralBalance,
  ComponentSpending,
  Details,
  ContainerDetails,
  Border,
  Description,
  DescriptionBalance,
  Value,
  Balance,
  ContainerBalance,
  Transaction,
  Divider,
};
