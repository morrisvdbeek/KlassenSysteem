<script lang="ts">
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
        name: 'RegistrationPage',
        setup() {
            const message = ref('Test.');

            return {
                message,
            };
        },
    });</script>

<template>

    <div class="registration-containter">
        <div class="registration-form">
          
            <h2>Registreren</h2>
            
            <form>
                <div class="form-group">
                    <label for="name">Naam</label>
                    <input type="text" id="name" name="name" placeholder="Naam" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" required>
                </div>
            </form>
        </div>
    </div>

</template>

