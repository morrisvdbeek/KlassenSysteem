import { ref } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Refs voor het opslaan van form gegevens
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
// Functie die bij het indienen van het formulier wordt aangeroepen
const handleRegister = () => {
    console.log('Registreren met:', firstName.value, lastName.value, email.value, password.value);
    // Voeg hier de registratie logica toe, zoals een API-aanroep voor registratie
};
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
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['user-label'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['user-label'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['btn-register'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['signin'];
    __VLS_styleScopedClasses['signin'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("message") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleRegister) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("firstName"), value: ((__VLS_ctx.firstName)), ...{ class: ("input") }, required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("firstName"), ...{ class: ("user-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("lastName"), value: ((__VLS_ctx.lastName)), ...{ class: ("input") }, required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("lastName"), ...{ class: ("user-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), id: ("email"), ...{ class: ("input") }, required: (true), });
    (__VLS_ctx.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("email"), ...{ class: ("user-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), id: ("password"), ...{ class: ("input") }, required: (true), });
    (__VLS_ctx.password);
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("password"), ...{ class: ("user-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("btn-register") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("signin") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/login"), }));
    const __VLS_2 = __VLS_1({ to: ("/login"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['message'];
    __VLS_styleScopedClasses['input-group'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['user-label'];
    __VLS_styleScopedClasses['input-group'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['user-label'];
    __VLS_styleScopedClasses['input-group'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['user-label'];
    __VLS_styleScopedClasses['input-group'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['user-label'];
    __VLS_styleScopedClasses['btn-register'];
    __VLS_styleScopedClasses['signin'];
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
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            handleRegister: handleRegister,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=RegistrationPage.vue.js.map