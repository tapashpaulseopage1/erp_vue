<template>
  <div>
    <v-card
      class="rounded-lg my-4 relative"
      color="white"
      v-for="content in content2"
      :key="content.id"
    >
      <v-card-title class="text-body-1 font-weight-bold">
        {{ content.name }}
      </v-card-title>
      <v-card-subtitle class="pa-1">
        <v-icon color="#1D82F5" class="text-display-1">mdi-plus</v-icon>
        <span class="text blue--text">Add Comment</span>
      </v-card-subtitle>

      <v-card-text class="rounded-lg pb-0">
        <v-list class="" v-if="content.lists">
          <v-list-item
            class="pa-0 list-item"
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
        </v-list>
      </v-card-text>
      <v-card-title class="tagg">
        <v-btn icon>
          <v-avatar size="24" color="blue">
            <v-icon color="white" class="text-body-1 font-weight-regular">
              mdi-chevron-left
            </v-icon>
          </v-avatar>
        </v-btn>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
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
              id: 2,
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
              id: 2,
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
              id: 2,
              text: "this is me",
              icon1: "mdi-eye-outline",
              icon2: "mdi-pencil",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-list-item {
  min-height: 30px !important;
  /* border-bottom: 1px solid rgba(128, 128, 128, 0.272); */
}
.list-item {
  border-top: 1px solid rgba(128, 128, 128, 0.251);
}

.tagg {
  position: absolute;
  top: 30%;
  left: -10%;
  z-index: 99;
}
.text {
  color: #777777;
  font-size: 14px;
}
</style>