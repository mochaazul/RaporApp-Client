<template>
  <v-sheet rounded="lg" elevation="0">
    <div class="pa-3 mb-0 d-flex align-baseline">
      <v-icon>mdi-bullhorn</v-icon>
      <h1 class="title text--primary">Pengumuman</h1>
    </div>
    <v-container class="pr-10">
      <v-timeline dense>
        <v-timeline-item fill-dot class="white--text mb-1" color="orange" large>
          <template v-slot:icon>
            <span><v-icon>mdi-bullhorn</v-icon></span>
          </template>
          <v-text-field
            v-model="input"
            hide-details
            flat
            label="Buat pengumuman ... "
            solo
            @keydown.enter="comment"
          >
            <template v-slot:append>
              <v-btn class="mx-0" depressed @click="comment"> Post </v-btn>
            </template>
          </v-text-field>
        </v-timeline-item>

        <v-slide-x-transition group>
          <v-timeline-item
            v-for="event in timeline"
            :key="event.id"
            class="mb-1"
            color="pink"
            small
          >
            <v-row justify="space-between">
              <v-col cols="7" v-text="event.text"></v-col>
              <v-col class="text-right" cols="5" v-text="event.time"></v-col>
            </v-row>
          </v-timeline-item>
        </v-slide-x-transition>

        <v-timeline-item class="mb-1" hide-dot>
          <span>TODAY</span>
        </v-timeline-item>

        <v-timeline-item
          class="mb-4"
          color="grey"
          icon-color="grey lighten-2"
          small
        >
          <v-row justify="space-between">
            <v-col cols="7"> This order was archived. </v-col>
            <v-col class="text-right" cols="5"> 15:26 EDT </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item class="mb-4" small>
          <v-row justify="space-between">
            <v-col cols="7">
              <v-chip class="white--text ml-0" color="purple" label small>
                APP
              </v-chip>
              Digital Downloads fulfilled 1 item.
            </v-col>
            <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item class="mb-4" color="grey" small>
          <v-row justify="space-between">
            <v-col cols="7">
              Order confirmation email was sent to John Leider
              (john@vuetifyjs.com).
            </v-col>
            <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item class="mb-4" hide-dot>
          <v-btn class="mx-0"> Resend Email </v-btn>
        </v-timeline-item>

        <v-timeline-item class="mb-4" color="grey" small>
          <v-row justify="space-between">
            <v-col cols="7">
              A $15.00 USD payment was processed on PayPal Express Checkout
            </v-col>
            <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="grey" small>
          <v-row justify="space-between">
            <v-col cols="7">
              John Leider placed this order on Online Store (checkout
              #1937432132572).
            </v-col>
            <v-col class="text-right" cols="5"> 15:25 EDT </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "PengumumanCard",
  data: () => ({
    events: [],
    input: null,
    nonce: 0,
  }),
  computed: {
    timeline() {
      return this.events.slice().reverse();
    },
  },

  methods: {
    comment() {
      const time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(
          /:\d{2}\sGMT-\d{4}\s\((.*)\)/,
          (match, contents, offset) => {
            return ` ${contents
              .split(" ")
              .map((v) => v.charAt(0))
              .join("")}`;
          }
        ),
      });

      this.input = null;
    },
  },
};
</script>

<style>
</style>