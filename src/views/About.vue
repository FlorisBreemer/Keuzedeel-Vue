<template>
    <About />
    <Skills />
</template>

<script>
import { defineComponent } from 'vue';
import About from '@/components/About.vue';
import Skills from '@/components/Skills.vue';

export default defineComponent({
  components: {
    About,
    Skills,
  },
});
</script>
