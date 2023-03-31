<template>
  <v-row class="d-flex justify-start py-1 rounded-lg">
    <v-col
      cols="12"
      sm="12"
      md="9"
      lg="9"
      xl="9"
      class="d-block d-md-flex justify-start"
    >
      <div v-for="button in buttonList" :key="button.id" class="btn">
        <v-btn outlined class="pa-2 mx-2 my-2">
          <v-icon class="text-h5 font-bold black-text">{{
            button.icon
          }}</v-icon>
          {{ button.title }}
        </v-btn>
      </div>
    </v-col>
    <v-col cols="12" sm="12" md="3" lg="3" xl="3" class="d-flex justify-end">
      <v-btn icon class="mx-2">
        <v-icon class="text-h3 font-bold"> mdi-dots-horizontal </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      buttonList: [
        {
          id: 1,
          title: "Start Timer",
          icon: "mdi-play-outline",
        },
        {
          id: 2,
          title: "Mark As Complete",
          icon: "mdi-check",
        },
        {
          id: 3,
          title: "Request Time Extension",
          icon: "mdi-plus",
        },
      ],
    };
  },
};
</script>

<style>
</style>
