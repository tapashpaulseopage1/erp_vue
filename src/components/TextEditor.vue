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

<style scoped>
/* .vue_edeitor_height {
  height: 200px;
  display: block;
} */
</style>
