<script setup lang="ts">
import navBar from "@/shared/components/nav-balk.vue";
import "../css/welcome-section.css";
</script>

<template>
  <navBar />
  <div class="welcome-section-container">
    <div
      class="welcome-section relative overflow-hidden bg-gray-900 py-24 sm:py-32"
    >
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Klassensysteem
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">Naam leerling</p>
          <!-- TODO: Naam bepalen na inloggen-->
          <p class="text-lg text-gray-300">Klas: SAI-4IT22A</p>
          <!-- TODO: Klas bepalen na inloggen-->
        </div>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"></div>
      </div>
    </div>
    <svg
      class="hidden xl:block rotate-180"
      viewBox="0 0 3840 96"
      preserveAspectRatio="none"
    >
      <g id="Page-1">
        <g id="Artboard-Copy-3" transform="translate(0.000000, -2328.000000)">
          <g
            id="style-element/wave/wave-D"
            transform="translate(0.000000, 2328.000000)"
          >
            <path
              d="M3840,96 L0,96 L0,56.8695652 C226.666667,18.9565217 546.666667,0 960,0 C1156.94118,0 1356.90934,9.68636678 1558.94298,22.9054085 L1584.20788,24.5757429 L1609.49387,26.2802052 L1634.80054,28.0161244 L1660.12748,29.7808296 L1685.47426,31.5716501 L1710.84047,33.3859149 L1736.22569,35.2209532 L1761.62951,37.074094 L1812.49125,40.824 L1850.96631,43.685184 L1960.36264,51.8498416 L1999.5204,54.7540967 L2025.64431,56.6784755 L2051.78267,58.5900992 L2077.93505,60.4861199 L2104.101,62.36369 L2136.82685,64.6803682 L2136.82685,64.6803682 L2169.57233,66.958206 L2195.78228,68.7487736 L2221.03243,70.4435074 C2439.91236,84.9982223 2659.95618,96 2880,96 C2897.33333,96 2914.48533,95.9744 2931.456,95.9232 L2956.776,95.8272 C3351.32533,94.0224 3645.73333,78.08 3840,48 L3840,96 Z"
              id="Wave"
              fill="#fd8b1d"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
  fill: #fd8b1d;
  margin-top: -1px;
}
</style>
