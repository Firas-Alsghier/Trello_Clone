import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    content: [] as Content[],
    searchInputVal: '',
    cardsLength: 0,
    id: 1,
  }),

  actions: {
    userInputs(text: string, category: string, img?: string): void {
      this.content.push({
        text,
        category,
        img,
        id: this.id,
      });
      this.id++;
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
    filterContent() {
      this.content.filter((el) => {
        return el.text.includes(this.searchInputVal);
      });
    },
  },
});

type Content = {
  text: string;
  category: string;
  id: number;
  img?: string;
};
