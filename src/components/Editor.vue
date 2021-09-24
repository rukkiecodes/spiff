<template>
  <v-container fluid class="pa-0">
    <v-sheet height="100vh" color="red" class="ejsContainer">
      <ejs-documenteditorcontainer
        ref="documenteditor"
        :serviceUrl="serviceUrl"
        :height="height"
        :width="width"
        id="container"
        :enableToolbar="true"
      ></ejs-documenteditorcontainer>
    </v-sheet>
  </v-container>
</template>

<script>
import {
  DocumentEditorContainerPlugin,
  DocumentEditorContainerComponent,
  Toolbar,
} from "@syncfusion/ej2-vue-documenteditor";

export default {
  data() {
    return {
      serviceUrl:
        "https://ej2services.syncfusion.com/production/web-services/api/documenteditor/",
      height: null,
      width: null,
    };
  },
  provide: {
    DocumentEditorContainer: [Toolbar],
  },
  mounted() {
    this.$nextTick(() => {
      this.height = document.querySelector(".ejsContainer").offsetHeight;
      this.width = document.querySelector(".ejsContainer").offsetWidth;
      // console.log(document.querySelectorAll(".ejsContainer"));
    });
  },
};
</script>

<style scoped>
@import url(../../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css);
</style>
