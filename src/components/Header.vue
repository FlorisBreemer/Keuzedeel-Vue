<template>
  <header class="bg-blue-500 text-white p-4 ">
    <div class="flex items-center justify-between ">
      <div class="flex items-center">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQFV0B25dYDfQQ/profile-displayphoto-shrink_200_200/0/1696495228919?e=1723075200&amp;v=beta&amp;t=y7RQMRPatUZ_nG3qAksk02m0XiiRUGOy5DgGO68jo40"
          alt="Floris Breemer"
          class="w-16 h-16 rounded-full profimg"
        />
        <div class="ml-4">
          <h1 class="text-2xl font-bold">Floris Breemer</h1>
          <p class="italic">"If you can't do great things, do small things in a great way"</p>
        </div>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/" class="hover:underline">Home</router-link></li>
          <li><router-link to="/skills" class="hover:underline">Skills</router-link></li>
          <li><router-link to="/contact" class="hover:underline">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.profimg:hover {
  animation: spin 5s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
