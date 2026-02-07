<template>
    <div>
        <h1>Aplikasi Todoku2</h1>
        <input v-model="newTodo" placeholder="Tambah todo..."/>
        <button @click="addTodo"> Tambah</button>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <input type="checkbox" v-model="todo.done"/>
                {{ todo.text }}
                <button @click="deleteTodo(todo.id)"> Hapus</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
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
</script>