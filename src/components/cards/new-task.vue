<!-- eslint-disable no-constant-condition -->
<script setup lang="ts">
// Components Imports
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import SubmitBtn from './submit-btn.vue';
import TaskCategory from './task-category.vue';
import TaskImg from './task-img.vue';

// states Imports
import { useGlobalStore } from '@/stores/global';
import { useTodoStore } from '@/stores/todo';
import { useProgressStore } from '@/stores/progress';
import { useDoneStore } from '@/stores/done';

import { ref } from 'vue';
const toDoStore = useTodoStore();
const progressStore = useProgressStore();
const doneStore = useDoneStore();
const store = useGlobalStore();
const inputValue = ref('');
let card1 = ref(false);
let card2 = ref(false);
let card3 = ref(false);

const ChangeBg = (c1: boolean, c2: boolean, c3: boolean): void => {
  card1.value = c1;
  card2.value = c2;
  card3.value = c3;
};

const pushDetails = () => {
  if (card1.value === true) {
    toDoStore.userInputs(inputValue.value, 'ToDo', store.imgUrl);
    store.restVisible();
    store.changeImgUrl('');
    inputValue.value = '';
    card1.value = false;
  } else if (card2.value === true) {
    progressStore.userInputs(inputValue.value, 'Progress', store.imgUrl);
    store.restVisible();
    store.changeImgUrl('');
    inputValue.value = '';
    card2.value = false;
  } else if (card3.value === true) {
    doneStore.userInputs(inputValue.value, 'Done', store.imgUrl);
    store.restVisible();
    store.changeImgUrl('');
    inputValue.value = '';
    card3.value = false;
  } else {
    return;
  }
};
</script>

<template>
  <Teleport to="body">
    <Dialog v-model:visible="store.visible" modal header="Add A Task" class="min-w-[40%]">
      <div class="user-input">
        <InputText type="text" class="w-full" v-model="inputValue" />
      </div>
      <ul class="categories mt-10">
        <li>
          <TaskCategory @click="ChangeBg(true, false, false)" :class="{ 'bg-green-500': card1, 'text-white': card1, 'scale-105': card1, 'transition-all': card1, active: card1 }">
            <template #title>Todo</template>
            <template #subtitle>A new task to be completed</template>
          </TaskCategory>
        </li>

        <li>
          <TaskCategory @click="ChangeBg(false, true, false)" :class="{ 'bg-yellow-500': card2, 'text-white': card2, 'scale-105': card2, 'transition-all': card2, active: card2 }">
            <template #title>In Progress</template>
            <template #subtitle>A task that is currently working on</template>
          </TaskCategory>
        </li>

        <li>
          <TaskCategory @click="ChangeBg(false, false, true)" :class="{ 'bg-red-500': card3, 'text-white': card3, 'scale-105': card3, 'transition-all': card3, active: card3 }">
            <template #title>Done</template>
            <template #subtitle>A task that has been completed</template>
          </TaskCategory>
          <TaskImg />
        </li>
      </ul>
      <SubmitBtn @click="pushDetails" />
    </Dialog>
  </Teleport>
</template>

<style scoped></style>
