import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 74, 128, 0.05)',
  },
  logo: {
    width: 120,
  },
  form: {
    flex: 2,
    alignItems: 'stretch',
    marginTop: 20,
  },
  inputWrapper: {
    margin: 40,
    marginBottom: 0,
    marginTop: 0,
  },
  buttonWrapper: {
    marginTop: 40,
    alignItems: 'center',
  },
});

export default styles;
