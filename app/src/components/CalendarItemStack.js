import React from 'react';
import styled from 'styled-components/native';
import { getHours, getMinutes } from 'date-fns';

import * as theme from '../theme';
import CalendarItem from './CalendarItem';

const { HOUR_HEIGHT } = theme.calendar;

const Wrapper = styled.View`
  height: ${HOUR_HEIGHT * 24}px;
  flex-direction: column;
  align-items: stretch;
`;

const CalendarItemStack = ({ data, navigate }) => {
  const { items } = data;
  let y = 0;

  const styles = items.map(item => {
    const hour = getHours(item.date) + getMinutes(item.date) / 60;
    const top = hour * HOUR_HEIGHT;
    const height = item.duration * HOUR_HEIGHT;
    const marginTop = top - y;

    y = top + height;
    return { marginTop, height };
  });

  return (
    <Wrapper>
      {items.map((item, i) => (
        <CalendarItem
          key={i}
          item={item}
          style={styles[i]}
        />
      ))}
    </Wrapper>
  );
}

export default CalendarItemStack;
