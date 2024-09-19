import navBar from "@/shared/components/nav-balk.vue";
import Footer from "@/shared/components/footer.vue";
import "../css/welcome-section.css";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    [navBar,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(navBar, new navBar({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("welcome-section-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("welcome-section relative overflow-hidden bg-gray-900 py-24 sm:py-32") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-auto max-w-7xl px-6 lg:px-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-auto max-w-2xl lg:mx-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("text-4xl font-bold tracking-tight text-white sm:text-6xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("mt-6 text-lg leading-8 text-gray-300") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-lg text-gray-300") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("hidden xl:block rotate-180") }, viewBox: ("0 0 3840 96"), preserveAspectRatio: ("none"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.g, __VLS_intrinsicElements.g)({ id: ("Page-1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.g, __VLS_intrinsicElements.g)({ id: ("Artboard-Copy-3"), transform: ("translate(0.000000, -2328.000000)"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.g, __VLS_intrinsicElements.g)({ id: ("style-element/wave/wave-D"), transform: ("translate(0.000000, 2328.000000)"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({ d: ("M3840,96 L0,96 L0,56.8695652 C226.666667,18.9565217 546.666667,0 960,0 C1156.94118,0 1356.90934,9.68636678 1558.94298,22.9054085 L1584.20788,24.5757429 L1609.49387,26.2802052 L1634.80054,28.0161244 L1660.12748,29.7808296 L1685.47426,31.5716501 L1710.84047,33.3859149 L1736.22569,35.2209532 L1761.62951,37.074094 L1812.49125,40.824 L1850.96631,43.685184 L1960.36264,51.8498416 L1999.5204,54.7540967 L2025.64431,56.6784755 L2051.78267,58.5900992 L2077.93505,60.4861199 L2104.101,62.36369 L2136.82685,64.6803682 L2136.82685,64.6803682 L2169.57233,66.958206 L2195.78228,68.7487736 L2221.03243,70.4435074 C2439.91236,84.9982223 2659.95618,96 2880,96 C2897.33333,96 2914.48533,95.9744 2931.456,95.9232 L2956.776,95.8272 C3351.32533,94.0224 3645.73333,78.08 3840,48 L3840,96 Z"), id: ("Wave"), fill: ("#fd8b1d"), });
    // @ts-ignore
    [Footer,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(Footer, new Footer({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
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
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['text-gray-300'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['max-w-2xl'];
    __VLS_styleScopedClasses['lg:mx-0'];
    __VLS_styleScopedClasses['lg:max-w-none'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['xl:block'];
    __VLS_styleScopedClasses['rotate-180'];
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
            navBar: navBar,
            Footer: Footer,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=App.vue.js.map