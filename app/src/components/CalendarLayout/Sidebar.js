import React from 'react';
import styled from 'styled-components/native';
import { format, setHours, startOfDay } from 'date-fns';

import * as theme from '../../theme';
const { HOUR_HEIGHT, SIDEBAR_OFFSET } = theme.calendar;

const Wrapper = styled.View`
  flex-direction: column;
  align-items: stretch;
  top: ${SIDEBAR_OFFSET}px;
`;

const Row = styled.View`
  flex-direction: column;
  align-items: flex-start;
  height: ${HOUR_HEIGHT}px;
`;

const Label = styled.Text`
  color: ${p => p.theme.colors.label};
  line-height: 12px;
  font-size: 10px;
  padding: 2px 4px;
`;

const LABEL_FORMAT = 'HH:mm';
const start = startOfDay(new Date());

const Sidebar = () => (
  <Wrapper>
    {Array.from({ length: 24 }).map((_, i) => {
      const label = format(setHours(start, i), LABEL_FORMAT);

      return <Row key={label}>{i > 0 && <Label>{label}</Label>}</Row>;
    })}
  </Wrapper>
);

export default Sidebar;
