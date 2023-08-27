<script setup lang="ts">
import CardList from '../card-list.vue';
import ProgressContent from './progress-content.vue';
import Draggable from 'vuedraggable';
import { storeToRefs } from 'pinia';
import { useProgressStore } from '@/stores/progress';
const { content, cardsLength } = storeToRefs(useProgressStore());
const store = useProgressStore();
const updateItemsLength = () => {
  return store.updateCardsLength(document.querySelectorAll('.progress-list li').length);
};
</script>

<template>
  <CardList>
    <template #card-title>Progress</template>
    <template #length>
      <span class="text-lg font-bold bg-slate-50 rounded-full py-0.5 px-1.5">{{ cardsLength }}</span>
    </template>
    <template #content>
      <Draggable v-model="content" item-key="content" tag="ul" class="progress-list" group="all" @vnode-updated="updateItemsLength">
        <template #item="{ element }">
          <li>
            <ProgressContent :img-url="element.img">
              <template #text>{{ element.text }}</template>
            </ProgressContent>
          </li>
        </template>
      </Draggable>
    </template>
  </CardList>
</template>

<style scoped></style>
