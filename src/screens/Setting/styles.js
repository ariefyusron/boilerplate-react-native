import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  content: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 50,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2
  },
  button: {
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center'
  },
  border: {
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 0.5
  },
  text: {
    fontSize: 16
  },
  wrapIcon: {
    position: 'absolute',
    right: 10,
    top: 20
  }
});

export default styles;
