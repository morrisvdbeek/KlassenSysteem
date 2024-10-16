import { ref, onMounted } from "vue";
import waveSection from "@/shared/components/wave-section.vue";
import buttonSection from "@/shared/components/button-section.vue";
import "../app/main/css/welcome-section.css";
import "../app/main/css/button-section.css";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const fullName = ref("");
const getFullNameFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
        try {
            const decodedToken = JSON.parse(atob(token.split(".")[1]));
            const subArray = decodedToken.sub;
            if (Array.isArray(subArray) && subArray.length >= 3) {
                const firstName = subArray[1]; // Voornaam
                const lastName = subArray[2]; // Achternaam
                fullName.value = `${firstName} ${lastName}`.trim();
            }
        }
        catch (error) {
            console.error("Fout bij het decoderen van de token:", error);
        }
    }
};
onMounted(() => {
    getFullNameFromToken();
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['text-content'];
    __VLS_styleScopedClasses['service-section'];
    __VLS_styleScopedClasses['service-section'];
    __VLS_styleScopedClasses['service-section'];
    __VLS_styleScopedClasses['text-content'];
    __VLS_styleScopedClasses['text-content'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-page") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("welcome-section-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("welcome-section relative overflow-hidden bg-gray-900 py-24 sm:py-32") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-auto max-w-7xl px-6 lg:px-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-auto max-w-2xl lg:mx-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-4xl font-bold tracking-tight text-white sm:text-6xl") }, });
    if (__VLS_ctx.fullName) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-6 text-lg leading-8 text-gray-300") }, });
        (__VLS_ctx.fullName);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none") }, });
    // @ts-ignore
    [WaveSection,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(waveSection, new waveSection({ svgClass: ("hidden xl:block rotate-180"), }));
    const __VLS_1 = __VLS_0({ svgClass: ("hidden xl:block rotate-180"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("about-section-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("about-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("service-section") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("section-teachers") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("section-students") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    // @ts-ignore
    [ButtonSection,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(buttonSection, new buttonSection({ waveEnabled: ((true)), }));
    const __VLS_6 = __VLS_5({ waveEnabled: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_styleScopedClasses['home-page'];
    __VLS_styleScopedClasses['welcome-section-container'];
    __VLS_styleScopedClasses['welcome-section'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['bg-gray-900'];
    __VLS_styleScopedClasses['py-24'];
    __VLS_styleScopedClasses['sm:py-32'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['max-w-7xl'];
    __VLS_styleScopedClasses['px-6'];
    __VLS_styleScopedClasses['lg:px-8'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['max-w-2xl'];
    __VLS_styleScopedClasses['lg:mx-0'];
    __VLS_styleScopedClasses['text-4xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['tracking-tight'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['sm:text-6xl'];
    __VLS_styleScopedClasses['mt-6'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['leading-8'];
    __VLS_styleScopedClasses['text-gray-300'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['max-w-2xl'];
    __VLS_styleScopedClasses['lg:mx-0'];
    __VLS_styleScopedClasses['lg:max-w-none'];
    __VLS_styleScopedClasses['about-section-container'];
    __VLS_styleScopedClasses['about-section'];
    __VLS_styleScopedClasses['text-content'];
    __VLS_styleScopedClasses['service-section'];
    __VLS_styleScopedClasses['section-teachers'];
    __VLS_styleScopedClasses['section-students'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            waveSection: waveSection,
            buttonSection: buttonSection,
            fullName: fullName,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=HomePage.vue.js.map