<template>
  <div>
    <!-- Header -->
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">POS Screen o</h2>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- PRODUCTS LIST -->
      <div class="lg:col-span-2">
        <h3 class="font-semibold mb-3 text-gray-700">Products</h3>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <button
            v-for="product in products"
            :key="product.id"
            @click="addToCart(product)"
            class="bg-white border rounded-xl p-4 text-left hover:bg-blue-50 transition"
          >
            <p class="font-medium">{{ product.name }}</p>
            <p class="text-sm text-gray-500">${{ product.price }}</p>
            <p class="text-xs text-gray-400">Stock: {{ product.stock }}</p>
          </button>
        </div>
      </div>

      <!-- CART -->
      <div class="bg-white rounded-xl shadow-sm border p-4">
        <h3 class="font-semibold mb-4 text-gray-700">Cart</h3>

        <div v-if="cart.length === 0" class="text-gray-400 text-sm">
          No items in cart
        </div>

        <div
          v-for="item in cart"
          :key="item.id"
          class="flex justify-between items-center mb-3"
        >
          <div>
            <p class="font-medium">{{ item.name }}</p>
            <p class="text-xs text-gray-500">${{ item.price }}</p>
          </div>

          <div class="flex items-center gap-2">
            <button
              @click="decreaseQty(item)"
              class="w-7 h-7 border rounded hover:bg-gray-100"
            >
              −
            </button>
            <span class="w-6 text-center">{{ item.qty }}</span>
            <button
              @click="increaseQty(item)"
              class="w-7 h-7 border rounded hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        <hr class="my-4" />

        <div class="flex justify-between font-semibold mb-4">
          <span>Total</span>
          <span>${{ total }}</span>
        </div>

        <button
          @click="checkout"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const products = ref([
  { id: 1, name: 'Coffee', price: 2.5, stock: 50 },
  { id: 2, name: 'Milk Tea', price: 3, stock: 30 },
  { id: 3, name: 'Green Tea', price: 2, stock: 20 }
])

const cart = ref([])

const addToCart = (product) => {
  const existing = cart.value.find(p => p.id === product.id)

  if (existing) {
    existing.qty++
  } else {
    cart.value.push({ ...product, qty: 1 })
  }
}

const increaseQty = (item) => {
  item.qty++
}

const decreaseQty = (item) => {
  if (item.qty > 1) item.qty--
  else cart.value = cart.value.filter(p => p.id !== item.id)
}

const total = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2)
)

const checkout = () => {
  if (cart.value.length === 0) return

  alert('Checkout successful!')
  cart.value = []
}
</script>
