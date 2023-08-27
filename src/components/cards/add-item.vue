<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';
const { changeVisible } = useGlobalStore();
</script>
<template>
  <div class="w-full min-h-[35px] bg-white rounded shadow-2xl relative flex justify-end my-3 py-4 px-3">
    <div class="add-item hover:cursor-pointer" @click="changeVisible()"><i class="fa-solid fa-square-plus text-2xl" style="color: #37eb76"></i></div>
  </div>
</template>

<style scoped></style>
