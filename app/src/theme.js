import { Dimensions, StyleSheet } from 'react-native';

const viewport = Dimensions.get('window');

const CELL_NUM = 7;
const SIDEBAR_WIDTH = viewport.width / 8;
const CONTAINER_WIDTH = viewport.width - SIDEBAR_WIDTH;
const CELL_WIDTH = CONTAINER_WIDTH / CELL_NUM;
const HOUR_HEIGHT = CELL_WIDTH * 2;
const PINCH_MAGNITUDE = 0.5;

export const calendar = {
  CELL_NUM,
  SIDEBAR_WIDTH,
  CONTAINER_WIDTH,
  CELL_WIDTH,
  HOUR_HEIGHT,
  PINCH_MAGNITUDE
};

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
  cellWidth: `${CELL_WIDTH}px`
};
