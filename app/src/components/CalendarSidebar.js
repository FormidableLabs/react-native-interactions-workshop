import React from 'react';
import styled from 'styled-components/native';
import { format, setHours, startOfDay } from 'date-fns';

import * as theme from '../theme';
const { HOUR_HEIGHT } = theme.calendar;

const Wrapper = styled.View`
  flex-direction: column;
  align-items: stretch;
`;

const Row = styled.View`
  flex-direction: column;
  align-items: flex-start;
  height: ${HOUR_HEIGHT}px;
`;

const RowItem = styled.View`
  margin-top: -1px;
  border-top-color: ${p => p.theme.colors.stroke};
  border-top-width: 1px;
  padding: 2px 4px;
`;

const Label = styled.Text`
  color: ${p => p.theme.colors.label};
  font-size: 10px;
`;

const LABEL_FORMAT = 'HH:mm';
const start = startOfDay(new Date());

const CalendarSidebar = () => (
  <Wrapper>
    {Array.from({ length: 24 }).map((_, i) => {
      const label = format(setHours(start, i), LABEL_FORMAT);

      return (
        <Row key={label}>
          {i > 0 && (
            <RowItem><Label>{label}</Label></RowItem>
          )}
        </Row>
      );
    })}
  </Wrapper>
);

export default CalendarSidebar;
