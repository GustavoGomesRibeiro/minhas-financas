import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;
export const Container = styled.View``;

export const ContainerHeader = styled.View`
  height: 200px;
`;

export const Main = styled.View`
  flex: 1;
  background-color: #fdfdfd;
`;

export const ContainerItems = styled.View`
  padding: 0 10px;
`;

export const Description = styled.View`
  height: 150px;
`;

export const Title = styled.Text`
  padding: 10px 25px;
  color: #000;
  font-weight: bold;
  font-size: 20px;
`;

export const Footer = styled.View`
  align-items: center;
`;

export const ButtonRegister = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 250px;
  height: 50px;
  background-color: #1b3065;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
