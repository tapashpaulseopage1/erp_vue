<template>
  <div>
    <vue-editor v-model="content" class="vue_edeitor_height" />
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: { VueEditor },

  data: () => ({
    content: "write something",
    show: true,
  }),
};
</script>

<style>
.ql-editor {
  min-height: 200px !important;
}
</style>
