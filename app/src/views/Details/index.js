import React from 'react';
// import { Transition } from 'react-navigation-fluid-transitions';

import { BackButton, Container } from '../../components/misc';
import { Scrollable, Photo, HeaderContent, Header, Title, Speaker, Agenda } from './styles';

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

        <Header isTalk={event.isTalk}>
          <HeaderContent>
            <Title>{event.title}</Title>
            {event.speaker ? <Speaker>{event.speaker}</Speaker> : null}
          </HeaderContent>
        </Header>

        <Agenda>{event.agenda || 'Nothing much to say about this.'}</Agenda>
      </Scrollable>

      <BackButton onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default Details;
