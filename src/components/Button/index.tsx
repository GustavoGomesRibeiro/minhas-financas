import React from 'react';

import { Container, Icon , Text } from './styled';

export default function Button({children, icon}){
  return (
    <Container>
        <Icon name={icon} size={20} color="#fff"/>
        <Text>
            {children}
        </Text>
    </Container>
  );
}