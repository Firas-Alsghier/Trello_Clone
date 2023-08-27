<script setup lang="ts"></script>

<template>
  <div class="shadow-lg rounded-lg px-5 py-4 mt-3 hover:cursor-pointer">
    <h3 class="category-title text-lg font-bold">
      <slot name="title"></slot>
    </h3>
    <p class="category-subtitle font-semibold text-slate-500">
      <slot name="subtitle"></slot>
    </p>
  </div>
</template>

<style scoped></style>
