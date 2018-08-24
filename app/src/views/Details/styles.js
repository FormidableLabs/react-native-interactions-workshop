import styled from 'styled-components/native';
import { Constants } from 'expo';

import * as theme from '../../theme';

const { statusBarHeight } = Constants;

export const Scrollable = styled.ScrollView``;

export const Header = styled.View`
  background-color: ${p =>
    p.isTalk ? theme.colors.card : theme.colors.inactive};
  padding: ${p => (p.isTalk ? 20 : statusBarHeight + 80)}px 10px 20px 10px;
`;

export const HeaderContent = styled.View`
  background-color: transparent;
`;

export const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Photo = styled.Image`
  width: 100%;
  aspect-ratio: ${p => p.width / p.height};
`;

export const Speaker = styled.Text`
  color: white;
  font-size: 12px;
  font-style: italic;
`;

export const Agenda = styled.Text`
  font-size: 14px;
  line-height: 18px;
  padding: 20px 10px 40px 10px;
`;
