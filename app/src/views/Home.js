import React, { Component } from 'react';

import data from '../data';

import Container from '../components/Container';
import Header from '../components/Header';
import CalendarRow from '../components/CalendarRow';
import CalendarColumns from '../components/CalendarColumns';
import CalendarSidebar from '../components/CalendarSidebar';
import CalendarItemStack from '../components/CalendarItemStack';

class Home extends Component {
  render() {
    const { navigate } = this.props;
    const headerLabels = data.map(x => x.label);

    return (
      <Container>
        <Header labels={headerLabels} />
        <CalendarRow sidebar={<CalendarSidebar />}>
          <CalendarColumns>
            {i => <CalendarItemStack data={data[i]} navigate={navigate} />}
          </CalendarColumns>
        </CalendarRow>
      </Container>
    )
  }
}

export default Home;
