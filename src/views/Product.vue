<template>
  <div>
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-semibold text-gray-800">Products</h2>
      <button
        @click="openAdd"
        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        + Add Product
      </button>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-sm border overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 border-b">
          <tr class="text-left text-gray-500 uppercase tracking-wider">
            <th class="px-6 py-3">Name</th>
            <th class="px-6 py-3">Price</th>
            <th class="px-6 py-3">Stock</th>
            <th class="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(product, index) in products"
            :key="product.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="px-6 py-4 font-medium">{{ product.name }}</td>
            <td class="px-6 py-4">${{ product.price }}</td>
            <td class="px-6 py-4">{{ product.stock }}</td>
            <td class="px-6 py-4 text-right space-x-2">
              <button
                @click="editProduct(index)"
                class="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                @click="deleteProduct(index)"
                class="text-red-600 hover:underline"
              >
                Delete
              </button>
            </td>
          </tr>

          <tr v-if="products.length === 0">
            <td colspan="4" class="text-center py-6 text-gray-400">
              No products available
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <div class="bg-white w-full max-w-md rounded-xl p-6">
        <h3 class="text-lg font-semibold mb-4">
          {{ editingIndex === null ? 'Add Product' : 'Edit Product' }}
        </h3>

        <div class="space-y-4">
          <input
            v-model="form.name"
            type="text"
            placeholder="Product name"
            class="w-full border rounded-lg px-3 py-2"
          />
          <input
            v-model="form.price"
            type="number"
            placeholder="Price"
            class="w-full border rounded-lg px-3 py-2"
          />
          <input
            v-model="form.stock"
            type="number"
            placeholder="Stock"
            class="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div class="flex justify-end gap-3 mt-6">
          <button
            @click="closeModal"
            class="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            @click="saveProduct"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  { id: 1, name: 'Coffee', price: 2.5, stock: 50 },
  { id: 2, name: 'Milk Tea', price: 3, stock: 30 }
])

const showModal = ref(false)
const editingIndex = ref(null)

const form = ref({
  name: '',
  price: '',
  stock: ''
})

const openAdd = () => {
  editingIndex.value = null
  form.value = { name: '', price: '', stock: '' }
  showModal.value = true
}

const editProduct = (index) => {
  editingIndex.value = index
  form.value = { ...products.value[index] }
  showModal.value = true
}

const deleteProduct = (index) => {
  if (confirm('Delete this product?')) {
    products.value.splice(index, 1)
  }
}

const saveProduct = () => {
  if (!form.value.name) return


  if (editingIndex.value === null) {
    products.value.push({
      id: Date.now(),
      ...form.value
    })
  } else {
    products.value[editingIndex.value] = {
      ...products.value[editingIndex.value],
      ...form.value
    }
  }

  closeModal()
}

const closeModal = () => {
  showModal.value = false
}
</script>
