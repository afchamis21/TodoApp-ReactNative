import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 175,
    backgroundColor: '#0D0D0D',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 54,
    width: 327,
    marginTop: -26,
    marginBottom: 32,
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    marginRight: 4,
    height: 54,
    padding: 16,
    borderRadius: 6,
    color: '#F2F2F2',
  },
  button: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF',
  },
  emptyText: {
    color: '#808080',
  },
  emptyTextBold: {
    color: '#808080',
    fontWeight: 'bold',
  },
  summary: {
    width: 327,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalTodosText: {
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  doneTodosText: {
    color: '#8284FA',
    fontWeight: 'bold',
  },
  summaryDetail: {
    color: '#FFF',
    marginLeft: 8,
    backgroundColor: '#333333',
    width: 25,
    height: 19,
    borderRadius: 999,
    textAlign: 'center',
  },
})
