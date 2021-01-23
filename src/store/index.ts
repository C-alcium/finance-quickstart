import { createStore } from 'vuex'
import IrelandFaq from '@/assets/content/en/faq/ireland.md';
import GermanyFaq from '@/assets/content/en/faq/germany.md';

interface FAQ {
  ireland: string;
  germany: string;
  [key: string]: string;
}

const faq: FAQ = {
  ireland: IrelandFaq as string,
  germany: GermanyFaq as string,
}

export default createStore({
  state: {
    faq
  },
  getters: {
    getCountryFaq: state => (country: string) => {
      const result = state.faq[country] 
      return result
    }
  }
})
