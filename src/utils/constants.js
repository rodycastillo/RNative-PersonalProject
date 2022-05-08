import {Dimensions} from 'react-native';

export const COLORS = {
  PRIMARY: '#216D3F',
  SECONDARY: '#0C4724',
  BG_GRAY: '#8F9290',
  TEXT_COLOR: '#3A413D',
  TEXT_EMERGENCY: '#E30027',
};

export const FONTS = {
  ProximaNovaRegular: 'ProximaNovaRegular',
  ProximaNovaThin: 'ProximaNovaThin',
  ProximaNovaExtrabold: 'ProximaNovaExtrabold',
  ProximaNovaBold: 'ProximaNovaBold',
  ProximaNovaBlack: 'ProximaNovaBlack',
  ProximaNovaAltThin: 'ProximaNovaAltThin',
  ProximaNovaAltLight: 'ProximaNovaAltLight',
  ProximaNovaAltBold: 'ProximaNovaAltBold',
};

export const SCREEN = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
