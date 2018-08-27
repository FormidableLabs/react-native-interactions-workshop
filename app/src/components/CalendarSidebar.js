import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
`;

const Label = styled.Text`
  flex: 1;
  font-size: 10px;
`;

const START_TIME = 8;
const generateLabels = (startTime, length) =>
  Array.from({ length }).map(
    (_, i) => `${(i + startTime).toString().padStart(2, '0')}:00`
  );

const CalendarSidebar = () => (
  <Wrapper>
    {generateLabels(START_TIME, 10).map(label => (
      <Label key={label}>{label}</Label>
    ))}
  </Wrapper>
);

export default CalendarSidebar;
