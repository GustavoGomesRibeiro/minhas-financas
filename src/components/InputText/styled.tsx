import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 300px;
  background-color: #fff;
  padding: 15px 10px;
  font-size: 18px;
  border: #fff;
  border-bottom-color: #1890ff;
  border-width: 1px;
  margin-bottom: 20px;
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

const Icon = styled(Feather)`
  justify-content: center;
  align-items: center;
`;

export { Container, Input, ContentIcon, Icon };
