import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'

import logoImg from '../../assets/logo.png'
import { Todo } from '../../components/Todo'
import React, { useState } from 'react'

interface TodoType {
  id: string
  isDone: boolean
  content: string
}

export function Home() {
  const [todoList, setTodoList] = useState<TodoType[]>([])
  const [todoInput, setTodoInput] = useState('')

  function generateNewId() {
    const newId = new Date().toString()
    return newId
  }

  function handleAddTodo() {
    setTodoList((state) => {
      const newTodo = {
        id: generateNewId(),
        isDone: false,
        content: todoInput,
      }
      return [...state, newTodo]
    })
    setTodoInput('')
  }

  function handleToggleTodoDone(targetTodo: TodoType) {
    setTodoList((state) => {
      const newTodoList = state.map((todo) => {
        if (todo.id === targetTodo.id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          }
        }
        return todo
      })
      return newTodoList
    })
  }

  function handleRemoveTodo(targetTodo: TodoType) {
    setTodoList((state) => {
      return state.filter((todo) => todo.id !== targetTodo.id)
    })
  }

  const doneTodosAmount = todoList.reduce((acc, todo) => {
    if (todo.isDone) {
      return acc + 1
    }
    return acc
  }, 0)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={todoInput}
          onChangeText={(text) => setTodoInput(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.summary}>
        <View style={styles.summaryText}>
          <Text style={styles.totalTodosText}>Criadas</Text>
          <Text style={styles.summaryDetail}>{todoList.length}</Text>
        </View>
        <View style={styles.summaryText}>
          <Text style={styles.doneTodosText}>Concluídas</Text>
          <Text style={styles.summaryDetail}>{doneTodosAmount}</Text>
        </View>
      </View>
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Todo
            content={item.content}
            isDone={item.isDone}
            key={item.id}
            onToggleIsDone={() => {
              handleToggleTodoDone(item)
            }}
            onRemove={() => {
              handleRemoveTodo(item)
            }}
          />
        )}
        ListEmptyComponent={() => (
          <View>
            <Text style={styles.emptyTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  )
}
