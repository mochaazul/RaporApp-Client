<template>
  <v-row>
    <v-col cols="12" md="8">
      <pengumuman-card />
    </v-col>
    <v-col cols="12" md="4">
      <timeline-card />
    </v-col>
  </v-row>
</template>

<script>
import PengumumanCard from "../components/Dashboard/PengumumanCard.vue";
import TimelineCard from "../components/Dashboard/TimelineCard.vue";
export default {
  components: { PengumumanCard, TimelineCard },
  name: "Dashboard",
};
</script>

<style>
</style>