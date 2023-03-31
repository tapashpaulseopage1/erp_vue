<template>
  <div>
    <v-list-item
      class="d-flex"
      v-for="comment in commentList"
      :key="comment.id"
    >
      <CommentAvator :label="comment.label" />
      <v-list-item-content class="pa-1">
        <CommentHeader :name="comment.name" />
        <v-list-item-title class="">
          <TagList />
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import CommentHeader from "./CommentHeader.vue";
import TagList from "../TagList.vue";
import CommentAvator from "./CommentAvator.vue";

export default {
  data() {
    return {
      commentList: [
        {
          id: 1,
          label: "MS",
          name: "Tapash paul as Front end developer",
        },
        {
          id: 2,
          label: "MD",
          name: "Rayhan as laravel developer",
        },
        {
          id: 3,
          label: "SD",
          name: "Bijoy as laravel develope",
        },
        {
          id: 4,
          label: "DM",
          name: "Rayhan as laravel developer",
        },
      ],
    };
  },

  components: {
    TagList,
    CommentHeader,
    CommentAvator,
  },
};
</script>

<style scoped>
.v-overlay {
  display: none !important;
}
</style>
