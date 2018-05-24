import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    position: 'relative',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },
  last: {
    marginBottom: 30,
  },
  info: {
    flex: 100,
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 12,
    marginTop: 8,
    color: '#666',
  },
  loyaltyMark: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 30,
    borderTopWidth: 30,
    borderRightColor: 'transparent',
    borderTopColor: 'rgba(0, 0, 128, 0.4)',
    transform: [{ rotate: '180deg' }],
  },
  loyal: {
    borderTopColor: 'rgba(110,157,58, 0.8)',
  },
  disloyal: {
    borderTopColor: 'rgba(165,41,41, 0.8)',
  },
  probation: {
    borderTopColor: 'rgba(247,149,33, 0.8)',
  },
});

export default styles;
