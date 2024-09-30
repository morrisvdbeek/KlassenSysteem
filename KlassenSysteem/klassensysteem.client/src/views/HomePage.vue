<script setup lang="ts">
    import waveSection from "@/shared/components/wave-section.vue";
    import buttonSection from "@/shared/components/button-section.vue";
    import "../app/main/css/welcome-section.css";
    import "../app/main/css/button-section.css";
</script>

<template>
    <div class="home-page">
        <div class="welcome-section-container">
            <div class="welcome-section relative overflow-hidden bg-gray-900 py-24 sm:py-32">
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
            <wave-section svgClass="hidden xl:block rotate-180" />
        </div>
        <section class="about-section-container">
            <div class="about-section">
                <div class="text-content">
                    <h2>Onze diensten</h2>
                    <div class="service-section">
                        <div class="section-teachers">
                            <h3>Voor Docenten</h3>
                            <ul>
                                <li>Klassen aanmaken.</li>
                                <li>
                                    Studenten uitnodigen via e-mail om aan een klas deel te nemen.
                                </li>
                                <li>Lessen samenstellen met meerkeuzevragen.</li>
                                <li>
                                    De prestaties van hun studenten bekijken en directe feedback
                                    geven.
                                </li>
                            </ul>
                        </div>
                        <div class="section-students">
                            <h3>Voor Studenten</h3>
                            <ul>
                                <li>Hun voortgang volgen en opdrachten bekijken.</li>
                                <li>Hun scores en resultaten inzien.</li>
                                <li>
                                    Notities maken per les om hun aantekeningen altijd bij de hand
                                    te hebben.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       <button-section />
    </div>
</template>

<style scoped>
    .rotate-180 {
        transform: rotate(180deg);
        fill: #fd8b1d;
        margin-top: -1px;
    }

    .about-section-container {
        display: flex;
        align-items: center;
        height: 100vh;
        width: 100%;
        padding: 90px 0;
        background: #fff;
    }

    .section-teachers {
        margin-bottom: 5vh;
    }

    .service-section ul {
        margin-left: 2vw;
        margin-top: 3vh;
    }

    .profile-picture {
        height: auto;
        width: 400px;
        border-radius: 12px;
    }

    .section-students {
        margin-bottom: 7vh;
    }

    .about-section {
        width: 1130px;
        max-width: 85%;
        margin: 0px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .text-content {
        width: 540px;
    }

        .text-content h2 {
            color: #333;
            font-size: 80px;
            font-weight: 600;
            margin-bottom: 7vh;
        }

    .service-section h3 {
        color: #fd8b1d;
        font-size: 28px;
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: -5px;
    }

    .service-section ul {
        list-style-type: disc;
        padding-left: 20px;
    }

        .service-section ul li {
            color: #556474;
            font-size: 18px;
            margin-bottom: 10px;
        }

    .text-content h5 {
        color: #333;
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    .text-content p {
        color: #333;
        font-size: 18px;
        line-height: 25px;
        letter-spacing: 1px;
    }

    .action-button-container {
        margin-top: 30px;
    }
</style>
