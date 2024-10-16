import { defineComponent, ref, onMounted } from 'vue';
import apiService from '@/services/apiService';
export default defineComponent({
    name: 'DashboardPage',
    setup() {
        const dashboardData = ref(null);
        const fetchDashboardData = async () => {
            try {
                const response = await apiService.getDashboardData();
                dashboardData.value = response.data;
            }
            catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };
        onMounted(() => {
            fetchDashboardData();
        });
        return {
            dashboardData,
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
    // no template
    const __VLS_slots = {};
    const $refs = {};
    const __VLS_inheritedAttrs = {};
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
//# sourceMappingURL=DashboardPage.vue.js.map