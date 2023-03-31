<template>
  <vue-editor
    v-model="content"
    :editor-toolbar="customToolbar"
    @keypress.enter="showNewInput = false"
  />
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: { VueEditor },

  data: () => ({
    showNewInput: true,
    content: "wite something",
    customToolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["image", "code-block", "file"],
    ],
  }),
};
</script>