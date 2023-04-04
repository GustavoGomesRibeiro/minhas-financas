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
  margin: 15px 0px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  shadow-color: #000;
  shadow-offset: {
    width: 0px;
    height: 3px;
  }
  shadow-opacity: 0.27;
  shadow-radius: 4.65px;
  elevation: 6;
  font-size: 26px;
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
