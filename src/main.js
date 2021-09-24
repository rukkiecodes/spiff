import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import {
  DocumentEditorContainerPlugin,
  DocumentEditorContainerComponent,
  Toolbar,
} from "@syncfusion/ej2-vue-documenteditor";

Vue.use(DocumentEditorContainerPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // @ts-ignore
  vuetify,
  // @ts-ignore
  render: (h) => h(App),
}).$mount("#app");
