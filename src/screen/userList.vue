<template>
  <nb-card>
    <nb-card-item header button :on-press="checkIconPress">
        <nb-text>{{ todo.title }}</nb-text>
    </nb-card-item>
    <nb-card-item>
        <nb-body>
            <nb-text>{{ todo.body }}</nb-text>
        </nb-body>            
    </nb-card-item>
  </nb-card>      
</template>


<script>
import React from "react";

export default {
  props: {
    navigation: {
      type: Object
    },
    todo: Object,
    selectedIndex: Number,
    editTodo: Function
  },
  methods: {
    checkIconPress: function() {
      this.editTodo(this.selectedIndex);
    }
  }
};
</script>