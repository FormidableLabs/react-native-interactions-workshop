import React from 'react';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
`;

const Column = styled(Animated.View)`
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  align-items: stretch;
  border-right-width: ${p => p.theme.sizes.hairline};
  border-right-color: ${p => p.theme.colors.stroke};
  width: ${100 / 8 /* @TODO: Might not want to hard code this */}%;
`;

const Content = styled.View`
  flex-grow: 7;
  flex-shrink: 0;
  flex-direction: row;
  align-items: stretch;
`;

const CalendarRow = ({ sidebar, children }) => (
  <Wrapper>
    <Column>{sidebar}</Column>
    <Content>{children}</Content>
  </Wrapper>
);

CalendarRow.Column = Column;

export default CalendarRow;
