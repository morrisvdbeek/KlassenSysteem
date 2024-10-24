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
                <router-link to="/login"><button class="btn-login" @click="login">Login</button></router-link>
                <router-link to="/register"><button class="btn-registration">Registreren</button></router-link>
<<<<<<< HEAD
                <router-link to="/"><button class="btn-logout" @click="logout">Uitloggen</button></router-link>
=======
                <router-link to="/lessons"><button class="btn-lesson">Lesson</button></router-link>
                <router-link to="/" v-if="isLoggedIn"><button class="btn-logout" @click="logout">Logout</button></router-link>
>>>>>>> 45d81eb8ec9cd5efa0a680d4feb6303291ae1098
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
        },
        methods: {
            logout() {
                localStorage.removeItem('token');
                this.isLoggedIn = false;
                location.reload;
            }
        }
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