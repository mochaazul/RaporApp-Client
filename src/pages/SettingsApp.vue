<template>
  <v-row>
    <v-col>
     <div v-html="templateServer">asd</div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name:'DataApp',
  computed:{
    templateServer(){
      return this.$store.state.testing
    }
  },
  mounted(){
    this.$store.dispatch("TESTING")
  }
};
</script>

<style>
</style>