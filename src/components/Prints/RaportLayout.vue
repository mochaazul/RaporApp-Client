<template>
  <section class="pdf-content">
    <div class="title">
      <p>DAFTAR NILAI RAPORT SEMESTER GANJIL</p>
    </div>
    <v-row no-gutters>
      <v-col cols="9">
        <v-row no-gutters style="padding: 2.5px 0px">
          <v-col cols="4"> Nama Peserta Didik </v-col>
          <v-col>
            :<span style="margin-left: 1rem">{{ siswa.nama }}</span>
          </v-col>
        </v-row>
        <v-row no-gutters style="padding: 2.5px 0px">
          <v-col cols="4"> Nomor Induk Siswa </v-col>
          <v-col>
            :<span style="margin-left: 1rem">{{ siswa.nis }}</span>
          </v-col>
        </v-row>
        <v-row no-gutters style="padding: 2.5px 0px">
          <v-col cols="4"> Kelas </v-col>
          <v-col>
            :<span style="margin-left: 1rem">{{ siswa.kelas }}</span>
          </v-col>
        </v-row>
        <v-row no-gutters style="padding: 2.5px 0px">
          <v-col cols="4"> Semester </v-col>
          <v-col>
            :<span style="margin-left: 1rem">{{ siswa.sem }}</span>
          </v-col>
        </v-row>
        <v-row no-gutters style="padding: 2.5px 0px">
          <v-col cols="4"> Tahun Pelajaran </v-col>
          <v-col>
            :<span style="margin-left: 1rem">{{ siswa.tapel }}</span>
          </v-col>
        </v-row>
        <v-row no-gutters style="padding: 2.5px 0px">
          <v-col cols="4"> Sekolah </v-col>
          <v-col>
            :<span style="margin-left: 1rem">SMK Al-Hidayah Kota Cirebon</span>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3" style="padding:0;">
        <qrcode value="{something about asdioasodincvsdhjawekofhoiszdjpcvojsopdfjlpaweofhinoszjcfzj}" :options="{ width: 150 }"></qrcode>  
      </v-col>
    </v-row>
    <v-row style="margin-top: 1rem">
      <v-col>
        <h4>A. Nilai Akademik</h4>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <table class="tabel-nilai" border="1">
          <thead>
            <tr>
              <th style="max-width: 75px">No.</th>
              <th style="width: 70%">Mata Pelajaran</th>
              <th style="max-width: 75px" width="50">Penge tahuan</th>
              <th style="max-width: 75px">Keteram pilan</th>
              <th style="max-width: 75px">Nilai Akhir</th>
              <th style="max-width: 75px">Pre dikat</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="header in dataNilai">
              <template v-for="(mapel, indexNilai) in header.nilai">
                <tr v-if="indexNilai == 0">
                  <td colspan="6" class="row-title">
                    {{ header.key.substring(0, 1).toUpperCase() }}.
                    {{ header.title }}
                  </td>
                </tr>
                <tr v-if="indexNilai == 0">
                  <td class="text-tengah">{{ indexNilai + 1 }}</td>
                  <td class="capitalize">
                    {{ mapel.subject }}
                  </td>
                  <td class="text-tengah">
                    {{ mapel.nilai }}
                  </td>
                  <td class="text-tengah">-</td>
                  <td class="text-tengah">-</td>
                  <td class="text-tengah">-</td>
                </tr>
                <tr v-else>
                  <td class="text-tengah">{{ indexNilai + 1 }}</td>
                  <td class="capitalize">
                    {{ mapel.subject }}
                  </td>
                  <td class="text-tengah">
                    {{ mapel.nilai }}
                  </td>
                  <td class="text-tengah">-</td>
                  <td class="text-tengah">-</td>
                  <td class="text-tengah">-</td>
                </tr>
              </template>
            </template>
            <tr>
              <td></td>
              <td>
                <p style="text-align: center"><strong>Rata-Rata</strong></p>
              </td>
              <td class="text-tengah">-</td>
              <td class="text-tengah">-</td>
              <td class="text-tengah">-</td>
              <td class="text-tengah">-</td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>
    <v-row style="margin-top: 1rem">
      <v-col>
        <h4>B. Catatan Akademik</h4>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col style="border: 1px solid black; padding: 5px; text-align:justify;">
        Ananda jangan patah semangat dengan hasil belajar kalian pada semester
        ini ! Teruslah berusaha dengan keras dan berdoalah kepada Allah SWT agar
        dimudahkan dalam menuntut ilmu. Segeralah menghubungi guru mapel untuk
        perbaikan nilai D Jangan menunggu sampai semester berikutnya !
      </v-col>
    </v-row>
    <v-row style="margin-top: 1rem">
      <v-col>
        <h4>C. Ekstrakulikuler</h4>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <table border="1" class="tabel-nilai">
          <thead>
            <tr>
              <th style="padding: 10px; max-width: 30px">No.</th>
              <th style="padding: 10px; width: 30%">Kegiatan</th>
              <th style="padding: 10px">Nilai</th>
              <th style="padding: 10px">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Pramuka</td>
              <td>B</td>
              <td>Mengikuti Kegiatan Dengan Baik</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Pramuka</td>
              <td>B</td>
              <td>Mengikuti Kegiatan Dengan Baik</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Pramuka</td>
              <td>B</td>
              <td>Mengikuti Kegiatan Dengan Baik</td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>

    <div class="html2pdf__page-break" />
    <v-row style="margin-top: 5rem">
      <v-col>
        <h4>D. Ketidakhadiran</h4>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6" style="border: 1px solid black; padding: 0.5rem">
        <v-row>
          <v-col cols="7">Sakit</v-col>
          <v-col cols="1">:</v-col>
          <v-col cols="2">10</v-col>
          <v-col cols="2">Hari</v-col>
        </v-row>
        <v-row>
          <v-col cols="7">Izin</v-col>
          <v-col cols="1">:</v-col>
          <v-col cols="2">10</v-col>
          <v-col cols="2">Hari</v-col>
        </v-row>
        <v-row>
          <v-col cols="7">Tanpa Keterangan</v-col>
          <v-col cols="1">:</v-col>
          <v-col cols="2">10</v-col>
          <v-col cols="2">Hari</v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row style="margin-top: 1rem">
      <v-col>
        <h4>E. Deskripsi Pengembangan Karakter</h4>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <table class="tabel-nilai" border="1">
          <thead>
            <th style="width: 5%">No.</th>
            <th style="width: 20%">Karakter Yang Dibangun</th>
            <th style="width: 70%">Deskripsi</th>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Integritas</td>
              <td></td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Religius</td>
              <td></td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Nasionalis</td>
              <td></td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Mandiri</td>
              <td></td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Gotong Royong</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </v-col>
    </v-row>
    <v-row style="margin-top:1rem">
      <v-col>
        <h4>F. Catatan Pengembangan Karakter</h4>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col style="border: 1px solid black; padding: 5px; text-align:justify;">
        Ananda AKMAL MULYADI .. ananda belum dapat menunjukkan perkembangan
        karakter yang cukup baik pada pembelajaran semester ini. Selain itu,
        ananda juga menunjukkan prestasi belajar yang masih kurang, belajarlah
        lebih giat lagi dan jangan lupa berdo'a pada Allah SWT untuk dimudahkan
        dalam menuntut ilmu.
      </v-col>
    </v-row>
    <v-row style="margin-top:1rem;">
      <v-col>
        <h4>G. Kenaikan Kelas</h4>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col style="border:1px solid black; text-align:center; padding:5px">
        -
      </v-col>
    </v-row>
    <v-row style="margin-top:1rem;">
      <v-col cols="4" style="padding-left:50px">
        <v-row>
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col>Orang Tua / Wali</v-col>
        </v-row>
      </v-col>
      <v-col cols="3"></v-col>
      <v-col cols="4" offset-md="4">
        <v-row no-gutters>
          <v-col>Cirebon, 19 Desember 2020</v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>Walikelas,</v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row style="margin-top:3rem;">
      <v-col cols="4" style="padding-left:50px">
        _______________
      </v-col>
      <v-col cols="3"></v-col>
      <v-col cols="4" offset-md="4">
        Nama Walikelas
      </v-col>
    </v-row>
    <div style="text-align:center; width:100%; margin-top:3rem;">
      <p>Mengetahui,</p>
      <p>Kepala SMK Al-Hidayah Cirebon</p>
      
      <p style="margin-top:4rem">Drs. Ucu Suprayogi, M.Kom</p>
      <p>NIP. 19650602 199412 1002</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "PrintLayout",
  props: ["siswa"],
  
  data() {
    return {
      rowHeader: [
        {
          key: "a_",
          title: "Muatan Nasional",
        },
        {
          key: "b_",
          title: "Muatan Kewilayahan",
        },
        {
          key: "c_",
          title: "Muatan Peminatan Kejuruan",
        },
        {
          key: "d_",
          title: "Muatan Lokal",
        },
      ],
    };
  },
  computed: {
    dataNilai() {
      return this.rowHeader.map((item) => {
        for (let nilai in this.siswa) {
          if (nilai.includes("_") && nilai != "_id") {
            let kategoriNilai = nilai.substring(0, 2);
            if (kategoriNilai == item.key) {
              let subject = nilai.substring(2, nilai.length).replace(/_/g, " ");

              if (!item["nilai"]) {
                item["nilai"] = [{ subject, nilai: this.siswa[nilai] }];
              } else {
                item["nilai"].push({
                  subject,
                  nilai: this.siswa[nilai],
                });
              }
            }
          }
        }
        console.log(item);
        return item;
      });
    },
  },
  watch: {
    siswa: [
      {
        handler: "logDataSiswa",
      },
    ],
  },
  methods: {
    logDataSiswa() {
      this.rowHeader = [
        {
          key: "a_",
          title: "Muatan Nasional",
        },
        {
          key: "b_",
          title: "Muatan Kewilayahan",
        },
        {
          key: "c_",
          title: "Muatan Peminatan Kejuruan",
        },
        {
          key: "d_",
          title: "Muatan Lokal",
        },
      ];
    },
  },
  created() {},
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
.pdf-content {
  width: 100%;
  margin-top: 4rem;
  padding-left: 4em;
  padding-right: 4em;
  font-family: Arial, Helvetica, sans-serif;
}
.title {
  margin-bottom: 1.5rem;
  p {
    font-family: "Times New Roman", Times, serif;
    text-align: center;
    text-decoration: underline;
    font-weight: bold;
    font-size: 14pt;
  }
}
.text-tengah {
  text-align: center;
}
.capitalize {
  text-transform: capitalize;
}
.tabel-nilai {
  box-sizing: content-box;
  border-collapse: collapse;
  width: 100%;

  th {
    border: 1px solid black;
    word-wrap: break-word;
    padding: 0.5rem;
  }
  td {
    border: 1px solid black;
    padding: 0.25rem;
  }
  .row-title {
    font-weight: bold;
  }

  .flx {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>