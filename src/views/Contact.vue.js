import { defineComponent, ref } from 'vue';
import CustomInput from '@/components/CustomInput.vue';
export default defineComponent({
    components: {
        CustomInput
    },
    setup() {
        const name = ref('');
        const email = ref('');
        const message = ref('');
        const submitForm = () => {
            console.log('Form submitted', {
                name: name.value,
                email: email.value,
                message: message.value
            });
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
            CustomInput
        };
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("my-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-xl font-bold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submitForm) }, ...{ class: ("flex flex-col w-8/12") }, });
    const __VLS_0 = {}.CustomInput;
    ({}.CustomInput);
    __VLS_components.CustomInput;
    // @ts-ignore
    [CustomInput,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ label: ("Name"), modelValue: ((__VLS_ctx.name)), type: ("text"), required: (true), placeholder: ("Name"), ...{ class: ("m-2") }, }));
    const __VLS_2 = __VLS_1({ label: ("Name"), modelValue: ((__VLS_ctx.name)), type: ("text"), required: (true), placeholder: ("Name"), ...{ class: ("m-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ label: ("Name"), modelValue: ((__VLS_ctx.name)), type: ("text"), required: (true), placeholder: ("Name"), ...{ class: ("m-2") }, }));
    // @ts-ignore
    [submitForm, name,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_6 = {}.CustomInput;
    ({}.CustomInput);
    __VLS_components.CustomInput;
    // @ts-ignore
    [CustomInput,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ label: ("Email"), modelValue: ((__VLS_ctx.email)), type: ("email"), required: (true), placeholder: ("Email"), ...{ class: ("m-2") }, }));
    const __VLS_8 = __VLS_7({ label: ("Email"), modelValue: ((__VLS_ctx.email)), type: ("email"), required: (true), placeholder: ("Email"), ...{ class: ("m-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ label: ("Email"), modelValue: ((__VLS_ctx.email)), type: ("email"), required: (true), placeholder: ("Email"), ...{ class: ("m-2") }, }));
    // @ts-ignore
    [email,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_12 = {}.CustomInput;
    ({}.CustomInput);
    __VLS_components.CustomInput;
    // @ts-ignore
    [CustomInput,];
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ("Message"), modelValue: ((__VLS_ctx.message)), type: ("text"), placeholder: ("Message"), ...{ class: ("m-2") }, }));
    const __VLS_14 = __VLS_13({ label: ("Message"), modelValue: ((__VLS_ctx.message)), type: ("text"), placeholder: ("Message"), ...{ class: ("m-2") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ label: ("Message"), modelValue: ((__VLS_ctx.message)), type: ("text"), placeholder: ("Message"), ...{ class: ("m-2") }, }));
    // @ts-ignore
    [message,];
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("bg-blue-500 text-white px-4 py-2 rounded m-2") }, });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['my-8'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['w-8/12'];
        __VLS_styleScopedClasses['m-2'];
        __VLS_styleScopedClasses['m-2'];
        __VLS_styleScopedClasses['m-2'];
        __VLS_styleScopedClasses['bg-blue-500'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['px-4'];
        __VLS_styleScopedClasses['py-2'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['m-2'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        CustomInput
    };
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./Contact.vue')).default;
}
