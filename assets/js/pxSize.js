import {Dimensions} from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 750;

function pxSize(uiElementPx) {
  return uiElementPx *  deviceWidthDp / uiWidthPx;
}

export default pxSize;