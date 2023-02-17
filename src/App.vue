<script setup>
  import { ref, onMounted, watchEffect } from "vue";
  import getData from "./api";
  import Card from "./components/Card.vue";
  import Loader from "./components/Loader.vue";
  import ErrorPage from "./components/ErrorPage.vue";

  const data = ref([]);
  const isLoading = ref(true);
  const index = ref(1);
  const category = ref(0);

  const incrementIndex = () => {
    if (index.value >= 20) {
      index.value = 1;
    } else {
      index.value++;
    }
  };

  const checkCategory = () => {
    if (data.value.category === "men's clothing") {
      category.value = 0;
    } else if (data.value.category === "women's clothing") {
      category.value = 1;
    } else {
      category.value = 2;
    }
  };

  onMounted(async () => {
    data.value = await getData(index.value);
    checkCategory();
    isLoading.value = false;
  });

  watchEffect(async () => {
    isLoading.value = true;
    data.value = await getData(index.value);
    checkCategory();
    isLoading.value = false;
  });
</script>

<template>
  <Loader v-if="isLoading" />
  <main v-else>
    <ErrorPage v-if="category === 2" :incrementIndex="incrementIndex" />
    <Card v-else :data="data" :incrementIndex="incrementIndex" />
  </main>
</template>
