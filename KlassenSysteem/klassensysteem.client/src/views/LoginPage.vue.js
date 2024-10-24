import { ref } from 'vue';
import { useRouter } from 'vue-router';
import apiService from '@/services/apiService';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const handleLogin = async () => {
    try {
        const response = await apiService.login({
            Email: email.value,
            Password: password.value
        });
        if (response.status === 200 || response.status === 201) {
            const data = response.data;
            localStorage.setItem('token', data.token);
            router.push('/dashboard');
        }
        else {
            errorMessage.value = response.data.message || 'Invalid email address or password.';
        }
    }
    catch (error) {
        if (isAxiosError(error)) {
            if (error.response && error.response.data && typeof error.response.data === 'object') {
                const errorData = error.response.data;
                errorMessage.value = errorData.message || 'An error occurred during login.';
            }
            else {
                errorMessage.value = 'An error occurred. Please try again later.';
            }
        }
        else {
            errorMessage.value = 'An unknown error occurred. Please try again later.';
        }
        console.error('Error during login:', error);
    }
};
function isAxiosError(error) {
    return error.isAxiosError !== undefined;
}
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
    __VLS_styleScopedClasses['btn-login'];
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
    if (__VLS_ctx.errorMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("error-box") }, });
        (__VLS_ctx.errorMessage);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.handleLogin) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("email"), ...{ class: ("input") }, required: (true), });
    (__VLS_ctx.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("email"), ...{ class: ("user-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), ...{ class: ("input") }, required: (true), });
    (__VLS_ctx.password);
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("password"), ...{ class: ("user-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("btn-login") }, });
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['error-box'];
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
            email: email,
            password: password,
            errorMessage: errorMessage,
            handleLogin: handleLogin,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=LoginPage.vue.js.map