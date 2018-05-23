import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  banner: {
    position: 'relative',
  },
  img: {
    height: 300,
  },
  centered: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paragraph: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  section: {
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#666',
  },
  sectionBody: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 22,
    color: '#666',
  },
});

export default styles;
