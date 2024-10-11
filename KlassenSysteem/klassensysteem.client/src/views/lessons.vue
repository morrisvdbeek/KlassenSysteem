<template>
    <div class="lessons-page">
        <h1>Voeg een Les toe</h1>

        <form @submit.prevent="addLesson">
            <div class="form-group">
                <label for="lessonName">Naam van de Les:</label>
                <input type="text"
                       id="lessonName"
                       v-model="newLesson.name"
                       placeholder="Voer een lesnaam in"
                       required />
            </div>

            <div class="form-group">
                <label for="lessonDescription">Beschrijving van de Les:</label>
                <textarea id="lessonDescription"
                          v-model="newLesson.description"
                          placeholder="Voer een beschrijving in"
                          required></textarea>
            </div>

            <button type="submit">Voeg Les toe</button>
        </form>

        <!-- Lijst met lessen -->
        <h2>Toegevoegde Lessen</h2>
        <ul>
            <li v-for="(lesson, index) in lessons" :key="index">
                <strong>{{ lesson.name }}</strong>: {{ lesson.description }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      newLesson: {
        name: '',
        description: '',
      },
      lessons: [],
    };
  },
  methods: {
    addLesson() {
      if (this.newLesson.name && this.newLesson.description) {
        this.lessons.push({ ...this.newLesson });
        this.newLesson.name = ''; 
        this.newLesson.description = '';
      }
    },
  },
};
</script>

<style scoped>
    .lessons-page {
        margin: 20px;
    }

    .form-group {
        margin-bottom: 10px;
    }

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }

    input,
    textarea {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
    }

    button {
        padding: 10px 15px;
        background-color: #42b983;
        color: white;
        border: none;
        cursor: pointer;
    }

        button:hover {
            background-color: #2c8e5e;
        }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        background: #f9f9f9;
        margin-bottom: 5px;
        padding: 10px;
        border: 1px solid #ddd;
    }
</style>
