import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
`;

const cellWidth = Dimensions.get('window').width / 8;

const Sidebar = styled.View`
  width: ${cellWidth};
  flex-direction: column;
  align-items: stretch;
  border-right-width: ${p => p.theme.sizes.hairline};
  border-right-color: ${p => p.theme.colors.stroke};
`;

const Content = styled.View`
  flex-grow: 7;
  flex-shrink: 0;
  flex-direction: row;
  align-items: stretch;
`;

const CalendarRow = ({ sidebar, children }) => (
  <Wrapper>
    <Sidebar>
      {sidebar}
    </Sidebar>
    <Content>
      {children}
    </Content>
  </Wrapper>
);

export default CalendarRow;
