<script setup lang="ts">
import addItem from './add-item.vue';
</script>

<template>
  <div class="card w-[355px] max-[1145px]:w-[318px] max-w-sm min-h-[100px] bg-inherit rounded-lg shadow-lg relative overflow-hidden px-1">
    <div class="card-header flex justify-between px-5 pt-3">
      <p class="font-bold text-lg text-black">
        <slot name="card-title"></slot>
      </p>
      <div class="items-length">
        <slot name="length"></slot>
      </div>
    </div>
    <div class="todo-item opacity-75">
      <slot name="content"></slot>
      <addItem />
    </div>
  </div>
</template>

<style scoped></style>
