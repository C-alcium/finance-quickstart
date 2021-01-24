import { Store } from 'vuex'
import { ComponentCustomProperties } from 'vue'

interface FAQ {
  ireland: string;
  germany: string;
  [key: string]: string;
}

declare module '@vue/runtime-core' {
  interface State {
    faq: FAQ;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}