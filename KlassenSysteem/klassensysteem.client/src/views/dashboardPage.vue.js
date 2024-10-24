import { defineComponent, ref, onMounted } from 'vue';
import apiService from '@/services/apiService';
export default defineComponent({
    name: 'DashboardPage',
    setup() {
        const usernames = ref([]);
        const fetchUsernames = async () => {
            try {
                const response = await apiService.getDashboardData();
                usernames.value = response.data;
            }
            catch (error) {
                console.error('Error fetching usernames:', error);
            }
        };
        onMounted(() => {
            fetchUsernames();
        });
        return {
            usernames,
        };
    },
});
;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    if (__VLS_ctx.usernames && __VLS_ctx.usernames.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [username] of __VLS_getVForSourceType((__VLS_ctx.usernames))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((username)), });
            (username);
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
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
let __VLS_self;
//# sourceMappingURL=DashboardPage.vue.js.map