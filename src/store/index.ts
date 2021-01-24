import { createStore } from 'vuex'
import IrelandFaq from '@/assets/content/en/faq/ireland.md'
import GermanyFaq from '@/assets/content/en/faq/germany.md'
import { State } from 'vue'


export default createStore({
    state: {
      faq: {
        ireland: IrelandFaq as string,
        germany: GermanyFaq as string,
      },
    },
    getters: {
      getCountryFaq: (state: State) => (country: string) => {
        const result = state.faq[country.toLowerCase()]
        return result
      }
    }
})
