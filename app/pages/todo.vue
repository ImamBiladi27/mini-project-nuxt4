<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">
      Aplikasi Todoku
    </h1>

    <div class="flex gap-2 mb-4">
      <input
        v-model="newTodo"
        placeholder="Tambah todo..."
        class="border border-gray-300 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        @click="addTodo"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {{ editingId ? 'Save' : 'Tambah'}}
      </button>
    </div>

    <ul class="space-y-2">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @hapus="deleteTodo"
        @edit="editTodo"
      />
    </ul>
  </div>
</template>


<script setup>
import TodoItem from '~/components/TodoItem.vue'

const newTodo = ref('')
const editingId = ref(null)

const { data: todos, refresh } = await useFetch('/api/todos')



const addTodo = async () => {
  if (!newTodo.value) return

  if (editingId.value) {
    // mode edit
    await $fetch(`/api/todos/${editingId.value}`, {
      method: 'PUT',
      body: { text: newTodo.value }
    })
  } else {
    // mode tambah
    await $fetch(`/api/todos`, {
      method: 'POST',
      body: { text: newTodo.value }
    })
  }

  newTodo.value = ''
  editingId.value = null
  refresh()
}


// 🔥 WAJIB ADA
const deleteTodo = async (id) => {
  await $fetch(`/api/todos/${id}`, {
    method: 'DELETE'
  })

  refresh()
}
// const editTodo = async (id) => {
//   const todo = todos.value.find(t=>t.id === id)
//   if(!todo) return

//   const textBaru = prompt("Edit todo:",todo.text)
//   if(textBaru === null) return

//   await $fetch(`/api/todos/${id}`,{
//     method: 'PUT',
//     body: { text: textBaru }
//   })

//   refresh()
// }
const editTodo = (id) => {
  const todo = todos.value.find(t => t.id === id)
  if (!todo) return

  newTodo.value = todo.text   // isi ke input atas
  editingId.value = id        // tandai sedang edit
}

</script>
