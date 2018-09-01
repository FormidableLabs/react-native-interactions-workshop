import React from 'react';
import styled from 'styled-components/native';
import { Transition } from 'react-navigation-fluid-transitions';
import * as theme from '../theme';
import BackButton from '../components/BackButton';
import Container from '../components/Container';

const Scrollable = styled.ScrollView``;

const Header = styled.View`
  background-color: ${p =>
    p.isTalk ? theme.colors.card : theme.colors.inactive};
  padding: 20px 10px 20px 10px;
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

const Photo = styled.Image`
  width: 100%;
  aspect-ratio: ${p => p.width / p.height};
`;

const Speaker = styled.Text`
  color: white;
  font-size: 12px;
  font-style: italic;
`;

const Agenda = styled.Text`
  font-size: 14px;
  line-height: 18px;
  padding: 20px 10px 40px 10px;
`;

/**
 * Detail page for a single talk or other program event
 */
const Event = ({ navigation }) => {
  const event = navigation.getParam('event', {});
  const photo = event.profile && event.profile.photo;
  return (
    <Container>
      <Scrollable>
        {photo && (
          <Photo
            source={{ uri: photo.uri }}
            width={photo.width}
            height={photo.height}
          />
        )}
        <Transition shared={`eventTitle-${event.slug}`}>
          <Header isTalk={event.isTalk}>
            <Transition appear="left">
              <HeaderContent>
                <Title>{event.title}</Title>
                <Speaker>{event.speaker}</Speaker>
              </HeaderContent>
            </Transition>
          </Header>
        </Transition>
        <Transition appear="bottom">
          <Agenda>{event.agenda || 'Nothing much to say about this.'}</Agenda>
        </Transition>
      </Scrollable>
      <BackButton onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default Event;
