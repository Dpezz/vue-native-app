<template>
    <nb-container>
        <nb-header>
            <nb-left/>
            <nb-body>
                <nb-title>Login</nb-title>
                <nb-subtitle>Subtitle</nb-subtitle>
            </nb-body>
            <nb-right/>
        </nb-header>
        <nb-content>
          <nb-form>
            <nb-item stackedLabel>
              <nb-label>Username</nb-label>
              <nb-input v-model="rut" />
           </nb-item>
            <nb-item stackedLabel last>
              <nb-label>Password</nb-label>
              <nb-input v-model="password" secure-text-entry  />
            </nb-item>
          </nb-form>

          <nb-button full success :onPress="handleHeaderClick">
            <nb-text>Login</nb-text>
          </nb-button>

          <nb-text> {{ token }}</nb-text>
         
    </nb-container>
</template>

<script>
import React from "react";
import * as services from "../services/base/data";
import store from "../services/store";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  computed: {
    token() {
      return store.state.token;
    }
  },
  data: function() {
    return {
      rut: "",
      password: ""
    };
  },
  methods: {
    handleHeaderClick: function() {
      return services
        .post("auth", { rut: this.rut, password: this.password })
        .then(response => {
          store.commit("setToken", response.token);
        })
        .then(() => {
          if (store.state.token) this.navigation.navigate("Home");
        })
        .catch(err => console.error(err));
    }
  }
};
</script>