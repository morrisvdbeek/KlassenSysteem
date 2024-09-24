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
                <li>
                    <a><router-link to="/about">Over ons</router-link></a>
                </li>
                <li><a href="#" class="nav-link">Onze Diensten</a></li>
                <li>
                    <a><router-link to="/contact">Contact</router-link></a>
                </li>
            </ul>
        </div>
      </div>
      <div class="actions">
          <button class="btn-login">Login</button>
          <router-link to="/registration">
              <button class="btn-registration">Registreren</button>
          </router-link>
      </div>
    </div>
  </nav>

  <router-view />
</template>
