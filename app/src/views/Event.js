import React from 'react';
import styled from 'styled-components/native';
import { Transition } from 'react-navigation-fluid-transitions';
const Wrapper = styled.View``;

const Header = styled.View`
  height: 120px;
  background-color: blue;
  padding: 32px 10px 10px 10px;
`;

const HeaderContent = styled.View`
  background-color: transparent;
`;

const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Speaker = styled.Text`
  color: white;
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
          <Transition appear="top">
            <HeaderContent>
              <Title>{event.title}</Title>
              <Speaker>{event.speaker}</Speaker>
            </HeaderContent>
          </Transition>
        </Header>
      </Transition>
      <Transition appear="bottom">
        <Agenda>{event.agenda}</Agenda>
      </Transition>
    </Wrapper>
  );
};

export default Home;
