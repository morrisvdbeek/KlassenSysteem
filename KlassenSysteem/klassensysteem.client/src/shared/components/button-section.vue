<script setup lang="ts">
import { defineProps } from "vue";
import waveSection from "@/shared/components/wave-section.vue";

const props = defineProps({
  waveEnabled: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <wave-section
    v-if="props.waveEnabled == true"
    color="#eaf7fe"
    svg-class="wave-button-section"
  />
  <section class="button-panel-section p-6 bg-gray-100">
    <!-- <h2 class="text-2xl font-bold mb-4 text-center">Onze Diensten</h2> -->
    <div class="button-panel grid lg:grid-cols-4">
      <router-link to="/lessons" class="button-card">
        <button>
          <i class="fas fa-book-open fa-2x"></i>
          <span class="button-text">Lessen</span>
        </button>
      </router-link>
      <button class="button-card">
        <i class="fas fa-comments fa-2x"></i>
        <span class="button-text">Chatten</span>
      </button>
      <button class="button-card">
        <i class="fas fa-calendar-alt fa-2x"></i>
        <span class="button-text">Agenda</span>
      </button>
      <button class="button-card">
        <i class="fas fa-user-cog fa-2x"></i>
        <span class="button-text">Instellingen</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.wave-button-section {
  margin-top: 10vh;
  margin-bottom: -1vh;
}
</style>
