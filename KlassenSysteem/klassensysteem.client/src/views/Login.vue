<script setup lang="ts">
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
        <form class="form" @submit.prevent="handleLogin">
            <p class="title">Inloggen</p>
            <p class="message">Log in met je e-mail en wachtwoord om toegang te krijgen.</p>

            <label>
                <input type="email"
                       v-model="email"
                       placeholder=""
                       class="input"
                       required>
                <span>E-mail</span>
            </label>

            <label>
                <input type="password"
                       v-model="password"
                       placeholder=""
                       class="input"
                       required>
                <span>Wachtwoord</span>
            </label>

            <button type="submit" class="submit">Inloggen</button>

            <p class="signin">Nog geen account?<router-link to="/register"> Registreer</router-link></p>
        </form>
    </div>
</template>

<style scoped>
    .form {
        margin-left: 40%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 350px;
        background-color: #fff;
        padding: 20px;
        border-radius: 20px;
        position: relative;
        border: 1px solid black;
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

    .message, .signin {
        color: rgba(88, 87, 87, 0.822);
        font-size: 14px;
    }

    .signin {
        text-align: center;
    }

        .signin a {
            color: royalblue;
        }

            .signin a:hover {
                text-decoration: underline royalblue;
            }

    .form label {
        position: relative;
    }

        .form label .input {
            width: 100%;
            padding: 10px 10px 20px 10px;
            outline: 0;
            border: 1px solid rgba(105, 105, 105, 0.397);
            border-radius: 10px;
        }

            .form label .input + span {
                position: absolute;
                left: 10px;
                top: 15px;
                color: grey;
                font-size: 0.9em;
                cursor: text;
                transition: 0.3s ease;
            }

            .form label .input:placeholder-shown + span {
                top: 15px;
                font-size: 0.9em;
            }

            .form label .input:focus + span, .form label .input:valid + span {
                top: 30px;
                font-size: 0.7em;
                font-weight: 600;
            }

            .form label .input:valid + span {
                color: green;
            }

            .form label .input:focus {
                border: 1px solid #fd8b1d;
            }

    .submit {
        border: none;
        outline: none;
        background-color: #fd8b1d;
        padding: 10px;
        border-radius: 10px;
        color: #fff;
        font-size: 16px;
        transition: 0.3s ease;
    }

        .submit:hover {
            background-color: #fd891dcd;
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
</style>
