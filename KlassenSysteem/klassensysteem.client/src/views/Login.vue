<template>
    <div>
        <h1>Log hieronder in!</h1>
        <form @submit.prevent="handleLogin">
            <div>
                <label for="username">Gebruikersnaam:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div>
                <label for="password">Wachtwoord:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Inloggen</button>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const username = ref('');
    const password = ref('');

    function handleLogin() {
        console.log(`Inloggen met: ${username.value} en ${password.value}`);
    }
</script>

<style scoped>
    /* Stijlen kunnen hier tijdelijk worden verwijderd of aangepast */
</style>
