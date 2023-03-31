<template>
  <div>
    <v-list-item-title class="d-flex justify-start">
      <span class="text-body-1 font-weight-bold font px-2">{{ name }}</span>
      <span class="text-caption font-weight-bold gray--text pt-1 font span">{{
        newDateAndTime
      }}</span>
    </v-list-item-title>

    <input name="text" type="text" value="call dynamic domain name done" />
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      date: new Date().toLocaleString("en-us", {
        month: "short",
        year: "numeric",
        day: "numeric",
      }),

      tt: new Date().toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  },

  computed: {
    newDateAndTime() {
      return this.date + " at " + this.tt;
    },
  },
};
</script>

<style scoped>
input {
    width: 100%;
  background: #fff;
  padding: 10px;
  box-shadow: 0 0 2px gray;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
}
</style>
