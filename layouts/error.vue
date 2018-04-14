<template>
  <section class="container">
    <img class="imgnino bebeAnimado" src="@/static/boy.svg">
    <h1 v-if="error.statusCode === 404" class="title">
      Esta página no existe
    </h1>
    <h1 v-else class="title">
      {{ error.statusCode }}
    </h1>
    <h2 class="infoo">
      Ha habido algún error o esta página no existe, esto ha sido un proyecto hecho rápido es posible que haya muuuchos fallos
    </h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Volver al principio
    </nuxt-link>
  </section>
</template>

<script>
    export default {
        props: ['error']
    }

</script>

<style scoped>
    .container {
        text-align: center;
    }

    .title {
        margin-top: 15px;
        font-size: 5em;
    }

    .infoo {
        font-weight: 300;
        color: #000;
        margin: 10px;
        padding: 10px;
        border: 1px solid #000;
    }

    .button {
        margin-top: 50px;
        color: #000
    }

    .bebeAnimado {
        position: relative;
        width: 200px;
        margin: auto;
        height: auto;
        animation-name: babymovement;
        animation-iteration-count: infinite;
        animation-duration: 4s;
    }

    @keyframes babymovement {
        0% {
            left: 0;
            transform: rotateX(0deg);
            transform: rotateZ(0deg);
        }
        25% {
            left: -4px;
            transform: rotateX(25deg) rotateZ(4deg);
        }
        50% {
            left: 4px;
            transform: rotateX(-20deg) rotateZ(-4deg);
        }
        100% {
            left: 0;
            transform: rotateX(0deg) rotateZ(0deg);
        }
    }

</style>
