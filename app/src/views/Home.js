import React from 'react';
import styled from 'styled-components/native';

import Container from '../components/Container';
import Header from '../components/Header';

const Row = styled.View`
  flex-grow: 1;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: stretch;
`;

const Column = styled.View`
  width: ${p => p.theme.sizes.cellWidth};
  flex-direction: column;
  border-right-width: ${p => p.theme.sizes.hairline};
  border-right-color: ${p => p.theme.colors.stroke};
`;

const Home = () => (
  <Container>
    <Header />
    <Row>
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </Row>
  </Container>
);

export default Home;
