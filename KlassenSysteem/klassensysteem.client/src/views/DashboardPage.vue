<template>
    <div>
        <h1>Dashboard</h1>
        <div v-if="dashboardData && dashboardData.length > 0">
            <h2>User List</h2>
            <ul>
                <li v-for="user in dashboardData" :key="user.id">
                    {{ user.firstName }} {{ user.lastName }}
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Bezig met laden van gebruikers.</p>
        </div>
    </div>
</template>

<script lang="ts">
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
                } catch (error) {
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
</script>

<style scoped>
    /* Add your styles here */
</style>
