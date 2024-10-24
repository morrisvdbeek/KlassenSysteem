<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-links-container">
        <span class="logo-text">Logo hier</span>
        <div class="nav-menu" id="navbar-sticky">
          <ul class="nav-links">
            <li>
              <router-link to="/"
                ><a class="nav-link active">Home</a></router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="actions">
        <router-link to="/login" v-if="isLoggedIn == false"
          ><button class="btn-login" @click="login">Login</button></router-link
        >
        <router-link to="/register" v-if="isLoggedIn == false"
          ><button class="btn-registration">Registreren</button></router-link
        >
        <router-link to="/" v-if="isLoggedIn"
          ><button class="btn-logout" @click="logout">
            Uitloggen
          </button></router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.isLoggedIn = false;
    },
    login() {
      location.reload;
    },
    checkIfLoggedIn() {
      const token = localStorage.getItem("token");
      this.isLoggedIn = token !== null;
    },
  },
  created() {
    this.checkIfLoggedIn();
  },
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

main {
  padding: 25px;
}

.btn-logout {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 10px;
}
</style>
