<script>
  export default {
    props: ["data", "incrementIndex"],
  };
</script>

<script setup>
  import { ref } from "vue";

  const man = ref("men's clothing");
</script>

<template>
  <div
    class="card__bg"
    :style="{
      backgroundColor:
        data.category === man ? 'var(--light__blue)' : 'var(--light__purple)',
    }"
  ></div>
  <section class="card__container">
    <div class="product__container">
      <div class="image__assets">
        <img :src="data.image" />
      </div>
      <div class="content__assets">
        <h1
          class="content__title"
          :style="{
            color:
              data.category === man
                ? 'var(--dark__blue)'
                : 'var(--dark__purple)',
          }"
        >
          {{ data.title }}
        </h1>

        <div class="content__rating">
          <span class="content__rating-title">{{ data.category }}</span>
          <span class="content__rating-bullets"
            >2.9 / 5
            <div
              v-for="i in 3"
              :style="{
                backgroundColor:
                  data.category === man
                    ? 'var(--dark__blue)'
                    : 'var(--dark__purple)',
              }"
            ></div>
            <div
              v-for="i in 2"
              :style="{
                border:
                  data.category === man
                    ? '1px solid var(--dark__blue)'
                    : '1px solid var(--dark__purple)',
              }"
            ></div>
          </span>
        </div>

        <p class="content__desc">{{ data.desc }}</p>

        <p
          class="content__price"
          :style="{
            color:
              data.category === man
                ? 'var(--dark__blue)'
                : 'var(--dark__purple)',
          }"
        >
          $ {{ data.price }}
        </p>

        <div class="content__button">
          <button
            :class="[
              data.category == 'men\'s clothing'
                ? 'color__man'
                : 'color__woman',
            ]"
          >
            Buy Now
          </button>
          <button
            :class="[
              data.category == 'men\'s clothing'
                ? 'color__man'
                : 'color__woman',
            ]"
            :style="{
              color:
                data.category === man
                  ? 'var(--dark__blue)'
                  : 'var(--dark__purple)',
              borderColor:
                data.category === man
                  ? 'var(--dark__blue)'
                  : 'var(--dark__purple)',
            }"
            @click="incrementIndex"
          >
            Next Product
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  @import "../assets/style/card.css";
</style>
