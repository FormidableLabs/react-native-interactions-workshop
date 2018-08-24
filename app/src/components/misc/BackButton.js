import React from 'react';
import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

const Button = styled(BorderlessButton)`
  position: absolute;
  left: 20px;
  top: 32px;
`;

const Arrow = styled.Image.attrs({
  source: require('../../../assets/back.png')
})`
  width: 40px;
  height: 40px;
  padding: 10px;
  opacity: 0.8;
`;

const BackButton = ({ onPress }) => (
  <Button onPress={onPress}>
    <Arrow />
  </Button>
);

export default BackButton;
