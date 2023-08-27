<script setup lang="ts">
import CardList from '../card-list.vue';
import DoneContent from './done-content.vue';
import Draggable from 'vuedraggable';
import { storeToRefs } from 'pinia';
import { useDoneStore } from '@/stores/done';
const { content, cardsLength } = storeToRefs(useDoneStore());
const store = useDoneStore();
const updateItemsLength = () => {
  return store.updateCardsLength(document.querySelectorAll('.done-list li').length);
};
</script>

<template>
  <CardList>
    <template #card-title>Done</template>
    <template #length>
      <span class="text-lg font-bold bg-slate-50 rounded-full py-0.5 px-1.5">{{ cardsLength }}</span>
    </template>
    <template #content>
      <Draggable v-model="content" item-key="content" tag="ul" class="done-list" group="all" @vnode-updated="updateItemsLength">
        <template #item="{ element }">
          <li>
            <DoneContent :img-url="element.img">
              <template #text>{{ element.text }}</template>
            </DoneContent>
          </li>
        </template>
      </Draggable>
    </template>
  </CardList>
</template>

<style scoped></style>
<!-- <DoneContent v-for="list in store.content" :key="list.text" :img-url="list.img">
        <template #text>{{ list.text }}</template>
      </DoneContent> -->
