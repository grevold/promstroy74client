<script lang="ts"></script>
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold text-indigo-600">ShopName</h1>
        <nav>
          <ul class="flex space-x-6">
            <li>
              <a href="/" class="font-medium text-gray-700 hover:text-indigo-600">Главная</a>
            </li>
            <li>
              <a href="/catalog" class="font-medium text-gray-700 hover:text-indigo-600">Каталог</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <div class="p-4">
      <RouterView></RouterView>
    </div>
    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8 mt-12">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2026 ShopName. Все права защищены.</p>
      </div>
    </footer>
  </div>
</template>
