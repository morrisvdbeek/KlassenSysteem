<template>
    <div>
        <h1>Dashboard</h1>
        <ul v-if="usernames && usernames.length">
            <li v-for="username in usernames" :key="username">{{ username }}</li>
        </ul>
        <p v-else>No users found</p>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted } from 'vue';
    import apiService from '@/services/apiService';

    export default defineComponent({
        name: 'DashboardPage',
        setup() {
            const usernames = ref<string[]>([]);

            const fetchUsernames = async () => {
                try {
                    const response = await apiService.getDashboardData();
                    usernames.value = response.data;
                } catch (error) {
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
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        padding: 8px;
        border-bottom: 1px solid #ddd;
    }
</style>
