<script setup lang="ts">
    import { ref } from 'vue';

    // Refs voor het opslaan van form gegevens
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');

    // Functie die bij het indienen van het formulier wordt aangeroepen
    const handleRegister = () => {
        console.log('Registreren met:', firstName.value, lastName.value, email.value, password.value);
        // Voeg hier de registratie logica toe, zoals een API-aanroep voor registratie
    };
</script>

<template>
    <div>
        <main>
            <p class="title">Registreren</p>
            <p class="message">Registreer nu om volledige toegang tot het programma te krijgen.</p>
            <form @submit.prevent="handleRegister">
                <div class="input-group">
                    <input type="text"
                           id="firstName"
                           v-model="firstName"
                           class="input"
                           required />
                    <label for="firstName" class="user-label">Voornaam</label>
                </div>
                <div class="input-group">
                    <input type="text"
                           id="lastName"
                           v-model="lastName"
                           class="input"
                           required />
                    <label for="lastName" class="user-label">Achternaam</label>
                </div>
                <div class="input-group">
                    <input type="email"
                           id="email"
                           v-model="email"
                           class="input"
                           required />
                    <label for="email" class="user-label">Email</label>
                </div>
                <div class="input-group">
                    <input type="password"
                           id="password"
                           v-model="password"
                           class="input"
                           required />
                    <label for="password" class="user-label">Wachtwoord</label>
                </div>
                <button type="submit" class="btn-register">Account aanmaken</button>
            </form>
            <p class="signin">Al een account? <router-link to="/login">Login</router-link></p>
        </main>
    </div>
</template>

<style scoped>
    main {
        padding: 25px;
        max-width: 55vw;
        margin: 0 auto;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    .input-group {
        position: relative;
        margin-bottom: 20px;
    }

    .input {
        border: solid 1.5px #9e9e9e;
        border-radius: 1rem;
        background: none;
        padding: 1rem;
        font-size: 1rem;
        color: #212121;
        width: 100%;
        transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .user-label {
        position: absolute;
        left: 15px;
        color: #9e9e9e;
        pointer-events: none;
        transform: translateY(1.5rem);
        transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .input:focus,
    .input:valid {
        outline: none;
        border: 1.5px solid #1a73e8;
    }

        .input:focus ~ .user-label
        {
            transform: translateY(-50%) scale(0.8);
            background-color: #ffffff;
            padding: 0 .2em;
            color: #2196f3;
        }

        .input:valid ~ .user-label {
            transform: translateY(-50%) scale(0.8);
            background-color: #ffffff;
            padding: 0 .2em;
            color: green;
        }

        .input:valid {
            border: solid 1.5px green;
        }

        .btn-register {
            background-color: #fd8b1d;
            color: white;
            padding: 10px;
            font-size: 16px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .btn-register:hover {
            background-color: #fd891dcd;
        }

    .title {
        font-size: 28px;
        color: #fd8b1d;
        font-weight: 600;
        letter-spacing: -1px;
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 30px;
    }

        .title::before, .title::after {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            border-radius: 50%;
            left: 0px;
            background-color: #fd8b1d;
        }

        .title::before {
            width: 18px;
            height: 18px;
            background-color: #fd8b1d;
        }

        .title::after {
            width: 18px;
            height: 18px;
            animation: pulse 1s linear infinite;
        }

    @keyframes pulse {
        from {
            transform: scale(0.9);
            opacity: 1;
        }

        to {
            transform: scale(1.8);
            opacity: 0;
        }
    }

    .message {
        color: rgba(88, 87, 87, 0.822);
        font-size: 14px;
        margin-bottom: 20px;
    }

    .signin {
        text-align: center;
        color: rgba(88, 87, 87, 0.822);
        font-size: 14px;
    }

        .signin a {
            color: royalblue;
        }

            .signin a:hover {
                text-decoration: underline royalblue;
            }
</style>
