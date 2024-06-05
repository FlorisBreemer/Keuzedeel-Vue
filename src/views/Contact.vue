<template>
  <section class="my-8">
    <h2 class="text-xl font-bold mb-4">Contact Me</h2>
    <form @submit.prevent="submitForm" class="grid grid-cols-1 gap-4">
      <Input v-model="name" type="text" required placeholder="Name" />
      <Input v-model="email" type="email" required placeholder="Email" />
      <Input v-model="message" type="text" required placeholder="Message" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Input from '@/components/Input.vue';

export default defineComponent({
  setup() {
    const name = ref('');
    const email = ref('');
    const message = ref('');

    const submitForm = () => {
      console.log('Form submitted', { name: name.value, email: email.value, message: message.value });
      // Reset form fields
      name.value = '';
      email.value = '';
      message.value = '';
    };

    return {
      name,
      email,
      message,
      submitForm,
      Input,
    };
  },
});
</script>

<style scoped>
</style>
