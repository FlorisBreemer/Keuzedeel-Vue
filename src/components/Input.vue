<template>
    <label class="block text-gray-700 font-bold mb-2">
        <slot></slot>
    </label>
    <input
        v-model="value"
        :type="type"
        :required="required"
        :placeholder="placeholder"
        class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    >
    
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        value: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
        },
        required: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: '',
        },
    },
});
</script>