import React from 'react';
import styled from 'styled-components/native';

import * as theme from '../theme';
const { HOUR_HEIGHT } = theme.calendar;

const Wrapper = styled.View`
  flex-direction: column;
  align-items: stretch;
`;

const Row = styled.View`
  height: ${HOUR_HEIGHT}px;
`;

const Label = styled.Text`
  color: ${p => p.theme.colors.label};
  font-size: 10px;
  padding: 2px 4px;
`;

const START_TIME = 8;
const generateLabels = (startTime, length) =>
  Array.from({ length }).map(
    (_, i) => `${(i + startTime).toString().padStart(2, '0')}:00`
  );

const CalendarSidebar = () => (
  <Wrapper>
    {Array.from({ length: 23 }).map((_, i) => {
      const time = `${i}`;
      const label = `${time.padStart(2, '0')}:00`;

      return (
        <Row key={label}>
          {i > 0 && (
            <Label>
              {label}
            </Label>
          )}
        </Row>
      );
    })}
  </Wrapper>
);

export default CalendarSidebar;
