<template>
    <div>
        <h1>Maak hier een les aan</h1>

        <label for="title">Titel:</label>
        <input type="text" v-model="title" placeholder="titel">

        <label for="content">Text:</label>
        <textarea v-model="content" rows="5" placeholder="tekst"></textarea>

        <button @click="saveContent">Opslaan</button>

        <div v-if="savedTitle || savedContent">
            <h2>{{ savedTitle }}</h2>
            <p>{{ savedContent }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                content: '',
                savedTitle: '',
                savedContent: ''
            };
        },
        methods: {
            saveContent() {
                this.savedTitle = this.title;
                this.savedContent = this.content;
            }
        }
    };
</script>

<style scoped>
    /* Voeg hier je styling toe */
    input, textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
</style>
