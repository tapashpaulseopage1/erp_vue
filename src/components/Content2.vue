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
import FirstBox from "./FirstBox.vue";
import SecondBox from "./SecondBox.vue";
import ThirdBox from "./ThirdBox.vue";

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