

<template>
    <nav class="navbar">
        <div class="container">
            <div class="nav-links-container">
                <span class="logo-text">Logo hier</span>
                <div class="nav-menu" id="navbar-sticky">
                    <ul class="nav-links">
                        <li><a href="#" class="nav-link active">Home</a></li>
                        <li><a><router-link>About</router-link></a></li>
                        <li><a href="#" class="nav-link">Services</a></li>
                        <li><a href="#" class="nav-link">Contact</a></li>
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
