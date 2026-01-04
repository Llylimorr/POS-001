<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="card in stats"
        :key="card.label"
        class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold text-gray-400 uppercase tracking-wide">
              {{ card.label }}
            </p>
            <p class="text-3xl font-bold text-gray-900 mt-2">
              {{ card.value }}
            </p>
          </div>

          <div
            class="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
            :class="card.bg"
          >
            {{ card.icon }}
          </div>
        </div>

        <!-- Accent line -->
        <div
          class="h-1 rounded-full mt-4"
          :class="card.bg"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  {
    label: 'Total Products',
    value: '3',
    icon: '📦',
    bg: 'bg-blue-600'
  },
  {
    label: 'Today Sales',
    value: '$200',
    icon: '💰',
    bg: 'bg-green-600'
  },
  {
    label: 'Users',
    value: '2',
    icon: '👤',
    bg: 'bg-purple-600'
  }
//    ,{
//     label: 'Stock Value',
//     value: '$5,400', // Example value
//     icon: '📈',
//     bg: 'bg-orange-600' 
//   }
]
</script>