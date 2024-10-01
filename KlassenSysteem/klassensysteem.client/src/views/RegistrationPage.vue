<script setup lang="ts">
    import navBar from "@/shared/components/nav-balk.vue";
    import Footer from "@/shared/components/footer-section.vue";
    import { ref } from 'vue'; // Voor binding van inputvelden

</script>

<template>

    <!-- TODO: Afhandeling van data toevoegen -->
    <form class="form">
        <router-view />
        <p class="title">Registreren </p>
        <p class="message">Registreer nu om volledige toegang tot het programma te kijrgen. </p>
        <div class="flex">
            <label>
                <input required="" placeholder="" type="text" class="input">
                <span>Voornaam</span>
            </label>

            <label>
                <input required="" placeholder="" type="text" class="input">
                <span>Achternaam</span>
            </label>
        </div>

        <label>
            <input required="" placeholder="" type="email" class="input">
            <span>Email</span>
        </label>

        <label>
            <input required="" placeholder="" type="password" class="input">
            <span>Wachtwoord</span>
        </label>
        <button class="submit">Account aanmaken</button>
        <!-- TODO: Navigatie naar login maken -->
        <p class="signin">Al een account? <a href="#">Login</a> </p>
    </form>

</template>