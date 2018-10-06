<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import { StackNavigator, TabNavigator, TabBarBottom } from "vue-native-router";
import { Root } from "native-base";

import Login from "./src/screen/login.vue";
import Home from "./src/screen/home.vue";
import Detail from "./src/screen/detail.vue";

// registering all native-base components to the global scope of the Vue
Vue.use(VueNativeBase);

const AppNavigation = StackNavigator(
  {
    Login: Login,
    Home: Home,
    Detail: Detail
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default {
  components: { Root, AppNavigation }
};
</script>