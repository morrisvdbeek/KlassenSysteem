<template>
  <navBalk />
  <router-view />
  <footer-section />
</template>

<script setup lang="ts">
import navBalk from "@/shared/components/nav-balk.vue";
import footerSection from "@/shared/components/footer-section.vue";
import { defineProps } from "vue";
</script>
