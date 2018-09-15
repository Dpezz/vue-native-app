<template>
    <nb-container>
        <nb-header>
            <nb-left/>
            <nb-body>
                <nb-title>Title</nb-title>
                <nb-subtitle>Subtitle</nb-subtitle>
            </nb-body>
            <nb-right/>
        </nb-header>

        <nb-content>
            <nb-list>
                <nb-list-item :onPress="handleBtnPress">
                    <nb-left>
                        <nb-text>Simon Mignolet</nb-text>
                    </nb-left>
                    <nb-right>
                        <nb-icon name="arrow-forward" />
                    </nb-right>
                    </nb-list-item>
                <nb-list-item>
                    <nb-text>Nathaniel Clyne</nb-text>
                </nb-list-item>
                <nb-list-item>
                    <nb-text>Dejan Lovren</nb-text>
                </nb-list-item>
            </nb-list>
        </nb-content>
    </nb-container>
</template>

<script>
import React from "react";
import { Toast } from "native-base";
export default {
  methods: {
    handleBtnPress: function() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay",
        duration: 3000
      });
    }
  }
};
</script>