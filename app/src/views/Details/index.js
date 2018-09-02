import React from 'react';
import { Transition } from 'react-navigation-fluid-transitions';

import { BackButton, Container } from '../../components/misc';
import { Scrollable, Photo, HeaderContent, Header, Title, Speaker, Agenda } from './styles';

/**
 * Detail page for a single talk or other program event
 */
const Details = ({ navigation }) => {
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
                {event.speaker ? <Speaker>{event.speaker}</Speaker> : null}
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

export default Details;
