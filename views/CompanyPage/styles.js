import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoWrapper: {
    alignItems: 'center',
    margin: 10,
  },
  loyaltyWrapper: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loyalty: {
    fontSize: 18,
    color: 'white',
  },
  loyal: {
    backgroundColor: 'rgba(110,157,58, 0.8)',
  },
  disloyal: {
    backgroundColor: 'rgba(165,41,41, 0.8)',
  },
  probation: {
    backgroundColor: 'rgba(247,149,33, 0.8)',
  },
  infoWrapper: {
    marginTop: 40,
    padding: 20,
    flex: 1,
    backgroundColor: 'rgba(0, 74, 128, 0.10)',
  },
  title: {
    fontSize: 20,
  },
  description: {
    fontSize: 14,
    marginTop: 8,
    color: '#666',
  },
});

export default styles;
