<template>
    <div>
        <h1>Aplikasi Todoku</h1>
        <input v-model="newTodo" placeholder="Tambah todo..."/>
        <button @click="addTodo"> Tambah</button>
        <!-- <ul>
            <li v-for="todo in todos" :key="todo.id">
                <input type="checkbox" v-model="todo.done"/>
                {{ todo.text }}
                <button @click="deleteTodo(todo.id)"> Hapus</button>
            </li>
        </ul> -->
        <ul>
  <TodoItem
    v-for="todo in todos"
    :key="todo.id"
    :todo="todo"
    @hapus="deleteTodo"
  />
</ul>

    </div>
</template>

<!-- <script setup> 

import TodoItem from '~/components/TodoItem.vue'
const todos = ref([]);
const newTodo = ref('');

const addTodo = () =>{
    if (!newTodo.value) return

    todos.value.push({
        id: Date.now(),
        text: newTodo.value,
        done: false
    })
    newTodo.value = ''
}
const deleteTodo = (id) =>{
    todos.value = todos.value.filter(todo => todo.id !== id);
}
</script> -->

<script setup>
import TodoItem from '~/components/TodoItem.vue'

const newTodo = ref('')

const { data: todos, refresh } = await useFetch('/api/todos')

const addTodo = async () => {
  if (!newTodo.value) return

  await $fetch('/api/todos', {
    method: 'POST',
    body: { text: newTodo.value }
  })

  newTodo.value = ''
  refresh()
}

// 🔥 WAJIB ADA
const deleteTodo = async (id) => {
  await $fetch(`/api/todos/${id}`, {
    method: 'DELETE'
  })

  refresh()
}
</script>
