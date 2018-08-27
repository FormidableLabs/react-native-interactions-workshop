import React from 'react';
import styled from 'styled-components/native';
import data from '../data/events';
import CalendarItem from './CalendarItem';

const Wrapper = styled.View`
  flex-shrink: 1;
  flex-grow: 0;
`;

const CalendarItemStack = ({ day, navigate }) => (
  <Wrapper>
    {data
      // only pick items for this day with a title (filter out lunch etc.)
      .filter(item => item.day === day && Boolean(item.title))
      .map((item, i) => (
        <CalendarItem
          key={i}
          item={item}
          onPress={() => {
            navigate('Event', {
              event: item
            });
          }}
        />
      ))}
  </Wrapper>
);

export default CalendarItemStack;
