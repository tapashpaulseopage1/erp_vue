<template>
  <div class="content2 pa-3 rounded-lg">
    <div class="block">
      <FirstBox />
      <SecondBox />
      <ThirdBox />
    </div>
  </div>
</template>

<script>
import FirstBox from "./boxmodel/FirstBox.vue";
import SecondBox from "./boxmodel/SecondBox.vue";
import ThirdBox from "./boxmodel/ThirdBox.vue";

export default {
  name: "content2",
  data() {
    return {};
  },
  components: {
    FirstBox,
    SecondBox,
    ThirdBox,
  },
};
</script>

<style scoped>
.content2 {
  background: #e7effc;
  height: 1225px;
  width: 60%;
}
.v-list-item {
  min-height: 30px !important;
}

.sub {
  width: 30%;
}

@media only screen and (max-width: 600px) {
  .content2 {
    background: #e7effc;
    height: 1225px;
    width: 100%;
  }
}
</style>