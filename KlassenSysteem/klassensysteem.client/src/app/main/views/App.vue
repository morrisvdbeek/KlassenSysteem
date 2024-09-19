<script setup lang="ts">
    import navBar from "@/shared/components/nav-balk.vue";
    import Footer from "@/shared/components/footer.vue";
    import "../css/welcome-section.css";
    import "../../../assets/css/main.css";
</script>

<template>
    <navBar />

    <div class="welcome-section-container">
        <div class="welcome-section relative overflow-hidden bg-gray-900 py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Klassensysteem
                    </h2>
                    <p class="mt-6 text-lg leading-8 text-gray-300">Naam leerling</p>
                    </div>
                <p class="text-lg text-gray-300">Klas: SAI-4IT22A</p>
                </div>
            <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"></div>
        </div>
    </div>

    <footer />
</template>