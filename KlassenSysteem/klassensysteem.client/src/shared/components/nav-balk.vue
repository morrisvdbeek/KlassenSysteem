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

  <router-view />
</template>
