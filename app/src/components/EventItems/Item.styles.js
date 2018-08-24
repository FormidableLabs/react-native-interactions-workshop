import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import * as theme from '../../theme';

const ellipsizeMode = Platform.select({
  ios: 'clip',
  android: 'tail'
});

export const Wrapper = styled.View`
  flex-direction: column;
  align-items: stretch;
  border-top-width: 1px;
  border-top-color: white;
`;

export const Touchable = styled(RectButton).attrs({
  underlayColor: 'white',
  activeOpacity: 0.5
})`
  flex-direction: column;
  align-items: stretch;
`;

export const Card = styled.View`
  flex-grow: 1;
  flex-shrink: 0;
  flex-direction: column;
  align-items: stretch;

  background-color: ${p =>
    p.isTalk ? theme.colors.card : theme.colors.inactive};

  border-radius: 4px;
  padding: 4px;
  height: ${p => p.height}px;
`;

export const Title = styled.Text.attrs({
  allowFontScaling: false,
  numberOfLines: p => (p.expand ? 2 : 1),
  ellipsizeMode
})`
  flex-grow: 0;
  flex-shrink: 1;
  color: white;
  font-size: 12px;
  line-height: 15px;
`;

export const Speaker = styled.Text.attrs({
  allowFontScaling: false,
  numberOfLines: 1,
  ellipsizeMode
})`
  flex-grow: 0;
  flex-shrink: 2;
  color: white;
  font-style: italic;
  font-size: 10px;
  line-height: 15px;
`;
