<template>
  <v-expansion-panels focusable>
    <v-expansion-panel>
      <v-expansion-panel-header
        class="white--text font font1"
        color="red darken-2"
      >
        <template v-slot:actions>
          <v-icon color="red"> $expand </v-icon>
        </template>
        {{ detail.title }}</v-expansion-panel-header
      >
      <v-expansion-panel-content
        class="light"
        style="height: 171px; overflow-y: scroll; overflow-x: hidden"
      >
        <div class="card-border" v-for="ct in detail.lists" :key="ct.id">
          <!-- {{ ct }} -->
          <div class="d-block d-md-flex pa-1">
            <div
              class="pa-1 indigo lighten-5 rounded-lg d-flex justify-space-between align-center d-md-block box3"
            >
              <span class="red--text text-h6">{{ ct.number }}</span>
              <div class="text-caption">
                <span class="text-caption font-weight-bold">Date:</span
                >{{ ct.date }}
              </div>
              <div class="text-caption">
                <span class="text-caption font-weight-bold">Time:</span
                >{{ ct.time }}
              </div>
            </div>

            <div class="pa-1 font font2 box2">{{ ct.text1 }}</div>
          </div>

          <div class="pa-2 font font2">
            {{ ct.text2 }}
            <a
              href="#"
              @click="dialog1 = true"
              text
              class="blue--text pa-0 text-decoration-none"
            >
              Read full guideline
            </a>
            <!-- dialog box for show text -->
            <v-dialog v-model="dialog1" width="800px" class="">
              <v-card class="p-2">
                <v-card-text class="pa-4 font font2 text-justify">
                  {{ ct.text1 }} {{ ct.text2 }}
                </v-card-text>
                <v-card-actions class="d-flex justify-end py-1">
                  <v-btn color="primary" text @click="dialog1 = false"
                    >Close</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
            <!--end dialog box  -->
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: ["detail"],
  data() {
    return {
      dialog1: false,
    };
  },
};
</script>

<style>
.v-expansion-panel-header__icon {
  color: #f30505 !important;
  width: 30px !important;
  height: 30px !important;
  border-radius: 50% !important;
  background: white !important;
  display: flex;
  justify-content: center;
}

.font1 {
  font-size: 16px;
  font-weight: 400;
  color: #777777;
}

.box3 {
  width: 15%;
  height: auto;
}

.box2 {
  width: 85%;
}

.font2 {
  font-size: 14px;
  color: #777777;
}

.card-border {
  box-shadow: 0 0 5px blue;
  margin-top: 10px;
  border-radius: 10px;
}

.light::-webkit-scrollbar {
  width: 10px;
}

.light::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.light::-webkit-scrollbar-thumb {
  background: #616e80;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.light::-webkit-scrollbar-thumb:hover {
  background: #616e80;
}

@media only screen and (max-width: 600px) {
  .box2 {
    width: 100%;
  }

  .box3 {
    width: 100%;
    height: auto;
  }

  .btn {
    display: flex;
    justify-content: center;
  }
}
</style>
