<template>
    <svg style="pointer-events: none;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" :width="size" :height="size">
        <!-- Núcleo del átomo -->
        <circle cx="50" cy="50" r="10" fill="#ff6f61" />

        <!-- Órbita 1 -->
        <circle cx="50" cy="50" r="30" fill="none" stroke="#4f8d7c" stroke-width="2" />

        <!-- Órbita 2 -->
        <circle cx="50" cy="50" r="40" fill="none" stroke="#4f8d7c" stroke-width="2" />

        <!-- Órbita 3 -->
        <circle cx="50" cy="50" r="49" fill="none" stroke="#4f8d7c" stroke-width="2" />

        <!-- Electron 1 -->
        <circle class="electron electron1" cx="50" cy="50" r="3" fill="#2d5a63" />

        <!-- Electron 2 -->
        <circle class="electron electron2" cx="50" cy="50" r="3" fill="#2d5a63" />

        <!-- Electron 3 -->
        <circle class="electron electron3" cx="50" cy="50" r="3" fill="#2d5a63" />

        <!-- Electron 4 -->
        <circle class="electron electron4" cx="50" cy="50" r="3" fill="#2d5a63" />
    </svg>

</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'Animate-Atom',
    props: {
        size: {
            type: Number as PropType<number>,
            default: 100,
        },
    },
});
</script>

<style>
/* Animación de rotación */
@keyframes rotate1 {
    0% {
        transform: rotate(0deg) translateX(30px) rotate(0deg);
    }

    100% {
        transform: rotate(360deg) translateX(30px) rotate(-360deg);
    }
}

@keyframes rotate2 {
    0% {
        transform: rotate(0deg) translateX(40px) rotate(0deg);
    }

    100% {
        transform: rotate(360deg) translateX(40px) rotate(-360deg);
    }
}

@keyframes rotate3 {
    0% {
        transform: rotate(0deg) translateX(50px) rotate(0deg);
    }

    100% {
        transform: rotate(360deg) translateX(50px) rotate(-360deg);
    }
}


.electron {
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 4s;
    transform-origin: center;
}

/* Electrón en la órbita 1 */
.electron1 {
    animation: rotate1 4s infinite linear;
    transform-origin: 50px 50px;
    /* El electrón gira alrededor del núcleo */
}

/* Electrón en la órbita 2 */
.electron2 {
    animation: rotate2 6s infinite linear;
    transform-origin: 50px 50px;
    /* El electrón gira alrededor del núcleo */
}

/* Electrón en la órbita 3 */
.electron3 {
    animation: rotate3 5s infinite linear;
    transform-origin: 50px 50px;
    /* El electrón gira alrededor del núcleo */
}

/* Electrón en la órbita 4 */
.electron4 {
    animation: rotate1 7s infinite linear;
    transform-origin: 50px 50px;
    /* El electrón gira alrededor del núcleo */
}
</style>