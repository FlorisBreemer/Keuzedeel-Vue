<template>
  <section class="my-8">
    <h2 class="text-xl font-bold mb-4">Contact Me</h2>
    <form @submit.prevent="submitForm" class="flex flex-col w-8/12">
      <CustomInput
        label="Name"
        v-model="name"
        type="text"
        required
        placeholder="Name"
        class="m-2"
      />
      <CustomInput label="Email" v-model="email" type="email" required placeholder="Email" class="m-2" />
      <CustomInput label="Message" v-model="message" type="text"  placeholder="Message" class="m-2" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded m-2">Submit</button>
    </form>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue'
import CustomInput from '@/components/CustomInput.vue'
export default defineComponent({
  components: {
    CustomInput
  },
  setup() {
    const name = ref('')
    const email = ref('')
    const message = ref('')

    const submitForm = () => {
      console.log('Form submitted', {
        name: name.value,
        email: email.value,
        message: message.value
      })
      // Reset form fields
      name.value = ''
      email.value = ''
      message.value = ''
    }

    return {
      name,
      email,
      message,
      submitForm,
      CustomInput
    }
  }
})
</script>

<style scoped></style>
