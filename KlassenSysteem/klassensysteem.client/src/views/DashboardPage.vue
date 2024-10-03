<template>
    <div>
        <h1>My Models</h1>
        <ul>
            <li v-for="model in models" :key="model.id">
                {{ model.name }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted } from 'vue';
    import apiService from '@/services/apiService';

    interface Model {
        id: number;
        name: string;
        // Add other properties if necessary
    }

    export default defineComponent({
        name: 'MyModels',
        setup() {
            const models = ref<Model[]>([]);

            const fetchModels = async () => {
                try {
                    const response = await apiService.getMyModels();
                    models.value = response.data;
                } catch (error) {
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
</script>

<style scoped>
    /* Add your styles here */
</style>