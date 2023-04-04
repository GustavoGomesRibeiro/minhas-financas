import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.ScrollView`
  padding: 0px 20px;
`;

const ContentAddSpending = styled.View``;

const Button = styled.TouchableOpacity``;

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

const Description = styled.Text`
  color: #b1b1b1;
  font-size: 14px;
`;

const Value = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

export {
  SafeAreaView,
  Container,
  ContentAddSpending,
  Button,
  Icon,
  GeralBalance,
  ComponentSpending,
  Details,
  ContainerDetails,
  Border,
  Description,
  Value,
};
