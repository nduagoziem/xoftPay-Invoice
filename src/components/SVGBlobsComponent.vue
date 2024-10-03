<script setup>

</script>

<template>
    <div class="svg-container">

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="blob blob1">
            <path fill="#BAE6FF" d="M64.5,-22.9C72.6,3.9,60.5,35.4,41.7,46.4C22.9,57.5,-2.7,48.3,-24.7,32.6C-46.6,17,-64.9,-5,-60.2,-27.2C-55.5,
                -49.5,-27.7,
                -71.9,0.2,-71.9C28.2,-72,56.4,-49.7,64.5,-22.9Z" transform="translate(100 100)" 
            />
        </svg>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="blob blob2">
            <path fill="#FFFFOO" d="M37.5,3C37.5,23.3,18.7,46.5,-0.3,46.5C-19.4,46.5,-38.7,23.3,-38.7,3C-38.7,-17.2,-19.4,-34.4,-0.3,
                -34.4C18.7,-34.4,37.5,-17.2,37.5,3Z" transform="translate(100 100)" 
            />
        </svg>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="blob blob3">
            <path fill="#BAE6FF" d="M49.9,-22.1C53.6,-5.1,37.7,12.4,16.8,29C-4.1,45.6,-30,61.2,-45.7,52.2C-61.5,43.3,-67.2,9.8,-57.9,
                -15C-48.6,-39.8,-24.3,-55.9,
                -0.6,-55.7C23.2,-55.5,46.3,-39,49.9,-22.1Z" transform="translate(100 100)" 
            />
        </svg>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="blob blob4">
            <path fill="#F2F4F8" d="M58.7,-53.4C70.6,-46.9,70.7,-23.5,69.1,-1.7C67.4,20.2,63.9,40.3,52.1,45.4C40.3,50.6,20.2,40.7,1.2,39.5C-17.8,
                38.3,-35.6,45.8,-44.1,40.7C-52.5,35.6,-51.7,17.8,-47.4,4.3C-43.1,-9.2,-35.3,-18.4,-26.9,-24.9C-18.4,-31.4,-9.2,
                -35.2,7.1,-42.3C23.5,-49.4,46.9,-59.9,58.7,-53.4Z" transform="translate(100 100)" 
            />
        </svg>
    </div>
</template>

<style scoped>
    /* Container for SVGs to ensure they cover the screen */
    .svg-container {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }

    /* Basic styling for all blobs */
    svg.blob {
        width: 200px;
        height: auto;
        position: absolute;
        top: 0;
        left: 0;
        animation-duration: 15s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }

    /* Different keyframe animations for each blob */
    @keyframes move-around-1 {
        0% { transform: translate(10vw, 10vh) scale(1); }
        25% { transform: translate(70vw, 10vh) scale(1.2); }
        50% { transform: translate(70vw, 70vh) scale(1); }
        75% { transform: translate(10vw, 70vh) scale(0.8); }
        100% { transform: translate(10vw, 10vh) scale(1); }
    }

    @keyframes move-around-2 {
        0% { transform: translate(20vw, 20vh) scale(1); }
        25% { transform: translate(60vw, 30vh) scale(0.9); }
        50% { transform: translate(50vw, 60vh) scale(1.1); }
        75% { transform: translate(20vw, 70vh) scale(1.3); }
        100% { transform: translate(20vw, 20vh) scale(1); }
    }

    @keyframes move-around-3 {
        0% { transform: translate(30vw, 30vh) scale(1); }
        25% { transform: translate(80vw, 20vh) scale(1.1); }
        50% { transform: translate(60vw, 80vh) scale(0.9); }
        75% { transform: translate(20vw, 50vh) scale(1.2); }
        100% { transform: translate(30vw, 30vh) scale(1); }
    }

    @keyframes move-around-4 {
        0% { transform: translate(40vw, 40vh) scale(1); }
        25% { transform: translate(90vw, 30vh) scale(1.2); }
        50% { transform: translate(80vw, 70vh) scale(0.8); }
        75% { transform: translate(40vw, 60vh) scale(1.3); }
        100% { transform: translate(40vw, 40vh) scale(1); }
    }

    /* Assign the animations to each blob */
    .blob1 {
        animation-name: move-around-1;
    }

    .blob2 {
        animation-name: move-around-2;
    }

    .blob3 {
        animation-name: move-around-3;
    }

    .blob4 {
        animation-name: move-around-4;
    }
</style>