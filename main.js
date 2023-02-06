import App from "./App";

import CommonComponentA from "./components/commonA/index.vue";

// #ifndef VUE3
import Vue from "vue";
Vue.config.productionTip = false;
App.mpType = "app";
Vue.component("common-component-a", CommonComponentA);
const app = new Vue({
  ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif
