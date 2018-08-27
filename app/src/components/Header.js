import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  background: ${p => p.theme.colors.header};
`;

const Wrapper = styled.View`
  height: 80px;
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.colors.stroke};
`;

const Row = styled.View`
  flex-grow: 1;
  flex-direction: row;
  width: 100%;
  align-items: stretch;
`;

const Column = styled.View`
  width: ${p => p.theme.sizes.cellWidth};
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const DateLabel = styled.Text`
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  color: ${p => p.theme.colors.label};
  padding: ${p => p.theme.sizes.mid} 0;
`;

const Header = ({ children }) => (
  <Container>
    <Wrapper>
      <Row>
        <Column />
        <Column><DateLabel>MON</DateLabel></Column>
        <Column><DateLabel>TUE</DateLabel></Column>
        <Column><DateLabel>WED</DateLabel></Column>
        <Column><DateLabel>THU</DateLabel></Column>
        <Column><DateLabel>FRI</DateLabel></Column>
        <Column><DateLabel>SAT</DateLabel></Column>
        <Column><DateLabel>SUN</DateLabel></Column>
      </Row>
    </Wrapper>
  </Container>
);

export default Header;
