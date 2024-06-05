<template>
  <section class="my-8">
    <h1 class="text-2xl font-bold mb-4">Skills</h1>
    <p class="mb-4">
      Select the skills you want to display on this page.
    </p>
    <label for="practical" class="mr-2">Practical Skills</label>
    <input type="checkbox" id="practical" v-model="checkedprac" class="mr-2" />
    <label for="personal" class="mr-2">Personal Skills</label>
    <input type="checkbox" id="practical" v-model="checkedpers" class="mr-2" />
    <label for="languages" class="mr-2">Languages</label>
    <input type="checkbox" id="practical" v-model="checkedlang" class="mr-2" />

    <div  v-if="checkedprac"> 
      <h2 class="text-xl font-bold mb-4">Practical Skills</h2>
      <ul class="grid grid-cols-2 gap-4">
        <li v-for="skill in practicalskills" v-bind:key="skill" class="bg-white p-4 rounded shadow">
          {{ skill }}
        </li>
      </ul>
    </div>
    <div v-if="checkedpers">
      <h2 class="text-xl font-bold mt-8 mb-4">Personal Skills</h2>
      <ul class="grid grid-cols-2 gap-4">
        <li v-for="skill in personalskills" v-bind:key="skill" class="bg-white p-4 rounded shadow">
          {{ skill }}
        </li>
      </ul>
    </div>
    <div v-if="checkedlang">
      <h2 class="text-xl font-bold mt-8 mb-4">Languages</h2>
      <ul class="grid grid-cols-2 gap-4">
        <li v-for="language in languages" v-bind:key="language" class="bg-white p-4 rounded shadow">
          {{ language }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

const practicalskills = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'MySQL',
  'Python',
  'Laravel',
  'Vue.js',
  'Tailwind CSS',
  'Inertia.js'
]
const personalskills = [
  'Teamwork',
  'Communication',
  'Problem-solving',
  'Time management',
  'Adaptability'
]
const languages = ['Dutch', 'English', 'German']
let checkedprac = false
let checkedpers = false
let checkedlang = false

export default defineComponent({
  data() {
    return {
      practicalskills,
      personalskills,
      languages,
      checkedprac,
      checkedpers,
      checkedlang
    }
  }
})
</script>

<style scoped></style>
