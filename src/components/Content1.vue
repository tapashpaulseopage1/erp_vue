<template>
  <div class="content1">
    <!-- header -->
    <v-row class="d-flex justify-start py-5 rounded-lg">
      <v-col
        cols="12"
        sm="12"
        md="9"
        lg="9"
        xl="9"
        class="d-flex justify-start"
      >
        <div v-for="button in buttonList" :key="button.id">
          <v-btn outlined class="pa-2 mx-2">
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

    <v-divider></v-divider>

    <!-- second header -->
    <v-row>
      <v-col cols="6" sm="6" md="3" lg="3" xl="3">
        <div
          v-for="tags in tagList"
          :key="tags"
          class="d-flex justify-start px-4"
        >
          <span class="py-3 gary-text font">{{ tags }} : </span>
        </div>
      </v-col>

      <v-col cols="6" sm="6" md="9" lg="9" xl="9">
        <div
          v-for="tagd in tagDetails"
          :key="tagd.id"
          class="d-flex justify-start px-4"
        >
          <div v-if="tagd.img">
            <div class="d-flex my-1">
              <div>
                <v-avatar size="32">
                  <img :src="tagd.img" />
                </v-avatar>
              </div>
              <div class="px-2">
                <div class="font-text mt-n2">
                  {{ tagd.name }}
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
          </div>

          <div v-else-if="tagd.color" class="py-1">
            <div class="d-flex pt-2">
              <v-icon :color="tagd.color" class="text-h3">{{
                tagd.icon
              }}</v-icon>
              <span class="font-text pt-3">{{ tagd.text }}</span>
            </div>
          </div>

          <div v-else class="pt-1">
            <span class="font-text mt-2">
              {{ tagd.text }}
            </span>
          </div>
          <!-- <span class="py-3 gary-text font">{{ tags }} : </span> -->
        </div>
      </v-col>
    </v-row>

    <!-- card -->

    <div class="pa-2 mt-1" v-for="detail in details" :key="detail.id">
      <!-- card -->
      <v-card class="my-1" v-if="detail.text1">
        <v-card-title
          class="red darken-2 rounded-lg d-flex justify-space-between font font1 white--text"
        >
          {{ detail.title }}
          <v-avatar size="32" color="white">
            <v-icon class="font-weight-bold text-h6" color="red">
              mdi-chevron-up
            </v-icon>
          </v-avatar>
        </v-card-title>
        <v-card-text class="overflow-scroll pa-2 font font2" height="171px">
          <!-- <div class="w-full"> -->
          <div class="d-flex pa-1">
            <div class="pa-1 indigo lighten-5 rounded-lg box">
              <span class="red--text text-h6">{{ detail.number }}</span>
              <div class="text-caption">
                <span class="text-caption font-weight-bold">Date:</span
                >{{ detail.date }}
              </div>
              <div class="text-caption">
                <span class="text-caption font-weight-bold">Time:</span
                >{{ detail.time }}
              </div>
            </div>

            <div class="pa-1 font box2">{{ detail.text1 }}</div>
          </div>

          <div class="pa-2">
            {{ detail.text2 }}
          </div>
          <!-- </div> -->
        </v-card-text>
      </v-card>

      <!-- card2 -->
      <v-card class="my-1" v-else>
        <v-card-title
          class="indigo lighten-5 rounded-lg d-flex justify-start font font1"
        >
          {{ detail.title }}
        </v-card-title>
        <v-card-text class="overflow-scroll pa-2 font font2" height="171px">
          {{ detail.text }}
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "content1",
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

      tagList: [
        "Parent Task",
        "Project",
        "Milestone",
        "Assigned To",
        "Assigned By",
        "Priority",
        "Task Category",
      ],

      tagDetails: [
        {
          id: 1,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          id: 2,
          text: "Lorem Ipsum is simply dummy text of the.",
          icon: "mdi-circle-small",
          color: "primary",
        },
        {
          id: 3,
          text: "Lorem Ipsum is simply dummy text of the.",
          icon: "mdi-circle-small",
          color: "red",
        },
        {
          id: 4,
          name: "MD.Sadik Istiak",
          title: "UI/UX Designer",
          img: require("../assets/image/img1.png"),
          txt: "It's You",
        },
        {
          id: 5,
          name: "MD.Sadik Istiak",
          title: "UI/UX Designer",
          img: require("../assets/image/img1.png"),
        },
        {
          id: 6,
          text: "Medium",
          icon: "mdi-circle-small",
          color: "orange ",
        },
        {
          id: 7,
          text: "Frontend Design",
        },
      ],
      details: [
        {
          id: 1,
          title: "General Guidelines",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with Read full guideline",
        },
        {
          id: 2,
          title: "Task Revision from Client",
          number: "01",
          date: "02-03-23",
          time: "03:20 PM",
          text1:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic  ",
          text2:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with Read full guideline",
        },
        {
          id: 3,
          title: "Task Revision from User",
          number: "01",
          date: "02-03-23",
          time: "03:20 PM",
          text1:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic ",
          text2:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with Read full guideline",
        },
        {
          id: 4,
          title: "Task Description",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with Read full guideline",
        },
      ],
    };
  },
};
</script>

<style scoped>
.content1 {
  background: #fff;
  width: 100%;
  height: auto;
}

.gary-text {
  color: #777777;
  font-weight: 400;
  font-size: 16px;
}

.font-text {
  font-size: 14px;
  font-weight: 400;
  padding-top: 5px;
  font-family: "Poppins", sans-serif;
}

.font-text2 {
  font-size: 8px;
  font-family: "Poppins", sans-serif;
}

.font1 {
  font-size: 16px;
  font-weight: 400;
}

.font2 {
  font-size: 14px;
}
.box {
  width: 110px;
  height: 90px;
}
.box2 {
  width: 100%;
}
</style>
