<template>
  <div class="content1">
    <!-- header -->
    <v-row class="d-flex justify-start py-1 rounded-lg">
      <v-col
        cols="12"
        sm="12"
        md="9"
        lg="9"
        xl="9"
        class="d-block d-md-flex justify-start"
      >
        <div v-for="button in buttonList" :key="button.id" class="btn">
          <v-btn outlined class="pa-2 mx-2 my-2">
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
        <!-- <v-card class="card">
          <v-card-text class="pa-0 card"> -->

        <!-- </v-card-text>
        </v-card> -->
      </v-col>
    </v-row>

    <!-- card -->

    <div class="pa-2" v-for="detail in details" :key="detail.id">
      <!-- card -->
      <v-card class="my-1 rounded-lg" v-if="detail.text1">
        <v-card-title
          class="red darken-2 rounded-tl-lg rounded-tr-lg d-flex justify-space-between font font1 white--text card-title card-t2"
        >
          {{ detail.title }}
          <v-avatar size="32" color="white">
            <v-icon class="font-weight-bold text-h6" color="red">
              mdi-chevron-up
            </v-icon>
          </v-avatar>
        </v-card-title>

        <v-card-text class="overflow-y-auto pa-2 font font2 card-text light">
          <!-- first box -->
          <div class="card-border">
            <div class="d-block d-md-flex pa-1 box">
              <div
                class="pa-1 indigo lighten-5 rounded-lg d-flex justify-space-between align-center d-md-block box3"
              >
                <span class="red--text text-h6">{{ detail.number }}</span>
                <div class="text-caption date">
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
                    {{ detail.text1 }} {{ detail.text2 }}
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
          <!-- second box -->
          <div class="card-border">
            <div class="d-block d-md-flex pa-1 box">
              <div
                class="pa-1 indigo lighten-5 rounded-lg d-flex justify-space-between align-center d-md-block box3"
              >
                <span class="red--text text-h6">02</span>
                <div class="text-caption date">
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
              <a
                href="#"
                @click="dialog2 = true"
                text
                class="blue--text pa-0 text-decoration-none"
              >
                Read full guideline
              </a>
              <!-- dialog box for show text -->
              <v-dialog v-model="dialog2" width="800px" class="">
                <v-card class="p-2">
                  <v-card-text class="pa-4 font font2 text-justify">
                    {{ detail.text1 }} {{ detail.text2 }}
                  </v-card-text>
                  <v-card-actions class="d-flex justify-end py-1">
                    <v-btn color="primary" text @click="dialog2 = false"
                      >Close</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <!--end dialog box  -->
            </div>
          </div>

          <!-- </div> -->
        </v-card-text>
      </v-card>

      <!-- card2 -->
      <v-card class="my-1 rounded-lg" v-else>
        <v-card-title
          class="rounded-tl-lg rounded-tr-lg d-flex justify-start font font1 card-t"
        >
          {{ detail.title }}
        </v-card-title>
        <v-card-text class="overflow-scroll pa-2 font font2 card-text">
          {{ detail.text | truncate(500) }}
          <a
            href="#"
            @click="dialog = true"
            text
            class="blue--text pa-0 text-decoration-none"
          >
            Read full guideline
          </a>
          <!-- dialog box for show text -->
          <v-dialog v-model="dialog" width="800px" class="">
            <v-card class="p-2">
              <v-card-text class="pa-4 font font2 text-justify">
                {{ detail.text }}
              </v-card-text>
              <v-card-actions class="d-flex justify-end py-1">
                <v-btn color="primary" text @click="dialog = false"
                  >Close</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!--end dialog box  -->
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
      dialog: false,
      dialog1: false,
      dialog2: false,
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
  /* height: 1494px; */
}
.btn {
  display: flex;
  justify-content: start;
}

.card {
  border: none;
}

.card-title {
  height: 53px !important;
}
.tag {
  width: 25%;
}

.gary-text {
  color: #777777;
  font-weight: 400;
  font-size: 16px;
}
.card-t {
  background: #e7effc;
}
.card-t2 {
  background: #e33e4f;
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

.font1 {
  font-size: 16px;
  font-weight: 400;
  color: #777777;
}

.font2 {
  font-size: 14px;
}

.box2 {
  width: 85%;
}

.box3 {
  width: 15%;
  height: auto;
}

.card-text {
  height: 171px;
  overflow-y: auto;
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
