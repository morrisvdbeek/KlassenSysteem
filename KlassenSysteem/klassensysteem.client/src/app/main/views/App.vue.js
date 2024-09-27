import navBar from "@/shared/components/nav-balk.vue";
import FooterSection from "@/shared/components/footer-section.vue";
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("app"), });
    // @ts-ignore
    [navBar,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(navBar, new navBar({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    const __VLS_5 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
    // @ts-ignore
    [FooterSection,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(FooterSection, new FooterSection({}));
    const __VLS_12 = __VLS_11({}, ...__VLS_functionalComponentArgsRest(__VLS_11));
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
            FooterSection: FooterSection,
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