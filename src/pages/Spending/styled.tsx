import styled from 'styled-components/native';

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.ScrollView`
  padding: 0px 20px;
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

const ButtonRegister = styled.TouchableOpacity`
  margin: 0px 10px;
  background-color: #386df7;
  padding: 10px;
  border-radius: 20px;
`;

const ContentAddSpending = styled.View``;

const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export { SafeAreaView, Container, Header, ContainerButtons, ButtonRegister, Text, ContentAddSpending };
