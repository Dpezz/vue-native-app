<template>
    <nb-container>
        <nb-header>
            <nb-left>
                 <nb-button transparent :onPress="handleHeaderClick">
                    <nb-icon name="arrow-back" />
                </nb-button>
            </nb-left>
            <nb-body>
                <nb-title>Detail</nb-title>
                <nb-subtitle>{{ this.props.navigation.getParam("data") }}</nb-subtitle>
            </nb-body>
            <nb-right/>
        </nb-header>
        <nb-content>
            
            <!-- <nb-text>{{ todo }}</nb-text> -->
          
        </nb-content>
            
    </nb-container>
</template>


<script>
import React from "react";
import { Toast } from "native-base";

export default {
  props: {
    navigation: Object
  },
  data: function() {
    return {
      // index: this.props.navigation.getParam("data")
    };
  },
  methods: {
    handleHeaderClick: function() {
      this.navigation.goBack();
    }
  }
};
</script>