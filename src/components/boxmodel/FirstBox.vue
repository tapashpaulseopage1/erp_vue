<template>
  <v-card class="rounded-lg">
    <v-card-title class="d-flex pa-2">
      <v-icon class="mx-2" size="10" color="#1D82F5">mdi-circle</v-icon>
      <span class="text-body-1 font-weight-bold">Doing</span>
    </v-card-title>
    <v-card-text>
      <v-list class="pa-0">
        <v-list-item class="pa-0">
          <v-list-item-title class="text font">
            Start Date :
          </v-list-item-title>
          <v-list-item-subtitle> 28-02-2023</v-list-item-subtitle>
        </v-list-item>
        <v-list-item class="pa-0">
          <v-list-item-title class="text font"> Due Date : </v-list-item-title>
          <v-list-item-subtitle> 03-03-2023 </v-list-item-subtitle>
        </v-list-item>
        <v-list-item class="pa-0">
          <v-list-item-title class="text font">
            Time Estimate :
          </v-list-item-title>
          <v-list-item-subtitle> 8 hour 30 min </v-list-item-subtitle>
        </v-list-item>
        <v-list-item class="pa-0">
          <v-list-item-title class="text font">
            Hours Logged :
          </v-list-item-title>
          <v-list-item-subtitle> 5 hour 25 min</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.v-list-item {
  min-height: 30px !important;
}
.text {
  color: #777777;
  font-size: 14px;
  width: 150px;
}
</style>