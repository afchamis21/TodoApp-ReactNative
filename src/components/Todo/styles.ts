import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,

    borderRadius: 8,
    width: 327,
    marginBottom: 8,
  },
  closeTodoButton: {
    width: 24,
    height: 24,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#1E6F9F',
  },
  openTodoButton: {
    width: 24,
    height: 24,
    borderRadius: 999,
    backgroundColor: '#8284FA',
  },
  contentText: {
    color: '#F2F2F2',
    maxWidth: 235,
  },
  contentTextDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
    maxWidth: 235,
  },
})
