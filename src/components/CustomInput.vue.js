import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        value: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        required: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: 'Label'
        }
    }
});
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("block text-gray-700 font-bold mb-2") }, });
    (__VLS_ctx.label);
    // @ts-ignore
    [label,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ((__VLS_ctx.type)), required: ((__VLS_ctx.required)), placeholder: ((__VLS_ctx.placeholder)), ...{ class: ("w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500") }, });
    (__VLS_ctx.value);
    // @ts-ignore
    [type, required, placeholder, value,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['text-gray-700'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-2'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['border-gray-300'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['focus:outline-none'];
        __VLS_styleScopedClasses['focus:border-blue-500'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./CustomInput.vue')).default;
}
