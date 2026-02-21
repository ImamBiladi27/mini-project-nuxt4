<template>
    <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div class="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
                <h1 class="text-2xl font-bold mb-4">Payment</h1>
                <p class="text-lg mb-4">
                    Total: 
                    <span class="font-bold text-gray-900">
                        Rp {{ amount.toLocaleString('id-ID') }}
                    </span>
                 </p>
                <button @click="pay" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">Bayar</button>
            </div>
            <div class="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
                <h1 class="text-2xl font-bold mb-4">Payment Kedua</h1>
                <p class="text-lg mb-4">
                    Total: 
                    <span class="font-bold text-gray-900">
                        Rp {{ amount2.toLocaleString('id-ID') }}
                    </span>
                 </p>
                <button @click="pay2" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">Bayar</button>
            </div>
    
        </div>

    </div>
</template>

<script setup>
const props = defineProps({
  amount: {
    type: Number,
    default: 0
  },
  amount2: {
    type: Number,
    default: 0
  }
})

const pay = () => {
  alert(`Membayar Rp ${props.amount.toLocaleString('id-ID')}`)
}

const pay2 = () => {
  alert(`Membayar Rp ${props.amount2.toLocaleString('id-ID')}`)
}
</script>

<style scoped>
/* .payment {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
} */
</style>