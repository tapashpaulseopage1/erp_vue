<template>
  <v-avatar size="36" color="red" class="pa-0 mt-n10">
    <span class="white--text font-weight-normal font">
      {{ label }}
    </span>
  </v-avatar>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style>
</style>