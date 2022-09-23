import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Trash } from 'phosphor-react-native'

interface TodoProps {
  isDone: boolean
  content: string
  onToggleIsDone: () => void
  onRemove: () => void
}

export function Todo({ isDone, content, onToggleIsDone, onRemove }: TodoProps) {
  return (
    <View style={styles.container}>
      {isDone ? (
        <TouchableOpacity
          style={styles.openTodoButton}
          onPress={onToggleIsDone}
        />
      ) : (
        <TouchableOpacity
          style={styles.closeTodoButton}
          onPress={onToggleIsDone}
        />
      )}
      <Text style={isDone ? styles.contentTextDone : styles.contentText}>
        {content}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
