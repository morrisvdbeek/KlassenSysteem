<script setup lang="ts">
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import apiService from '@/services/apiService';

    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await apiService.login({
                Email: email.value,
                Password: password.value
            });

            if (response.status === 200 || response.status === 201) {
                const data = response.data;

                localStorage.setItem('token', data.token);

                router.push('/dashboard');
            } else {
                errorMessage.value = response.data.message || 'Invalid email address or password.';
            }
        } catch (error: unknown) {
            if (isAxiosError(error)) {
                if (error.response && error.response.data && typeof error.response.data === 'object') {
                    const errorData = error.response.data as { message?: string };
                    errorMessage.value = errorData.message || 'An error occurred during login.';
                } else {
                    errorMessage.value = 'An error occurred. Please try again later.';
                }
            } else {
                errorMessage.value = 'An unknown error occurred. Please try again later.';
            }
            console.error('Error during login:', error);
        }
    };

    function isAxiosError(error: unknown): error is import('axios').AxiosError {
        return (error as import('axios').AxiosError).isAxiosError !== undefined;
    }
</script>


<template>
    <div>
        <main>
            <p class="title">Login</p>
            <div v-if="errorMessage" class="error-box">{{ errorMessage }}</div>
            <form @submit.prevent="handleLogin">
                <div class="input-group">
                    <input type="email" v-model="email" class="input" required />
                    <label for="email" class="user-label">Email address</label>
                </div>
                <div class="input-group">
                    <input type="password" v-model="password" class="input" required />
                    <label for="password" class="user-label">Password</label>
                </div>
                <button type="submit" class="btn-login">Login</button>
            </form>
        </main>
    </div>
</template>

<style scoped>
    main {
        padding: 25px;
        max-width: 55vw;
        margin: 0 auto;
    }

    .error-box {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
        border-radius: 4px;
        padding: 15px;
        margin-bottom: 20px;
        text-align: center;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .input-group {
        position: relative;
        margin-bottom: 20px;
    }

    .input {
        border: solid 1.5px #9e9e9e;
        border-radius: 1rem;
        background: none;
        padding: 1rem;
        font-size: 1rem;
        color: #212121;
        width: 100%;
        transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .user-label {
        position: absolute;
        left: 15px;
        color: #9e9e9e;
        pointer-events: none;
        transform: translateY(1.5rem);
        transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .input:focus,
    .input:valid {
        outline: none;
        border: 1.5px solid #1a73e8;
    }

        .input:focus ~ .user-label {
            transform: translateY(-50%) scale(0.8);
            background-color: #ffffff;
            padding: 0 .2em;
            color: #2196f3;
        }

        .input:valid ~ .user-label {
            transform: translateY(-50%) scale(0.8);
            background-color: #ffffff;
            padding: 0 .2em;
            color: green;
        }

    .input:valid {
        border: solid 1.5px green;
    }

    .btn-login {
        background-color: #fd8b1d;
        color: white;
        padding: 10px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
    }

        .btn-login:hover {
            background-color: #fd891dcd;
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

        .title::before,
        .title::after {
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

    .message {
        color: rgba(88, 87, 87, 0.822);
        font-size: 14px;
        margin-bottom: 20px;
    }

    .signin {
        text-align: center;
        color: rgba(88, 87, 87, 0.822);
        font-size: 14px;
    }

        .signin a {
            color: royalblue;
        }

            .signin a:hover {
                text-decoration: underline royalblue;
            }
</style>