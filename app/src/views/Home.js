import React, { Component } from 'react';

import Container from '../components/Container';
import Header from '../components/Header';
import CalendarRow from '../components/CalendarRow';
import CalendarColumns from '../components/CalendarColumns';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <CalendarRow>
          <CalendarColumns />
        </CalendarRow>
      </Container>
    )
  }
}

export default Home;
