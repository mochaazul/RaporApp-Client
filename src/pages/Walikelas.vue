<template>
  <v-row>
    <v-col cols="12"> 
      <tabel-walikelas/>
    </v-col>
  </v-row>
</template>

<script>
import TabelWalikelas from '../components/Walikelas/TabelWalikelas.vue';
export default {
  name:"Walikelas",
  components:{TabelWalikelas}
};
</script>
