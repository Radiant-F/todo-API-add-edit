import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#181f3d',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    width: 300,
  },
  loginTitle: {
    color: '#f0f1f2',
    fontSize: 18,
  },
  groupContainer: {
    marginVertical: 24,
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    color: '#f0f1f2',
    fontSize: 10,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#232c51',
    color: '#f0f1f2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2b95c3',
    padding: 8,
  },
  button: {
    borderRadius: 10,
    height: 48,
    backgroundColor: '#e0265d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#f0f1f2',
    fontWeight: '600',
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  createAccountText: {
    color: '#f0f1f2',
  },
  createAccountLink: {
    color: '#f0f1f2',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backIcon: {
    margin: 16,
  },
  companyLogo: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  socialIcon: {
    width: 40,
    height: 40,
    margin: 8,
  },
  title: {
    color: '#f0f1f2',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  appBar: {
    color: '#f0f1f2',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    tintColor: '#f0f1f2',
    margin: 8,
  },
  floatActionBar: {
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  contentWrapper: {
    marginLeft: 16,
  },
  text: {
    color: '#f0f1f2',
  },
  categoryContainer: {
    paddingVertical: 8,
  },
  category: {
    backgroundColor: '#080f2d',
    justifyContent: 'space-evenly',
    height: 100,
    padding: 16,
    width: 180,
    borderRadius: 16,
    marginRight: 8,
  },
  categoryTitle: {
    color: '#f0f1f2',
    fontSize: 18,
    fontWeight: 'bold',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#080f2d',
    borderRadius: 16,
    padding: 8,
    marginVertical: 8,
  },
  todoIcon: {
    width: 20,
    height: 20,
    tintColor: '#f0f1f2',
    margin: 8,
  },
  todoList: {
    marginRight: 16,
  },
  modal: {
    width: 350,
    padding: 16,
    alignSelf: 'center',
    marginTop: 32,
    backgroundColor: '#181f3d',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#080f2d',
  },
  closeModal: {
    backgroundColor: '#e0265d',
    height: 24,
    width: 24,
    borderRadius: 12,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  marginSmallV: {
    marginVertical: 4,
  },
  imagePlacholder: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  smallIcon: {
    width: 20,
    height: 20,
    margin: 4,
    tintColor: '#aaa',
  },
  drawerList: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  drawerListIcon: {
    tintColor: '#aaa',
    width: 24,
    height: 24,
    marginRight: 16,
  },
  imgBanner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: -1,
    width: 100,
    height: 100,
  },
});
