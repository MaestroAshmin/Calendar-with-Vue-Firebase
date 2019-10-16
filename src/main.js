import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.config.productionTip = false;

Vue.use(VueTextareaAutosize);

firebase.initializeApp({
  apiKey: "AIzaSyAHN0HEVe8XVGA9k_SkjNNrKh2hMOGSC9o",
  authDomain: "vue-calendar-57788.firebaseapp.com",
  databaseURL: "https://vue-calendar-57788.firebaseio.com",
  projectId: "vue-calendar-57788",
  storageBucket: "vue-calendar-57788.appspot.com",
  messagingSenderId: "1093394646175",
  appId: "1:1093394646175:web:74b349d5e364880b544eaa",
  measurementId: "G-0TG940LPFJ"
});

export const db = firebase.firestore();
new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
