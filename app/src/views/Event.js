import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Speaker = styled.Text`
  font-size: 12px;
  font-style: italic;
`;

const Agenda = styled.Text`
  font-size: 12px;
  line-height: 14px;
  margin-top: 14px;
`;

const Home = ({ navigation }) => {
  const event = navigation.getParam('event', {});
  return (
    <Wrapper>
      <Title>{event.title}</Title>
      <Speaker>{event.speaker}</Speaker>
      <Agenda>{event.agenda}</Agenda>
    </Wrapper>
  );
};

export default Home;
