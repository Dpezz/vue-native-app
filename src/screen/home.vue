<template>
    <nb-container>
        <nb-header>
            <nb-left/>
            <nb-body>
                <nb-title>Home</nb-title>
                <nb-subtitle>Subtitle</nb-subtitle>
            </nb-body>
            <nb-right>
                <nb-button transparent :onPress="handleHeaderClick">
                    <nb-icon name="add-circle" />
                </nb-button>
            </nb-right>
        </nb-header>
        <nb-content>

          <nb-button full success :onPress="getAuth">
            <nb-text>get auth</nb-text>
          </nb-button>
          <nb-text>{{ auth }}</nb-text>

          <user-list v-for="(todo,index) in datos" :key="index"
            :todo='todo'
            :selected-index='todo.id'
            :edit-todo='editTodo'
          />
          
    </nb-container>
</template>

<script>
import React from "react";
import store from "../services/store";

import * as services from "../services/base/data";
import UserList from "./userList";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data: function() {
    return {
      datos: [],
      auth: {}
    };
  },
  components: {
    UserList
  },
  methods: {
    handleHeaderClick: function() {
      return services
        .get("questions")
        .then(response => {
          this.datos = response;
        })
        .catch(err => console.error(err));
    },
    getAuth: function() {
      return services
        .get("auth")
        .then(response => {
          this.auth = response;
        })
        .catch(err => console.error(err));
    },
    editTodo: function(index) {
      this.navigation.navigate("Detail", { data: index });
    },
    test: function(item) {
      alert(item);
    }
  }
};
</script>