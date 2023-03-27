<template>
  <div class="home">
    <v-container class="container">
      <div class="d-flex justify-space- mt-5 mb-2">
        <span class="font px-2 text-body-1 font-weight-bold pt-1"
          >Subtask:
        </span>
        <span class="font text-body-1 font-bold py-1"
          >Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.</span
        >
      </div>
      <v-row class="d-flex pa-2">
        <v-col cols="12" sm="12" lg="8" md="8" xl="8" class="">
          <Content1 />
        </v-col>

        <v-col
          cols="12"
          sm="12"
          lg="4"
          md="4"
          xl="4"
          class="pa-2 d-flex justify-center"
        >
          <Content2 />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Content1 from "../components/Content1.vue";
import Content2 from "../components/Content2.vue";

export default {
  name: "home",
  data() {
    return {};
  },

  components: {
    Content1,
    Content2,
  },
};
</script>

<style scoped>
.container {
  background: #f2f4f7 0% 0% no-repeat padding-box;
}
</style>


