import { defineProps } from "vue";
import waveSection from "@/shared/components/wave-section.vue";
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    waveEnabled: {
        type: Boolean,
        default: false,
    },
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        waveEnabled: {
            type: Boolean,
            default: false,
        },
    },
});
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
    if (props.waveEnabled == true) {
        // @ts-ignore
        [WaveSection,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(waveSection, new waveSection({ color: ("#eaf7fe"), svgClass: ("wave-button-section"), }));
        const __VLS_1 = __VLS_0({ color: ("#eaf7fe"), svgClass: ("wave-button-section"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("button-panel-section p-6 bg-gray-100") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("button-panel grid lg:grid-cols-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("button-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fas fa-book-open fa-2x") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("button-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("button-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fas fa-comments fa-2x") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("button-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("button-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fas fa-calendar-alt fa-2x") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("button-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("button-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({ ...{ class: ("fas fa-user-cog fa-2x") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("button-text") }, });
    __VLS_styleScopedClasses['button-panel-section'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['bg-gray-100'];
    __VLS_styleScopedClasses['button-panel'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['lg:grid-cols-4'];
    __VLS_styleScopedClasses['button-card'];
    __VLS_styleScopedClasses['fas'];
    __VLS_styleScopedClasses['fa-book-open'];
    __VLS_styleScopedClasses['fa-2x'];
    __VLS_styleScopedClasses['button-text'];
    __VLS_styleScopedClasses['button-card'];
    __VLS_styleScopedClasses['fas'];
    __VLS_styleScopedClasses['fa-comments'];
    __VLS_styleScopedClasses['fa-2x'];
    __VLS_styleScopedClasses['button-text'];
    __VLS_styleScopedClasses['button-card'];
    __VLS_styleScopedClasses['fas'];
    __VLS_styleScopedClasses['fa-calendar-alt'];
    __VLS_styleScopedClasses['fa-2x'];
    __VLS_styleScopedClasses['button-text'];
    __VLS_styleScopedClasses['button-card'];
    __VLS_styleScopedClasses['fas'];
    __VLS_styleScopedClasses['fa-user-cog'];
    __VLS_styleScopedClasses['fa-2x'];
    __VLS_styleScopedClasses['button-text'];
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
        };
    },
    props: {
        waveEnabled: {
            type: Boolean,
            default: false,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        waveEnabled: {
            type: Boolean,
            default: false,
        },
    },
});
;
//# sourceMappingURL=button-section.vue.js.map