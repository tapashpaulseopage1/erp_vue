<template>
  <vue-editor v-model="content" class="vue_edeitor_height" />
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: { VueEditor },

  data: () => ({
    content: "write something",
  }),
};
</script>

<style >
.ql-editor {
  min-height: 200px !important;
}
</style>
