<template>
<div>
    <v-card class="rounded-lg my-4" color="white" v-for="content in content3" :key="content.id">
        <v-card-title class="text-body-1 font-weight-bold pa-2">
            {{ content.name }}
        </v-card-title>

        <v-card-text class="rounded-lg pb-0">
            <v-list class="" v-if="content.lists">
                <v-list-item class="pa-0 grid list-item" v-for="list in content.lists" :key="list.id">
                    <div class="pa-1">
                        <v-avatar size="20" v-if="list.img" class="pa-2">
                            <img :src="list.img" />
                        </v-avatar>
                    </div>
                    <v-list-item-title class="text font pl-2" v-if="list.text">
                        {{ list.text }}
                    </v-list-item-title>

                    <v-list-item-subtitle class="d-flex justify-end sub">
                        {{ list.date }}
                    </v-list-item-subtitle>
                    <v-list-item-title v-if="list.time" class="text font pl-2">
                        {{ list.time }}
                    </v-list-item-title>
                    <v-icon class="text-body-1 px-2">
                        {{ list.icon }}
                    </v-icon>
                </v-list-item>
            </v-list>
        </v-card-text>
        <!-- button trigger -->
        <v-card-title class="tagg">
            <v-btn icon>
                <v-avatar size="24" color="blue">
                    <v-icon color="white" class="text-body-1 font-weight-regular">
                        mdi-chevron-left
                    </v-icon>
                </v-avatar>
            </v-btn>
        </v-card-title>
        <!-- button end trigger -->
    </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            content3: [{
                    id: 1,
                    name: "Submitted Work",
                    lists: [{
                            id: 1,
                            text: "this is me",
                            date: new Date().toLocaleDateString(),
                            icon: "mdi-eye-outline",
                        },
                        {
                            id: 2,
                            text: "this is me",
                            date: new Date().toLocaleDateString(),
                            icon: "mdi-eye-outline",
                        },
                        {
                            id: 3,
                            text: "this is me",
                            date: new Date().toLocaleDateString(),
                            icon: "mdi-eye-outline",
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Time Logs",
                    lists: [{
                            id: 1,
                            img: require("../assets/image/img1.png"),
                            date: new Date().toLocaleDateString(),
                            time: "5 hours 30min",
                        },
                        {
                            id: 2,
                            img: require("../assets/image/img1.png"),
                            date: new Date().toLocaleDateString(),
                            time: "5 hours 30min",
                        },
                        {
                            id: 3,
                            img: require("../assets/image/img1.png"),
                            date: new Date().toLocaleDateString(),
                            time: "5 hours 30min",
                        },
                    ],
                },
                {
                    id: 3,
                    name: "History",
                    lists: [{
                            id: 1,
                            text: "this is me",
                        },
                        {
                            id: 2,
                            text: "this is me",
                        },
                        {
                            id: 3,
                            text: "this is me",
                        },
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped>
.v-list-item {
    min-height: 30px !important;
}

.list-item {
    border-top: 1px solid rgba(128, 128, 128, 0.251);
}

.tagg {
    position: absolute;
    top: 30%;
    left: -10%;
    z-index: 99;
}

.text {
    color: #777777;
    font-size: 14px;
}
</style>
