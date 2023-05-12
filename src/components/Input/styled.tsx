import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  flex: 1;
  border-radius: 10px;
  padding: 20px;
  font-size: 30px;
  color: #fff;
  text-align: right;
  font-weight: bold;
`;

const ContentIcon = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 25px;
  background-color: #77b67b;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(Feather)``;

export { Container, Input, ContentIcon, Icon };
