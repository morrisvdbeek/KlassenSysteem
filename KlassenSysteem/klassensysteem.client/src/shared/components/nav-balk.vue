<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-links-container">
        <span class="logo-text">Logo hier</span>
        <div class="nav-menu" id="navbar-sticky">
            <ul class="nav-links">
                <li>
                    <a class="nav-link active"><router-link to="/">Home</router-link></a> 
                </li>
            </ul>
        </div>
      </div>
      <div class="actions">
        <button class="btn-login">Login</button>
        <button class="btn-registration">Registreren</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'; // Vue router importeren

  // De router instantie gebruiken om routes aan te sturen
  const router = useRouter();

  // Functie om naar de login pagina te navigeren
  const goToLogin = () => {
    router.push('/login'); // Zorg dat '/login' verwijst naar de juiste login route
  };
</script>

<style scoped>
    main {
        padding: 25px;
    }
</style>
