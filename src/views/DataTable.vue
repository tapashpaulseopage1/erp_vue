<template>
  <v-container>
    <v-row class="d-flex justify-center pt-10">
      <v-card>
        <v-card-title class="d-flex">
          Table
          <v-spacer></v-spacer>
          <div>
            <v-select
              v-model="selectedHeaders"
              :items="headers"
              label="Select Columns"
              multiple
              outlined
              return-object
            >
              <template v-slot:selection="{ item, index }">
                <v-chip v-if="index < 2">
                  <span>{{ item.text }}</span>
                </v-chip>
                <span v-if="index === 2" class="grey--text caption"
                  >(+{{ selectedHeaders.length - 2 }} others)</span
                >
              </template>
            </v-select>
          </div>
        </v-card-title>

        <!-- {{ 2.3333 | percent }} -->

        <v-card-text>
          <v-data-table
            :headers="showHeaders"
            :items="desserts"
            v-sortable-table="{ onEnd: sortTheHeadersAndUpdateTheKey }"
            :key="anIncreasingNumber"
            class="content1"
            mobile-breakpoint="0"
          >
            <!-- <template v-slot:item.Project Budget="{ item }"
              >{{ value | percent }}
            </template> -->
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2"> mdi-pencil </v-icon>
              <v-icon small> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- <v-row>
      <table>
        <tbody>
          <tr v-for="product in desserts" :key="product.id">
            <th scope="row">{{ product.id }}</th>
            <td>{{ product.project_name }}</td>
            <td>{{ product.project_link }}</td>
            <td>{{ product.source_id }}</td>
            <td>{{ product.status_id }}</td>
            <td>{{ product.deal_status }}</td>
            <td>{{ product.client_name }}</td>
            <td>
              <button
                @click="deleteProduct(product.id)"
                class="btn btn-small btn-warning"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </v-row> -->
  </v-container>
</template>

<script>
import { Sortable } from "sortablejs";
import axios from "axios";
// import DateTable from "../Api/DataTable";

function watchClass(targetNode, classToWatch) {
  let lastClassState = targetNode.classList.contains(classToWatch);
  const observer = new MutationObserver((mutationsList) => {
    for (let i = 0; i < mutationsList.length; i++) {
      const mutation = mutationsList[i];
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const currentClassState =
          mutation.target.classList.contains(classToWatch);
        if (lastClassState !== currentClassState) {
          lastClassState = currentClassState;
          if (!currentClassState) {
            mutation.target.classList.add("sortHandle");
          }
        }
      }
    }
  });
  observer.observe(targetNode, { attributes: true });
}

export default {
  data: () => ({
    anIncreasingNumber: 1,
    headers: [
      { text: "SL. No", value: "id" },
      { text: "Project Name", value: "client_name" },
      { text: "Project Link", value: "project_link" },
      {
        text: "Project Budget",
        value: "value",
      },
      { text: "Bid Value", value: "status_id" },
      { text: "Created", value: "created_at" },
      { text: "Created By", value: "added_by" },
      { text: "Bidding Delay Time", value: "bidding_minutes" },
      { text: "Status", value: "status_id" },
      { text: "Deal Status", value: "deal_status" },

      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    selectedHeaders: [],
    tableHeader: [],
  }),

  created() {
    this.tableHeader = this.headers;
    this.selectedHeaders = this.tableHeader;
    this.fatchData();
  },

  computed: {
    showHeaders() {
      return this.headers.filter((s) => this.selectedHeaders.includes(s));
    },
  },

  filters: {
    percent: function (dec) {
      return dec.toFixed(2);
    },
  },

  methods: {
    fatchData() {
      axios
        .get("https://seopage1erp.website/api/leads")
        .then((response) => {
          const tdata = response.data;
          this.desserts = tdata.data;
          // console.log(response.data);
          console.log(this.desserts);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    sortTheHeadersAndUpdateTheKey(evt) {
      const headersTmp = this.showHeaders;
      const oldIndex = evt.oldIndex;
      const newIndex = evt.newIndex;
      if (newIndex >= headersTmp.length) {
        let k = newIndex - headersTmp.length + 1;
        while (k--) {
          headersTmp.push(undefined);
        }
      }
      headersTmp.splice(newIndex, 0, headersTmp.splice(oldIndex, 1)[0]);
      this.table = headersTmp;
      this.anIncreasingNumber += 1;
    },
  },

  directives: {
    "sortable-table": {
      inserted: (el, binding) => {
        el.querySelectorAll("th").forEach((draggableEl) => {
          watchClass(draggableEl, "sortHandle");
          draggableEl.classList.add("sortHandle");
        });
        Sortable.create(
          el.querySelector("tr"),
          binding.value ? { ...binding.value, handle: ".sortHandle" } : {}
        );
      },
    },
  },
};
</script>

<style>
/* .v-data-table > .v-data-table__wrapper .v-data-table__mobile-table-row {
  overflow: scroll;
}

@media screen and (max-width: 400px) {
  .v-data-table > .v-data-table__wrapper .v-data-table__mobile-table-row {
    overflow: scroll;
  }
} */
</style>
