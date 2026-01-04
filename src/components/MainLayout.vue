<template>
  <div class="min-h-screen flex bg-gray-100 font-sans">
    <!-- SIDEBAR -->
    <aside class="w-64 bg-white border-r flex flex-col">
      <div class="h-16 flex items-center px-6 border-b">
        <span class="text-xl font-bold text-blue-600">POS System</span>
      </div>

      <nav class="flex-1 px-4 py-6 space-y-2">
        <router-link
          to="/"
          class="flex items-center gap-3 px-4 py-2 rounded-lg font-medium
                 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
          exact-active-class="bg-blue-600 text-white"
        >
          <span>📊</span>
          <span>Dashboard</span>
        </router-link>

        <router-link
          to="/products"
          class="flex items-center gap-3 px-4 py-2 rounded-lg font-medium
                 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
          exact-active-class="bg-blue-600 text-white"
        >
          <span>📦</span>
          <span>Products</span>
        </router-link>

        <router-link
          to="/pos"
          class="flex items-center gap-3 px-4 py-2 rounded-lg font-medium
                 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
          exact-active-class="bg-blue-600 text-white"
        >
          <span>💳</span>
          <span>POS</span>
        </router-link>
      </nav>

      <div class="p-4 border-t text-sm text-gray-500">
        © 2026 POS System
      </div>
    </aside>

    <!-- MAIN CONTENT -->
    <div class="flex-1 flex flex-col">
      <!-- HEADER -->
      <header class="h-16 bg-white border-b px-8 flex items-center justify-between">
        <h2 class="text-lg font-semibold text-gray-800">
          <slot name="title">Dashboard</slot>
        </h2>

        <div class="flex items-center space-x-3">
          <div class="text-right text-sm">
            <p class="font-medium text-gray-700">Admin</p>
            <p class="text-gray-400">Administrator</p>
          </div>
          <div class="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            A
          </div>
        </div>
      </header>

      <!-- PAGE CONTENT -->
      <main class="flex-1 p-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
}
</script>
