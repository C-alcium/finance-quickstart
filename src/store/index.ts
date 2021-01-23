import { createStore } from 'vuex'
import IrelandFaq from '@/assets/content/en/faq/ireland.md';
import GermanyFaq from '@/assets/content/en/faq/germany.md';

export default createStore({
  state: {
    faq: {
      ireland: IrelandFaq,
      germany: GermanyFaq
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
