import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    visible: false,
    imgUrl: '',
  }),

  actions: {
    changeVisible() {
      this.visible = true;
    },

    restVisible() {
      this.visible = false;
    },

    changeImgUrl(ln: string): void {
      this.imgUrl = '';
      this.imgUrl = ln;
    },
  },
});
