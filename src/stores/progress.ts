import { defineStore } from 'pinia';

export const useProgressStore = defineStore('progress', {
  state: () => ({
    content: [] as Content[],
    searchInputVal: '',
    cardsLength: 0,
  }),

  actions: {
    userInputs(text: string, category: string, img?: string): void {
      this.content.push({
        text,
        category,
        img,
      });
    },

    searchInput(val: string) {
      this.searchInputVal = val;
    },

    updateCardsLength(val: number) {
      this.cardsLength = val;
    },
    decreaseCardsLength() {
      this.cardsLength--;
    },
  },

  getters: {
    filterContent(): void {
      this.content.filter((el) => {
        return el.text === this.searchInputVal;
      });
    },
  },
});

type Content = {
  text: string;
  category: string;
  img?: string;
};
