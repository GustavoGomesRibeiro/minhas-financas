import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: #0a9eff;
  border-radius: 5px;
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  padding: 10px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  margin-left: 10px;
`;