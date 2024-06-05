<template>
  <div class="bg-gray-100 min-h-screen">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style scoped>
</style>
