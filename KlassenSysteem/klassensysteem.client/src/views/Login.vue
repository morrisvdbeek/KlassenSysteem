<script setup lang="ts">
    import navBar from "@/shared/components/nav-balk.vue";
    import Footer from "@/shared/components/footer.vue";
    import { ref } from 'vue'; // Voor binding van inputvelden

    // Refs voor het opslaan van e-mail en wachtwoord
    const email = ref('');
    const password = ref('');

    // Functie die bij het indienen van het formulier wordt aangeroepen
    const handleLogin = () => {
        console.log('Inloggen met:', email.value, password.value);
        // Voeg hier de inloglogica toe, zoals een API-aanroep voor authenticatie
    };
</script>

<template>
    <div>
        <navBar />
        <main>
            <h1>Log hieronder in!</h1>
            <form @submit.prevent="handleLogin">
                <div>
                    <label for="email">E-mail</label>
                    <input type="email"
                           id="email"
                           v-model="email"
                           placeholder="Vul je e-mailadres in"
                           required />
                </div>
                <div>
                    <label for="password">Wachtwoord</label>
                    <input type="password"
                           id="password"
                           v-model="password"
                           placeholder="Vul je wachtwoord in"
                           required />
                </div>
                <button type="submit" class="btn-login">Inloggen</button>
            </form>
        </main>
        <Footer />
    </div>
</template>

<style scoped>
    main {
        padding: 25px;
        max-width: 400px;
        margin: 0 auto;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    div {
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 5px;
    }

    input {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    .btn-login {
        background-color: #4CAF50;
        color: white;
        padding: 10px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

        .btn-login:hover {
            background-color: #45a049;
        }
</style>
