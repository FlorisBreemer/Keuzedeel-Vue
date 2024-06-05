<template>
  <section class="my-8">
    <h2 class="text-xl font-bold mb-4">Skills</h2>
    <ul class="grid grid-cols-2 gap-4">
      <li v-for="skill in skills" v-bind:key="skill" class="bg-white p-4 rounded shadow">
        {{ skill }}
      </li>
    </ul>
    <h2 class="text-xl font-bold mt-8 mb-4">Languages</h2>
    <ul class="grid grid-cols-2 gap-4">
      <li v-for="language in languages" v-bind:key="language" class="bg-white p-4 rounded shadow">
        {{ language }}
      </li>
    </ul>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

const skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Python', 'Laravel', 'Vue.js', 'Tailwind CSS', 'Inertia.js']

const languages = ['Dutch', 'English', 'German']

export default defineComponent({
  data() {
    return {
      skills,
      languages
    }
  }
})
</script>

<style scoped></style>
