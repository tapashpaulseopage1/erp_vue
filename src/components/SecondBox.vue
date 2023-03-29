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
            <v-list-item-subtitle class="d-flex justify-end sub">
              <v-icon class="text-body-1 px-2">{{ list.icon1 }}</v-icon>
              <v-icon class="text-body-1 px-2">{{ list.icon2 }}</v-icon>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-title class="tagg">
        <div>
          <v-btn icon @click="openDialog">
            <v-avatar size="24" color="blue">
              <v-icon
                color="white"
                class="text-body-1 font-weight-regular"
                v-if="isActive"
              >
                mdi-chevron-left
              </v-icon>
              <v-icon
                color="white"
                class="text-body-1 font-weight-regular"
                v-else
              >
                mdi-chevron-right
              </v-icon>
            </v-avatar>
          </v-btn>

          <v-dialog v-model="dialog" width="750px">
            <v-card class="pa-4 card">
              <v-card-text class="pa-4 card-text">
                <v-list class="pa-0 card-text">
                  <v-list-item
                    class="d-flex justify-start first"
                    color="transparant"
                  >
                    <v-avatar size="30" color="blue" class="pa-0">
                      <span class="white--text font-weight-normal font">
                        RS
                      </span>
                    </v-avatar>
                    <v-text-field
                      type="file"
                      class="text-body-1 font-weight-medium pa-2"
                      append-icon="mdi-check-circle"
                      color="primary"
                      dense
                      solo
                      hide-details
                    />
                  </v-list-item>
                </v-list>

                <CommentList />
              </v-card-text>

              <v-card-actions class="d-flex justify-end py-1">
                <v-btn color="primary" text @click="dialog = false"
                  >Close</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import CommentList from "./CommentList.vue";

export default {
  data() {
    return {



      isActive: true,
      dialog: true,

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

  components: {
    CommentList,
  },



  methods: {
    openDialog() {
      this.dialog = true;
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.v-dialog {
  border: 10px solid gold !important;
}

.card {
  border: 2px solid #1c96e7;
  border-radius: 2%;
  background: #f4f5f7;
}

.card-text {
  background: #f4f5f7;
}

.v-list-item {
  min-height: 30px !important;

  /* border-bottom: 1px solid rgba(128, 128, 128, 0.272); */
}

.v-input__prepend-outer {
  margin-right: 0 !important;
}

.span {
  color: gray;
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

.hidden-sm-and-down .v-icon {
  color: white !important;
}

input {
  background: #fff;
  padding: 10px;
  box-shadow: 0 0 2px gray;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
}

.text {
  color: #777777;
  font-size: 14px;
}
</style>
