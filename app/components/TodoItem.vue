<template>
  <li>
    <input type="checkbox" v-model="todo.done" />
    {{ todo.text }}

    <!-- kirim event ke parent -->
    <button @click="$emit('hapus', todo.id)">
      Hapus
    </button>
  </li>
</template>

<script setup>
defineProps({
  todo: Object
})

defineEmits(['hapus'])
</script>
