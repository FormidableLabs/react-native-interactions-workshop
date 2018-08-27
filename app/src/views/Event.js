import React from 'react';
import styled from 'styled-components/native';
import { Transition } from 'react-navigation-fluid-transitions';
const Wrapper = styled.View``;

const Header = styled.View`
  padding-top: 32px;
  background-color: blue;
  height: 120px;
`;

const Title = styled.Text`
  color: white;
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
      <Transition shared={`eventTitle-${event.slug}`}>
        <Header>
          <Title>{event.title}</Title>
        </Header>
      </Transition>
      <Transition appear="top">
        <Speaker>{event.speaker}</Speaker>
      </Transition>
      <Transition appear="bottom">
        <Agenda>{event.agenda}</Agenda>
      </Transition>
    </Wrapper>
  );
};

export default Home;
