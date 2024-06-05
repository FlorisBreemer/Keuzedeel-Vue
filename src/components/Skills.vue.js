import { defineComponent } from 'vue';
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
];
const personalskills = [
    'Teamwork',
    'Communication',
    'Problem-solving',
    'Time management',
    'Adaptability'
];
const languages = ['Dutch', 'English', 'German'];
let checkedprac = false;
let checkedpers = false;
let checkedlang = false;
export default defineComponent({
    data() {
        return {
            practicalskills,
            personalskills,
            languages,
            checkedprac,
            checkedpers,
            checkedlang
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl font-bold mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("practical"), ...{ class: ("mr-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), id: ("practical"), ...{ class: ("mr-2") }, });
    (__VLS_ctx.checkedprac);
    // @ts-ignore
    [checkedprac,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("personal"), ...{ class: ("mr-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), id: ("practical"), ...{ class: ("mr-2") }, });
    (__VLS_ctx.checkedpers);
    // @ts-ignore
    [checkedpers,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("languages"), ...{ class: ("mr-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("checkbox"), id: ("practical"), ...{ class: ("mr-2") }, });
    (__VLS_ctx.checkedlang);
    // @ts-ignore
    [checkedlang,];
    if (__VLS_ctx.checkedprac) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-xl font-bold mb-4") }, });
        // @ts-ignore
        [checkedprac,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("grid grid-cols-2 gap-4") }, });
        for (const [skill] of __VLS_getVForSourceType((__VLS_ctx.practicalskills))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((skill)), ...{ class: ("bg-white p-4 rounded shadow") }, });
            (skill);
            // @ts-ignore
            [practicalskills,];
        }
    }
    if (__VLS_ctx.checkedpers) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-xl font-bold mt-8 mb-4") }, });
        // @ts-ignore
        [checkedpers,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("grid grid-cols-2 gap-4") }, });
        for (const [skill] of __VLS_getVForSourceType((__VLS_ctx.personalskills))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((skill)), ...{ class: ("bg-white p-4 rounded shadow") }, });
            (skill);
            // @ts-ignore
            [personalskills,];
        }
    }
    if (__VLS_ctx.checkedlang) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-xl font-bold mt-8 mb-4") }, });
        // @ts-ignore
        [checkedlang,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("grid grid-cols-2 gap-4") }, });
        for (const [language] of __VLS_getVForSourceType((__VLS_ctx.languages))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((language)), ...{ class: ("bg-white p-4 rounded shadow") }, });
            (language);
            // @ts-ignore
            [languages,];
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['my-8'];
        __VLS_styleScopedClasses['text-2xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['mr-2'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-2'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['shadow'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mt-8'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-2'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['shadow'];
        __VLS_styleScopedClasses['text-xl'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['mt-8'];
        __VLS_styleScopedClasses['mb-4'];
        __VLS_styleScopedClasses['grid'];
        __VLS_styleScopedClasses['grid-cols-2'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['rounded'];
        __VLS_styleScopedClasses['shadow'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./Skills.vue')).default;
}
