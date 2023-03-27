<template>
  <div class="content2 pa-2 rounded-lg">
    <div class="block">
      <FirstBox />
      <v-card
        class="rounded-lg my-4"
        color="white"
        v-for="content in content2"
        :key="content.id"
      >
        <v-card-title class="text-body-1 font-weight-bold">
          {{ content.name }}
        </v-card-title>
        <v-card-subtitle>
          <v-icon color="#1D82F5" class="text-display-1">mdi-plus</v-icon>
          <span class="text-body-1 blue--text">add comment</span>
        </v-card-subtitle>

        <v-card-text class="pa-0">
          <v-list class="pa-0" v-if="content.lists">
            <v-list-item
              class="pa-0"
              v-for="list in content.lists"
              :key="list.id"
            >
              <v-list-item-title class="text font pl-2">
                {{ list.text }}
              </v-list-item-title>
              <v-list-item-subtitle class="d-flex justify-end sub"
                ><v-icon class="text-body-1 px-2">{{ list.icon1 }}</v-icon>
                <v-icon class="text-body-1 px-2">{{ list.icon2 }}</v-icon>
              </v-list-item-subtitle>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import FirstBox from "./FirstBox.vue";

export default {
  name: "content2",
  data() {
    return {
      content2: [
        {
          id: 1,
          name: "Comment",
          title: "Add Comment",
          lists: [
            {
              id: 1,
              text: "this is me",
              icon1: "mdi-eye-outline",
              icon2: "mdi-pencil",
            },
            {
              id: 1,
              text: "this is me",
              icon1: "mdi-eye-outline",
              icon2: "mdi-pencil",
            },
          ],
        },
        {
          id: 2,
          name: "Sub Task",
          title: "Add Sub Task",
          lists: [
            {
              id: 1,
              text: "this is me",
              icon1: "mdi-eye-outline",
              icon2: "mdi-pencil",
            },
            {
              id: 1,
              text: "this is me",
              icon1: "mdi-eye-outline",
              icon2: "mdi-pencil",
            },
          ],
        },
        {
          id: 3,
          name: "Notes",
          title: "Add Notes",
          lists: [
            {
              id: 1,
              text: "this is me",
              icon1: "mdi-eye-outline",
              icon2: "mdi-pencil",
            },
            {
              id: 1,
              text: "this is me",
              icon1: "mdi-eye-outline",
              icon2: "mdi-pencil",
            },
          ],
        },
      ],
    };
  },
  components: {
    FirstBox,
  },
};
</script>

<style scoped>
.content2 {
  background: #e7effc;
}
.v-list-item {
  min-height: 30px !important;
}
.text {
  color: #777777;
  font-size: 14px;
  width: 300px;
}
.sub {
  width: 30%;
}
</style>