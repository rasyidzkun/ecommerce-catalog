<script>
  export default {
    props: ["incrementIndex"],
  };
</script>

<script setup>
  import face from "@/assets/images/face.svg";
</script>

<template>
  <section class="container">
    <img :src="face" alt="Error Page" class="image" />
    <div class="content">
      <h1>This product is unavailable to show</h1>
      <button @click="incrementIndex">Next Product</button>
    </div>
  </section>
</template>

<style scoped>
  .container {
    position: relative;
    display: grid;
    place-items: center;
  }

  .image {
    position: relative;
    width: 90%;
    top: 4rem;
    left: 7rem;
  }

  .content {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    place-items: center;
  }
  .content h1 {
    font-size: 2rem;
    margin-bottom: 1.3rem;
  }

  .content button {
    font-size: 1.8rem;
    border-radius: 0.4rem;
    border: 1px solid var(--light__black);
    outline: none;
    color: var(--light__black);
    background-color: var(--white);
    padding: 1rem 11rem;
    cursor: pointer;
    transition: 0.4s;
  }

  .content button:hover {
    transform: scale(1.06);
  }
</style>
