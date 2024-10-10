import { ref } from 'vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();
const handleRegister = async () => {
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return;
    }
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                FirstName: firstName.value,
                LastName: lastName.value,
                Email: email.value,
                Password: password.value
            })
        });
        if (response.ok) {
            alert('Registration successful!');
            router.push('/login');
        }
        else {
            const errorMessage = await response.text();
            console.error('Registration failed:', errorMessage);
            alert('Registration failed. ' + errorMessage);
        }
    }
    catch (error) {
        console.error('Error during registration:', error);
        alert('An error occurred. Please try again later.');
    }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleRegister) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.firstName)), ...{ class: ("input") }, required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("firstName"), ...{ class: ("user-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), value: ((__VLS_ctx.lastName)), ...{ class: ("input") }, required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("lastName"), ...{ class: ("user-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), ...{ class: ("input") }, required: (true), });
    (__VLS_ctx.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("email"), ...{ class: ("user-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), ...{ class: ("input") }, required: (true), });
    (__VLS_ctx.password);
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("password"), ...{ class: ("user-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), ...{ class: ("input") }, required: (true), });
    (__VLS_ctx.confirmPassword);
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("confirmPassword"), ...{ class: ("user-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("btn-login") }, });
    __VLS_styleScopedClasses['title'];
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
    __VLS_styleScopedClasses['input-group'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['user-label'];
    __VLS_styleScopedClasses['btn-login'];
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
            confirmPassword: confirmPassword,
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