<template>
  <div>
    <v-list-item
      class="d-flex"
      v-for="comment in commentList"
      :key="comment.id"
    >
      <v-avatar size="36" color="red" class="pa-0 mt-n10">
        <span class="white--text font-weight-normal font">
          {{ comment.label }}
        </span>
      </v-avatar>

      <v-list-item-content class="pa-1">
        <v-list-item-title class="d-flex justify-start">
          <span class="text-body-1 font-weight-bold font px-2">{{
            comment.name
          }}</span>
          <span
            class="text-caption font-weight-bold gray--text pt-1 font span"
            >{{ newDateAndTime }}</span
          >
        </v-list-item-title>

        <input name="text" type="text" value="call dynamic domain name done" />

        <v-list-item-title class="comment-list">
          <v-btn icon @click="openEmoji = !openEmoji">
            <v-icon size="18" color="gray"> mdi-emoticon-happy-outline </v-icon>
          </v-btn>

          <v-btn
            @click="showInput = true"
            icon
            class="text-body-1 font-weight-normal text-decoration-underline mx-2 py-0 font"
          >
            Reply
          </v-btn>
          <v-btn
            @click="showInput = false"
            icon
            class="text-body-1 font-weight-normal text-decoration-underline mx-2 py-0 font"
          >
            Delete
          </v-btn>
          <v-btn
            @click="showCount = !showCount"
            icon
            class="text-body-1 font-weight-normal mx-2 py-0 font"
          >
            <v-icon size="18" color="blue"> mdi-paperclip </v-icon>
          </v-btn>
          <span class="pt-3 font-weight-bold text-sm">5</span>
        </v-list-item-title>
        <v-list-item-subtitle v-if="showInput">
          <input
            name="text"
            type="text"
            value="call dynamic domain name done"
          />
        </v-list-item-subtitle>
        <div v-if="openEmoji" style="position: absolute; height: 200px">
          <picker title="Pick your emoji…" emoji="point_up" />
        </div>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
// import data from "emoji-mart-vue/data/messenger.json";
// import { NimblePicker } from "emoji-mart-vue";

import { Picker } from "emoji-mart-vue";

export default {
  data() {
    return {
      data: [
        {
          id: "smiley",
          name: "Smiling Face with Open Mouth",
          colons: ":smiley:",
          text: ":)",
          emoticons: ["=)", "=-)"],
          skin: null,
          native: "😃",
        },

        {
          id: "santa",
          name: "Father Christmas",
          colons: ":santa::skin-tone-3:",
          text: "",
          emoticons: [],
          skin: 3,
          native: "🎅🏼",
        },

        {
          id: "octocat",
          name: "Octocat",
          colons: ":octocat",
          text: "",
          emoticons: [],
          custom: true,
          imageUrl:
            "https://assets-cdn.github.com/images/icons/emoji/octocat.png?v7",
        },
      ],
      openEmoji: false,
      // insert: "",
      search: "",
      date: new Date().toLocaleString("en-us", {
        month: "short",
        year: "numeric",
        day: "numeric",
      }),

      tt: new Date().toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      }),

      showInput: false,
      showCount: false,
      commentList: [
        {
          id: 1,
          label: "MS",
          name: "new developer join with us",
        },
        {
          id: 2,
          label: "MD",
          name: "new developer join with us",
        },
        {
          id: 3,
          label: "SD",
          name: "new developer join with us",
        },
        {
          id: 4,
          label: "DM",
          name: "new developer join with us",
        },
      ],
    };
  },

  components: {
    Picker,
  },

  computed: {
    newDateAndTime() {
      return this.date + " at " + this.tt;
    },
  },

  methods: {
    append(emoji) {
      this.input += emoji;
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>

<style scoped>
.comment-list {
  display: grid;
  grid-template-columns: 30px 60px 60px 40px 30px;
}
.v-overlay {
  display: none !important;
}

input {
  background: #fff;
  padding: 10px;
  box-shadow: 0 0 2px gray;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
}
</style>
