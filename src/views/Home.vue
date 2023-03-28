<template>
  <div class="home">
    <v-container class="container">
      <HeaderTag />
      <v-row class="d-flex pa-2">
        <v-col cols="12" sm="12" lg="8" md="8" xl="8" class="part1">
          <Content1 />
        </v-col>

        <v-col
          cols="12"
          sm="12"
          lg="4"
          md="4"
          xl="4"
          class="pa-2 d-flex justify-start"
        >
          <Content2 />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HeaderTag from "@/components/HeaderTag.vue";
import Content1 from "../components/Content1.vue";
import Content2 from "../components/Content2.vue";

export default {
  name: "home",
  data() {
    return {};
  },

  components: {
    HeaderTag,
    Content1,
    Content2,
  },
};
</script>

<style scoped>
.container {
  background: #f2f4f7 0% 0% no-repeat padding-box;
}
.part1 {
  width: 743px;
}
</style>


