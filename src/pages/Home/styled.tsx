import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface Props {
  text: string;
  icon: string;
}

const Container = styled.ScrollView`
  flex: 1;
  background: #f5f7fb;
`;

const Header = styled.View`
  height: 300px;
  background: #fff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px;
  shadow-color: #000;
  shadow-offset: {
    width: 0px;
    height: 3px;
  }
  shadow-opacity: 0.27;
  shadow-radius: 4.65px;
  elevation: 6;
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
  justify-content: space-between;
  align-items: flex-end;
  flex: 2;
  margin-top: 20px;
`;

const Description = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ValueSpending = styled.View<Props>`
  background-color: ${(props) => (props.icon === 'up' ? '#4bae51' : '#f13e39')};
  height: 50px;
  width: 50px;
  border-radius: 25px;
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
  color: ${(props) => (props.text === 'green' ? '#4bae51' : '#f13e39')};
  font-size: 14px;
  font-weight: bold;
`;

const Text = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export {
  Container,
  Header,
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
};
