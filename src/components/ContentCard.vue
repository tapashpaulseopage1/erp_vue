<template>
  <v-card class="my-1 rounded-lg">
    <v-card-title
      class="rounded-tl-lg rounded-tr-lg d-flex justify-start font font1 card-t"
    >
      {{ detail.title }}
    </v-card-title>
    <v-card-text class="overflow-scroll pa-2 font font2 card-text">
      {{ detail.text | truncate(500) }}
      <a
        href="#"
        @click="dialog = true"
        text
        class="blue--text pa-0 text-decoration-none"
      >
        Read full guideline
      </a>
      <!-- dialog box for show text -->
      <v-dialog v-model="dialog" width="800px" class="">
        <v-card class="p-2">
          <v-card-text class="pa-4 font font2 text-justify">
            {{ detail.text }}
          </v-card-text>
          <v-card-actions class="d-flex justify-end py-1">
            <v-btn color="primary" text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!--end dialog box  -->
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["detail"],

  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.card-t {
  background: #e7effc;
}

.font1 {
  font-size: 16px;
  font-weight: 400;
  color: #777777;
}

.font2 {
  font-size: 14px;
}

.card-text {
  height: 171px;
  overflow-y: auto;
}
</style>