import { Dimensions, StyleSheet } from 'react-native';

const viewport = Dimensions.get('window');

export const colors = {
  header: '#fbf9fb',
  text: '#191819',
  label: '#7c7284',
  stroke: '#d3cbd8',
  card: '#f74c4f'
};

export const sizes = {
  hairline: StyleSheet.hairlineWidth,
  small: '6px',
  mid: '12px',
  large: '24px',
  cellWidth: `${viewport.width / 8}px`
};
