<template>
    <li>
        <input type="checkbox" v-model="todo.done"/>
        {{ todo.text }}
        <button @click="deleteTodo(todo.id)"> Hapus</button>
    </li>
</template>

<script setup>

defineProps({
    todo:Object
})
</script>