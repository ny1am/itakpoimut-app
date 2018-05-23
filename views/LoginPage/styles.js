import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  logoWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 74, 128, 0.22)',
  },
  logo: {
    width: 160,
  },
  form: {
    flex: 3,
    alignItems: 'stretch',
    marginTop: 40,
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
