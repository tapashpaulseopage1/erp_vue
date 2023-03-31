<template>
  <v-row>
    <v-col cols="12" sm="12" md="12" lg="12" xl="12">
      <v-list>
        <v-list-item
          v-for="tagd in tagDetails"
          :key="tagd.id"
          class="d-flex w-full"
        >
          <div class="font1 font tag">{{ tagd.name }} :</div>
          <!-- <div > -->
          <v-list-item v-if="tagd.color">
            <div class="d-flex">
              <v-icon :color="tagd.color" size="10" class="mt-3 mx-2"
                >mdi-circle</v-icon
              >

              <span class="font-text pt-3">{{ tagd.text }}</span>
            </div>
          </v-list-item>

          <v-list-item v-else-if="tagd.img">
            <div class="d-flex">
              <div>
                <v-avatar size="32">
                  <img :src="tagd.img" />
                </v-avatar>
              </div>
              <div class="px-2">
                <div class="font-text mt-n2">
                  {{ tagd.name1 }}
                </div>
                <div class="font-text2">
                  {{ tagd.title }}
                </div>
              </div>
              <div v-if="tagd.txt">
                <v-chip
                  class="white--text text-caption"
                  x-small
                  color="#686868"
                >
                  {{ tagd.txt }}
                </v-chip>
              </div>
              <div v-else></div>
            </div>
          </v-list-item>

          <v-list-item v-else>
            <span class="font-text">
              {{ tagd.text }}
            </span>
          </v-list-item>
          <!-- </div> -->
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      tagDetails: [
        {
          id: 1,
          name: "Parent Task",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 2,
          name: "Project",
          text: "Lorem Ipsum is simply dummy text of the.",
          icon: "mdi-circle-small",
          color: "primary",
        },
        {
          id: 3,
          name: "Milestone",
          text: "Lorem Ipsum is simply dummy text of the.",
          icon: "mdi-circle-small",
          color: "red",
        },
        {
          id: 4,
          name: " Assigned To",
          name1: "MD.Sadik Istiak",
          title: "UI/UX Designer",
          img: require("../assets/image/img1.png"),
          txt: "It's You",
        },
        {
          id: 5,
          name: "Assigned By",
          name1: "MD.Sadik Istiak",
          title: "UI/UX Designer",
          img: require("../assets/image/img1.png"),
        },
        {
          id: 6,
          name: "Priority",
          text: "Medium",
          icon: "mdi-circle-small",
          color: "orange ",
        },
        {
          id: 7,
          name: "Task Category ",
          text: "Frontend Design",
        },
      ],
    };
  },
};
</script>

<style scoped>
.font1 {
  font-size: 16px;
  font-weight: 400;
  color: #777777;
}
.tag {
  width: 25%;
}
.font-text {
  font-size: 12px;
  font-weight: 600;
  padding-top: 5px;
  font-family: "Poppins", sans-serif;
  color: #283151;
}

.font-text2 {
  font-size: 8px;
  font-family: "Poppins", sans-serif;
}
</style>
