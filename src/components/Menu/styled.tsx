import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface Props {
  text: string;
  size: number;
}

const Container = styled.View<Props>`
  width: ${(props) => props.size};
  padding: 0px 30px;
`;

const Icon = styled(Feather)``;

const Button = styled.TouchableOpacity``;

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
  background-color: #386df7;
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

const ContainerButtonResume = styled.View`
  justify-content: center;
  align-items: center;
  margin: 15px 0px;
`;

const ButtonGeneralResume = styled.TouchableOpacity`
  height: 50px;
  width: 250px;
  background-color: #386df7;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const DescriptionButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export {
  Container,
  Icon,
  Button,
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
  ContainerButtonResume,
  ButtonGeneralResume,
  DescriptionButton,
};
