<template>
    <div id="app">
        <div class="quiz-container">
            <h1>Algemene Kennis.</h1>
            <div v-if="currentQuestion < questions.length">
                <p>{{ currentQuestion + 1 }}. {{ questions[currentQuestion].question }}</p>
                <div>
                    <button v-for="(answer, index) in questions[currentQuestion].answers"
                            :key="index"
                            @click="checkAnswer(index)">
                        {{ answer }}
                    </button>
                </div>
            </div>
            <div v-else>
                <h2>Je hebt {{ score }} van de {{ questions.length }} punten gehaald!</h2>
                <button @click="resetQuiz">Probeer opnieuw</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentQuestion: 0,
      score: 0,
      questions: [
        {
          question: "Wat is de hoofdstad van Frankrijk?",
          answers: ["Parijs", "Rome", "Londen", "Madrid"],
          correct: 0,
        },
        {
          question: "Welke planeet staat het dichtst bij de zon?",
          answers: ["Mars", "Venus", "Mercurius", "Jupiter"],
          correct: 2,
        },
        {
          question: "Wie schreef 'Romeo en Julia'?",
          answers: ["Shakespeare", "Homerus", "Dante", "Goethe"],
          correct: 0,
        },
        {
          question: "Hoeveel continenten zijn er op de wereld?",
          answers: ["5", "6", "7", "8"],
          correct: 2,
        },
        {
          question: "Wat is het grootste land ter wereld qua oppervlakte?",
          answers: ["Canada", "Rusland", "China", "Verenigde Staten"],
          correct: 1,
        },
        {
          question: "Wat is de kleinste oceaan ter wereld?",
          answers: ["Atlantische Oceaan", "Indische Oceaan", "Arctische Oceaan", "Stille Oceaan"],
          correct: 2,
        },
        {
          question: "Wie schilderde de Mona Lisa?",
          answers: ["Van Gogh", "Michelangelo", "Da Vinci", "Picasso"],
          correct: 2,
        },
        {
          question: "Wat is de chemische symbool voor water?",
          answers: ["O2", "H2O", "CO2", "HO"],
          correct: 1,
        },
        {
          question: "Hoeveel spelers heeft een voetbalteam op het veld?",
          answers: ["9", "10", "11", "12"],
          correct: 2,
        },
        {
          question: "Welke taal wordt gesproken in Brazilië?",
          answers: ["Spaans", "Portugees", "Frans", "Italiaans"],
          correct: 1,
        }
      ],
    };
  },
  methods: {
    checkAnswer(index) {
      if (index === this.questions[this.currentQuestion].correct) {
        this.score++;
      }
      this.currentQuestion++;
    },
    resetQuiz() {
      this.currentQuestion = 0;
      this.score = 0;
    }
  }
};
</script>

<style scoped>
    #app {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f5f5f5;
    }

    .quiz-container {
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      max-width: 9000px;
      margin: 0 auto;
    }

    button {
      margin: 5px;
      padding: 40px 60px;
      background-color: orange;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: darkorange;
    }
    H1 {
      color: #fd8b1d;
      font-size: 28px;
      font-weight: 600;
      margin-top: 20px;
      margin-bottom: -5px;
    }

    p {
      color: #333;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 5vh;
      margin-top: 60px;
    }
</style>
