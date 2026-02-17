<template>
  <li
    class="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition"
  >
    <!-- kiri -->
    <div class="flex items-center gap-3">
      <input
        type="checkbox"
        v-model="todo.done"
        class="w-5 h-5 accent-blue-500 cursor-pointer"
      />

      <span
        :class="[
          'flex-1 text-gray-800 capitalize transition',
          todo.done ? 'line-through text-gray-400' : ''
        ]"
      >
        {{ todo.text }}
      </span>
    </div>

    <!-- kanan -->
    <div class="flex items-center gap-2">
      <button
        @click="$emit('edit', todo.id)"
        class="px-3 py-1.5 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Edit
      </button>

      <button
        @click="$emit('hapus', todo.id)"
        class="px-3 py-1.5 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Hapus
      </button>
    </div>
  </li>
</template>

<script setup>
defineProps({
  todo: Object
})

defineEmits(['hapus', 'edit'])
</script>
