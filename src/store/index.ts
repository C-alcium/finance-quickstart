import { createStore } from 'vuex'
import { State } from 'vue'

export default createStore({
    state: {
        faq: {},
    },
    mutations: {
        addMarkdown(state: State, { countryName, markdown }) {
            state.faq[countryName] = markdown 
        }
    },
    getters: {
        getCountryFaq: (state: State) => (country: string) => {
            return state.faq[country.toLowerCase()]
        }
    }
})
