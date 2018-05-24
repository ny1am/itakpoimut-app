import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoWrapper: {
    height: 160,
    position: 'relative',
  },
  logoOffset: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 90,
    zIndex: 4,
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'white',
  },
  logoImg: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  loyalLogo: {
    borderColor: 'rgba(110,157,58, 0.8)',
    borderWidth: 1,
  },
  disloyalLogo: {
    borderColor: 'rgba(165,41,41, 0.8)',
    borderWidth: 1,
  },
  probationLogo: {
    borderColor: 'rgba(247,149,33, 0.8)',
    borderWidth: 1,
  },
  loyaltyWrapper: {
    color: 'white',
    fontSize: 20,
    margin: 35,
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
    padding: 20,
    paddingTop: 0,
    marginTop: 80,
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
  },
  description: {
    fontSize: 14,
    marginTop: 8,
    color: '#666',
  },
  listSection: {
    marginTop: 30,
  },
  listTitle: {
    fontSize: 17,
    marginBottom: 8,
    color: '#444',
  },
  listItem: {
    marginBottom: 4,
    fontSize: 14,
    color: '#666',
  },
  violationTitle: {
    color: 'rgba(165,41,41, 1)',
  },
  violationItem: {
    color: 'rgba(165,41,41, 0.8)',
  },
});

export default styles;
