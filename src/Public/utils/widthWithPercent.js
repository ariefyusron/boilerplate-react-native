import { Dimensions } from 'react-native';

const width = percent => (percent / 100) * Dimensions.get('window').width;

export default width;
