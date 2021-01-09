<template>
  <v-row>
    <v-col cols="12" md="6">
      <tabel-users/>
    </v-col>
    <v-col cols="12" md='6'>
      <tabel-users/>
    </v-col>
  </v-row>
</template>

<script>
import TabelUsers from '../components/UserAccounts/TabelUsers.vue';
export default {
  name:'UserAccounts',
  components:{TabelUsers}
};
</script>
