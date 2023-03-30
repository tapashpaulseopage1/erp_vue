<template>
  <v-container class="">
    <v-file-input
      accept="image/*"
      label="Attach file here"
      prepend-icon=""
      append-icon="mdi-paperclip"
      multiple
      color="blue"
      v-model="files"
      @change="addFiles"
      style="width: 40% !important; border: none !important"
    ></v-file-input>
    <v-row class="d-block row22">
      <v-col class="d-flex justify-start">
        <div class="box21" v-for="image in imageList" :key="image.id">
          <div>
            <v-img :src="image.image" width="40px" height="40px" />
            <span class="text-caption">{{ image.name }}</span>
          </div>
          <v-avatar size="18" color="red" class="mt-n1">
            <v-icon size="16"> mdi-close </v-icon>
          </v-avatar>
        </div>
      </v-col>
      <v-col class="d-flex justify-start pa-2">
        <v-btn color="primary" class="text-body-1 font-weight-normal">
          add comment
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    files: [],
    readers: [],
    imageList: [
      {
        id: 1,
        name: "file.png",
        image:
          "https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png",
      },
      {
        id: 2,
        name: "file1.png",
        image:
          "https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png",
      },
    ],
  }),
  methods: {
    addFiles() {
      //   const { name } = this.files;
      console.log("files", this.files);
      this.imageList.push(this.files);
      console.log(this.imageList);
      //   this.files.forEach((file, f) => {
      //     this.readers[f] = new FileReader();
      //     this.readers[f].onloadend = (e) => {
      //       let fileData = this.readers[f].result;
      //       let imgRef = this.$refs.file[f];
      //       imgRef.src = fileData;
      //       console.log(fileData);
      //       // send to server here...
      //     };

      //     this.readers[f].readAsDataURL(this.files[f]);
      //   });
    },
  },
};
</script>

<style scoped>
.row {
  width: 100%;
  height: 80px;
}
.row22 {
  background: #fff;
  width: 100%;
  height: 100%;
}

/* .ava {
  position: absolute;
  top: 10px;
  right: 10px;
} */

.box21 {
  width: 60px;
  height: 70px;
  background: rgba(128, 128, 128, 0.276);
  padding: 5px;
  margin: 5px;
  display: flex;
}
.v-input__slot {
  width: 40% !important;
}
</style>
