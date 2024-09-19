<template>
    <div class="about">
        <h1>About Us</h1>
        <p>This is the about page of your Vue 3 TypeScript application.</p>
        <p>{{ message }}</p>
    </div>
</template>

<script lang="ts">import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AboutView',
  setup() {
    const message = ref('Learn more about our company and mission here.');

    return {
      message,
    };
  },
});</script>

<style scoped>
    .about {
        text-align: center;
        padding: 20px;
    }
</style>