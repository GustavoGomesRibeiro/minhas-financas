import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface Props {
  text: string;
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

const ContainerButtonsTransactions = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: 0 30px;
`;

const ButtonListTransactions = styled.TouchableOpacity`
  background-color: #386df7;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
  padding: 5px;
`;

const ButtonRegister = styled.TouchableOpacity`
  margin: 0px 10px;
  background-color: #386df7;
  padding: 10px;
  border-radius: 20px;
`;

const ContentAddSpending = styled.View``;

const Text = styled.Text<Props>`
  color: ${(props) => (props.text ? '#000' : '#fff')};
  font-size: ${(props) => (props.text ? '17px' : '16px')};
  font-weight: ${(props) => (props.text ? '500' : 'bold')};
`;

const TextTransaction = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Main = styled.ScrollView`
  background-color: #fff;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  height: 270px;
`;

const GeralBalance = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
  padding: 0px 30px;
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

const Icon = styled(Feather)``;

const Button = styled.TouchableOpacity``;

const ContainerFlatList = styled.View``;

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

const ViewAdd = styled.View`
  padding: 20px;
`;

const ButtonAdd = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  height: 70px;
  padding: 20px;
  border-radius: 15px;
  shadow-color: #000;
  shadow-offset: {
    width: 0px;
    height: 3px;
  }
  shadow-opacity: 0.27;
  shadow-radius: 4.65px;
  elevation: 6;
`;

const ViewIcon = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  width: 50px;
  height: 50px;
  border-radius: 15px;
`;

export {
  SafeAreaView,
  Main,
  Header,
  ContainerButtons,
  ContainerButtonsTransactions,
  ButtonListTransactions,
  ButtonRegister,
  Text,
  TextTransaction,
  ContentAddSpending,
  GeralBalance,
  ComponentSpending,
  Border,
  ContainerDetails,
  Description,
  DescriptionBalance,
  Details,
  Value,
  Icon,
  Button,
  ContainerFlatList,
  ButtonGeneralResume,
  ContainerButtonResume,
  DescriptionButton,
  ViewAdd,
  ViewIcon,
  ButtonAdd,
};
