<template>
  <li class="flex items-center gap-3">
    <input
  type="checkbox"
  v-model="todo.done"
  class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
/>


    <span class="flex-1 capitalize">
      {{ todo.text }}
    </span>

    <!-- tombol -->
    <button
      @click="$emit('hapus', todo.id)"
      class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Hapus
    </button>

    <button
      @click="$emit('edit', todo.id)"
      class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Edit
    </button>
  </li>
</template>


<script setup>
defineProps({
  todo: Object
})

defineEmits(['hapus', 'edit'])
</script>
