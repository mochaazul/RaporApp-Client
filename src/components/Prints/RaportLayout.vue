<template>
  <section class="pdf-content">
    <div class="title">
      <p>DAFTAR NILAI RAPORT SEMESTER GANJIL</p>
    </div>
    <v-row no-gutters>
      <v-col cols="10">
        <v-row no-gutters style="padding:2.5px 0px">
          <v-col cols="4">
            Nama Peserta Didik
          </v-col>      
          <v-col>
            :<span style="margin-left:1rem;">{{siswa.nama}}</span>
          </v-col>
        </v-row>
        <v-row no-gutters style="padding:2.5px 0px">
          <v-col cols="4">
            Nomor Induk Siswa
          </v-col>      
          <v-col>
            :<span style="margin-left:1rem;">{{siswa.nis}}</span>
          </v-col>
        </v-row>
        <v-row no-gutters style="padding:2.5px 0px">
          <v-col cols="4">
            Kelas
          </v-col>      
          <v-col>
            :<span style="margin-left:1rem;">{{siswa.kelas}}</span>
          </v-col>
        </v-row>
        <v-row no-gutters style="padding:2.5px 0px">  
          <v-col cols="4">
            Semester
          </v-col>      
          <v-col>
            :<span style="margin-left:1rem;">{{siswa.sem}}</span>
          </v-col>
        </v-row>
        <v-row no-gutters style="padding:2.5px 0px">
          <v-col cols="4">
            Tahun Pelajaran
          </v-col>      
          <v-col>
            :<span style="margin-left:1rem;">{{siswa.tapel}}</span>
          </v-col>
        </v-row>
        <v-row no-gutters style="padding:2.5px 0px">
          <v-col cols="4">
            Sekolah
          </v-col>      
          <v-col>
            :<span style="margin-left:1rem;">SMK Al-Hidayah Kota Cirebon</span>
          </v-col>
        </v-row>

      </v-col>
      <v-col cols="2" style="border:1px solid black;">
        barcode
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: "PrintLayout",
  props: ["siswa"],
  data() {
    return {};
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$emit("domRendered");
      }, 1000);
    });
  },
};
</script>

<style lang="scss" scoped>
.pdf-content{
  width:100%;  
  margin-top:1em;
  padding-left: 4em;
  padding-right: 4em;
  font-family:Arial, Helvetica, sans-serif;
}
.title{
  
  margin-bottom: 1.5rem;
  p{
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    text-decoration: underline;
    font-weight: bold;
    font-size: 14pt;
  }
}
</style>