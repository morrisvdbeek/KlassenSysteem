<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-links-container">
        <span class="logo-text">Logo hier</span>
        <div class="nav-menu" id="navbar-sticky">
            <ul class="nav-links">
                <li>
                    <router-link to="/"><a class="nav-link active">Home</a></router-link>
                </li>
            </ul>
        </div>
      </div>
      <div class="actions">
          <router-link to="/login"><button class="btn-login">Login</button></router-link>
          <router-link to="/register"><button class="btn-registration">Registreren</button></router-link>
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
