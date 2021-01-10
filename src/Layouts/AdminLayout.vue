<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <!-- SYSTEM BAR -->
    
    <v-system-bar height=24 app class="draggable">
        <h5>Rapor App Admin </h5>
        <v-spacer></v-spacer>
        <v-icon class="no-drag" @click="onMinimze">mdi-minus</v-icon>
        <v-icon class="no-drag" @click="onMaximize">mdi-checkbox-blank-outline</v-icon>
        <v-icon class="no-drag" @click="onClose">mdi-close</v-icon>      
    </v-system-bar>
    <v-navigation-drawer app mobile-breakpoint="640" v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Administrator </v-list-item-title>
          <v-list-item-subtitle> Rapor App </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item link to="/admin/">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader>Menus</v-subheader>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="{ path: '/admin/' + item.path }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-subheader>App Settings</v-subheader>
        <v-list-item
          v-for="item in appSettingsMenu"
          :key="item.title"
          link
          :to="{ path: '/admin/' + item.path }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-spacer></v-spacer>
      <v-divider class="justify-end"></v-divider>
      <v-list dense nav>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-power</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Log out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- END SIDEBAR MENU -->

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
      <div class="d-flex align-center">SMK Al-Hidayah</div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container class="pa-5">
        <v-row class="mt-1 mb-2">
          <v-col>
            <h2>
              {{ currentPage }}
            </h2>
          </v-col>
        </v-row>
        <v-divider class="mb-5"></v-divider>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf(' electron/') > -1) {
  const {remote} = require('electron')   
}

export default {
  name: "App",
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
    currentPage() {
      return this.$route.name;
    },
  },

  components: {
    HelloWorld,
  },
  methods:{
    onClose(){
      remote.getCurrentWindow().close()
    },
    onMaximize(){
      let win = remote.getCurrentWindow()
      if(win.isMaximized()){
        win.unmaximize()
      }else{
        win.maximize()
      }
    },
    onMinimze(){
      remote.getCurrentWindow().minimize()
    }
  },

  data: () => ({
    drawer: true,
    group: null,
    mini: true,
    items: [
      { title: "Data Siswa", icon: "mdi-account-multiple", path: "datasiswa" },
      { title: "Walikelas", icon: "mdi-account", path: "walikelas" },
      {
        title: "Catatan Akademik",
        icon: "mdi-library",
        path: "catatan-akademik",
      },
      {
        title: "Ketidak Hadiran",
        icon: "mdi-checkbox-marked-circle-outline",
        path: "ketidak-hadiran",
      },
      { title: "Tempat PKL", icon: "mdi-factory", path: "tempat-pkl" },
      { title: "Pengumuman", icon: "mdi-bullhorn", path: "pengumuman" },
    ],
    appSettingsMenu: [
      { title: "User Accounts", icon: "mdi-account-circle", path: "users" },
      { title: "Template", icon: "mdi-view-quilt", path: "template" },
      { title: "UI Settings", icon: "mdi-view-day", path: "ui-settings" },
    ],
    breadcrumbs: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
    value: "recent",
  }),
};
</script>

<style >
.draggable{
  -webkit-app-region:drag;
  width: 100%;
  height: 100%;
  -webkit-app-region: drag;
  
}
.no-drag{
  -webkit-app-region:no-drag;
}
</style>