import { defineComponent, ref, onMounted } from 'vue';
import apiService from '@/services/apiService';
export default defineComponent({
    name: 'MyModels',
    setup() {
        const models = ref([]);
        const fetchModels = async () => {
            try {
                const response = await apiService.getMyModels();
                models.value = response.data;
            }
            catch (error) {
                console.error('Error fetching models:', error);
            }
        };
        onMounted(() => {
            fetchModels();
        });
        return {
            models,
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (const [model] of __VLS_getVForSourceType((__VLS_ctx.models))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((model.id)), });
        (model.name);
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