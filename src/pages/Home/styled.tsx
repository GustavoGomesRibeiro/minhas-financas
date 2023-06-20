import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface Props {
  text: string;
  icon: string;
}

const Container = styled.View`
  flex: 1;
  background: #19191a;
`;

const ContentHeader = styled.View`
  flex: 1;
`;

const Header = styled.View`
  height: 100%;
  padding: 20px;
`;

const ItemsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const Perfil = styled.View`
  background-color: #f59696;
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

const Month = styled.View``;

const Values = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  flex: 2;
  margin-top: 20px;
`;

const Description = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #2e2e2e;
  border-radius: 20px;
  padding: 0px 5px;
  width: 150px;
`;

const ValueSpending = styled.View<Props>`
  background-color: ${(props) => (props.icon === 'up' ? '#62D9A1' : '#FF4949')};
  height: 25px;
  width: 25px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(Feather)``;

const DescriptionSpeding = styled.View`
  margin: 10px;
`;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TextDescription = styled.Text<Props>`
  color: ${(props) => (props.text === 'green' ? '#62D9A1' : '#FF4949')};
  font-size: 14px;
  font-weight: bold;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const MainCotainer = styled.View`
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Main = styled.View`
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 100%;
`;

const Title = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
`;

const Options = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
`;

const Buttons = styled.TouchableOpacity`
  width: 170px;
  height: 70px;
  border-radius: 15px;
  background-color: #fff;
  margin: 10px;
  shadow-color: #000;
  shadow-offset: {
    width: 0px;
    height: 3px;
  }
  shadow-opacity: 0.27;
  shadow-radius: 4.65px;
  elevation: 6;
  padding: 10px 20px;
`;

const DivIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ContentIcon = styled.View<Props>`
  height: 35px;
  width: 35px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const TextButtonStatic = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: bold;
`;

export {
  Container,
  MainCotainer,
  ContentHeader,
  Header,
  Main,
  Button,
  Text,
  ItemsHeader,
  Perfil,
  Values,
  ValueSpending,
  Month,
  Description,
  TextDescription,
  DescriptionSpeding,
  Icon,
  Title,
  Options,
  Buttons,
  DivIcon,
  ContentIcon,
  TextButtonStatic,
};
