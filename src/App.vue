<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
// Components Imports
import navIndex from './components/navbar/nav-index.vue';
import searchInput from './components/search/search-input.vue';
import ToDoCard from './components/cards/Todo/to-do-card.vue';
import DoneCard from './components/cards/done/done-card.vue';
import ProgressCard from './components/cards/progress/progress-card.vue';

// Import The Component Async to make sure the site load fast
const newTaskVue = defineAsyncComponent(() => import('./components/cards/new-task.vue'));
</script>

<template>
  <div class="app-container min-h-screen bg-gradient-to-bl from-violet-500 to-fuchsia-500 p-7">
    <navIndex />
    <searchInput />
    <div class="cards-container flex flex-col items-center min-[1025px]:flex-row justify-around">
      <ToDoCard />
      <ProgressCard />
      <DoneCard />
    </div>
    <newTaskVue />
  </div>
</template>

<style scoped></style>
