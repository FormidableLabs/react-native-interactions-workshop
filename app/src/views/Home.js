import React, { Component } from 'react';

import Container from '../components/Container';
import Header from '../components/Header';
import CalendarRow from '../components/CalendarRow';
import CalendarColumns from '../components/CalendarColumns';
import CalendarItemStack from '../components/CalendarItemStack';

class Home extends Component {
  render() {
    const { navigate } = this.props;

    return (
      <Container>
        <Header />
        <CalendarRow>
          <CalendarColumns>
            {index => <CalendarItemStack day={index + 1} navigate={navigate} />}
          </CalendarColumns>
        </CalendarRow>
      </Container>
    )
  }
}

export default Home;
