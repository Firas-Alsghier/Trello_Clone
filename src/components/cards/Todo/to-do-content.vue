<script setup lang="ts">
import { useTodoStore } from '@/stores/todo';
const store = useTodoStore();

defineOptions({
  inheritAttrs: false,
});
defineProps({
  imgUrl: {
    type: String,
    default: '',
    required: false,
  },
});

function removeContent(e: any) {
  e.target.parentElement.parentElement.parentElement.parentElement.remove();
  store.decreaseCardsLength();
}
</script>

<template>
  <div class="search-filter todo-content w-full min-h-[35px] bg-white rounded shadow-2xl relative my-3 py-4 px-3 hover:cursor-move">
    <div class="flex justify-between">
      <div class="input-text w-5/6 break-all"><slot name="text"></slot></div>
      <div class="remove-item hover:cursor-pointer" @click="removeContent"><i class="fa-solid fa-trash" style="color: #f11e1e"></i></div>
    </div>
    <div class="us-img mt-5" v-if="imgUrl">
      <img :src="imgUrl" />
    </div>
  </div>
</template>

<style scoped></style>
