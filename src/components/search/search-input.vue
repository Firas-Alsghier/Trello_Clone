<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
const searchInput = ref('');
const searchListContent = () => {
  const allCardContent = document.querySelectorAll('.search-filter');

  allCardContent.forEach((el) => {
    el.textContent?.includes(searchInput.value) ? el.classList.remove('hidden') : el.classList.add('hidden');
  });
};
</script>

<template>
  <div class="input-container flex justify-center mb-16">
    <span class="p-input-icon-left">
      <i class="fa-solid fa-magnifying-glass"></i>
      <InputText placeholder="Search" @input="searchListContent" v-model="searchInput" class="w-96 shadow-lg max-[480px]:w-64" />
    </span>
  </div>
</template>

<style scoped></style>
