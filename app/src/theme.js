import { Platform, Dimensions, StyleSheet } from 'react-native';

const viewport = Dimensions.get('window');

const CELL_NUM = 7;
const SIDEBAR_WIDTH = viewport.width / 8;
const CONTAINER_WIDTH = viewport.width - SIDEBAR_WIDTH;
const CELL_WIDTH = CONTAINER_WIDTH / CELL_NUM;
const HOUR_HEIGHT = CELL_WIDTH * 2;
const PINCH_MAGNITUDE = 0.5;
const SIDEBAR_OFFSET = -8;

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

export const calendar = {
  CELL_NUM,
  SIDEBAR_WIDTH,
  CONTAINER_WIDTH,
  CELL_WIDTH,
  HOUR_HEIGHT,
  SIDEBAR_OFFSET,
  PINCH_MAGNITUDE
};

export const colors = {
  header: '#fbf9fb',
  text: '#191819',
  label: '#7c7284',
  stroke: '#d3cbd8',
  card: '#e53d40',
  inactive: '#a7abb7'
};

export const sizes = {
  hairline: StyleSheet.hairlineWidth,
  small: 6,
  mid: 12,
  large: 24,
  cellWidth: `${CELL_WIDTH}px`
};
