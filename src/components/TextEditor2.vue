<template>
  <div class="texte">
    <div v-if="showNewInput" class="editpop">
      <vue-editor v-model="content" :editor-toolbar="customToolbar" />

      <div class="d-flex justify-start pa-2 red">
        <v-btn
          @click="showNewInput = false"
          color="white"
          class="red--text text-body-2 font-weight-normal pa-2 rounded-lg"
        >
          Send
        </v-btn>
      </div>
    </div>
    <div class="w-full" v-else>
      <input
        type="text"
        class="icon-rtl"
        placeholder="Search"
        @click="openText"
      />
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: { VueEditor },

  data: () => ({
    showNewInput: false,

    content: "wite something",
    customToolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["image", "code-block", "file"],
    ],
  }),

  methods: {
    closeEditor() {
      this.showNewInput = false;
    },

    openText() {
      this.showNewInput = true;
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  background: #fff;
  padding: 10px;
  box-shadow: 0 0 2px gray;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
}

.icon-rtl {
  padding-right: 20px;
  background: url("https://static.thenounproject.com/png/101791-200.png")
    no-repeat right white;
  background-size: 20px;
  margin-right: 50px;
}
</style>
