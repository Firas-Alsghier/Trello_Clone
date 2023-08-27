<script setup lang="ts">
import CardList from '../card-list.vue';
import ToDoContent from './to-do-content.vue';
import Draggable from 'vuedraggable';
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/stores/todo';
const store = useTodoStore();
const { content, cardsLength } = storeToRefs(useTodoStore());
const updateItemsLength = () => {
  return store.updateCardsLength(document.querySelectorAll('.todo-list li').length);
};
</script>

<template>
  <CardList>
    <template #card-title>To Do</template>
    <template #length>
      <span class="text-lg font-bold bg-slate-50 rounded-full py-0.5 px-1.5">{{ cardsLength }}</span>
    </template>
    <!-- Ending transparent card -->
    <template #content>
      <Draggable v-model="content" item-key="content" tag="ul" class="todo-list" group="all" @vnode-updated="updateItemsLength">
        <template #item="{ element }">
          <li>
            <ToDoContent :img-url="element.img">
              <template #text>{{ element.text }}</template>
            </ToDoContent>
          </li>
        </template>
      </Draggable>
    </template>
  </CardList>
</template>

<style scoped></style>
