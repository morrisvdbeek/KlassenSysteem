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
        <router-link to="/login"
          ><button class="btn-login">Login</button></router-link
        >
        <router-link to="/register"
          ><button class="btn-registration">Registreren</button></router-link
        >
      </div>
    </div>
  </nav>
</template>

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
</style>
