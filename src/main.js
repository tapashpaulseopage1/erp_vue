import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vue2Editor from "vue2-editor";

import "./assets/css/index.css";

Vue.config.productionTip = false;

Vue.filter("truncate", function (text, length) {
  if (text.length > length) {
    return text.substring(0, length);
  } else {
    return text;
  }
});
Vue.filter("formatFloat",function(){
  return parseFloat(float).toFixed(2)
})


new Vue({
  router,
  store,
  Vue2Editor,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
