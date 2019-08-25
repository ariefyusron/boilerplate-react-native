import { Dimensions } from 'react-native';

const height = percent => (percent / 100) * Dimensions.get('window').height;

export default height;
