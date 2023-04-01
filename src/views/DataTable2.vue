<template>
  <div id="app">
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="desserts"
        sort-by="calories"
        hide-default-footer
        v-sortable-table="{ onEnd: sortTheHeadersAndUpdateTheKey }"
        :key="anIncreasingNumber"
      >
      </v-data-table>
    </v-app>
  </div>
</template>

<script>
import { Sortable } from "sortablejs";

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
    dialog: false,
    headers: [
      { text: "SL. No", value: "id" },
      { text: "Project Name", value: "ProjectName" },
      { text: "Client Name", value: "ClientName" },
      { text: "Project Value", value: "ProjectValue" },
      { text: " Project Manager", value: "ProjectManager" },
      { text: "Start Date", value: "StartDate" },
      { text: "Expected Deadline", value: "ExpectedDeadline" },
      {
        text: "Actual Project Completion Date",
        value: "ProjectCompletionDate",
      },
      { text: " Estimated Hours", value: "EstimatedHours" },
      { text: "Total Logged Hours", value: "TotalLoggedHours" },
      { text: "Tasks", value: "Tasks" },
      { text: "Milestones", value: "Milestones" },
      { text: "Payment", value: "Payment" },
      { text: "Progress", value: "Progress" },
      { text: "Deliverable Status", value: "DeliverableStatus" },
      { text: "Project Status", value: "ProjectStatus" },
      { text: "Actions", value: "action" },
    ],
    desserts: [],
    // editedIndex: -1,
    // editedItem: { name: "", calories: 0, fat: 0, carbs: 0, protein: 0 },
    // defaultItem: { name: "", calories: 0, fat: 0, carbs: 0, protein: 0 },
  }),

  //   computed: {
  //     formTitle() {
  //       return this.editedIndex === -1 ? "New Item" : "Edit Item";
  //     },
  //   },

  //   watch: {
  //     dialog(val) {
  //       val || this.close();
  //     },
  //   },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          id: 1,
          ProjectName: "Riadus Salehin",
          ClientName: "Riadus Salehin",
          ProjectValue: "44",
          ProjectManager: "Riadus Salehin",
          StartDate: new Date().toLocaleDateString(),
          ExpectedDeadline: new Date().toLocaleDateString(),
          ProjectCompletionDate: new Date().toLocaleDateString(),
          EstimatedHours: "12h",
          TotalLoggedHours: new Date().toTimeString(),
          Tasks: 5,
          Milestones: 10,
          Payment: true,
          Progress: true,
          DeliverableStatus: "pending",
          ProjectStatus: "done",
        },
        {
          id: 2,
          ProjectName: "Riadus Salehin",
          ClientName: "Riadus Salehin",
          ProjectValue: "44",
          ProjectManager: "Riadus Salehin",
          StartDate: new Date().toLocaleDateString(),
          ExpectedDeadline: new Date().toLocaleDateString(),
          ProjectCompletionDate: new Date().toLocaleDateString(),
          EstimatedHours: "12h",
          TotalLoggedHours: new Date().toTimeString(),
          Tasks: 5,
          Milestones: 10,
          Payment: true,
          Progress: true,
          DeliverableStatus: "pending",
          ProjectStatus: "done",
        },
        {
          id: 3,
          ProjectName: "Riadus Salehin",
          ClientName: "Riadus Salehin",
          ProjectValue: "44",
          ProjectManager: "Riadus Salehin",
          StartDate: new Date().toLocaleDateString(),
          ExpectedDeadline: new Date().toLocaleDateString(),
          ProjectCompletionDate: "02/04/2023",
          EstimatedHours: "12h",
          TotalLoggedHours: new Date().toTimeString(),
          Tasks: 5,
          Milestones: 10,
          Payment: true,
          Progress: true,
          DeliverableStatus: "pending",
          ProjectStatus: "done",
        },
      ];
    },

    // editItem(item) {
    //   this.editedIndex = this.desserts.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.dialog = true;
    // },

    // deleteItem(item) {
    //   const index = this.desserts.indexOf(item);
    //   this.desserts.splice(index, 1);
    // },

    // close() {
    //   this.dialog = false;
    //   setTimeout(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem);
    //     this.editedIndex = -1;
    //   }, 300);
    // },

    // save() {
    //   if (this.editedIndex > -1) {
    //     Object.assign(this.desserts[this.editedIndex], this.editedItem);
    //   } else {
    //     this.desserts.push(this.editedItem);
    //   }
    //   this.close();
    // },
    sortTheHeadersAndUpdateTheKey(evt) {
      const headersTmp = this.headers;
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

<style scoped>
.myCheckBox .v-icon {
  opacity: 0.6 !important;
  font-size: 24px !important;
  transform: none !important;
}
</style>


