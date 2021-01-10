<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="siswas"
      sort-by="calories"
      class="elevation-1 rounded-lg"
      dense
    >
      <template v-slot:top>
        <v-toolbar flat rounded="lg">
          <v-toolbar-title>Data Siswa</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="success" dark class="mb-2" v-bind="attrs" v-on="on">
                <v-icon class="mr-3">mdi-plus</v-icon> Import Data Siswa
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-alert
                        :value="importErr"
                        color="pink"
                        dark
                        border="top"
                        icon="mdi-home"
                        transition="scale-transition"
                      >
                        {{ importErrMsg }}
                      </v-alert>
                      <v-file-input
                        chips
                        multiple
                        label="File Excel (.xls,.xlsx)"
                        prepend-icon="mdi-file-document"
                        @change="fileChanged"
                      ></v-file-input>
                      <p class="caption">
                        Untuk template excel dapat di unduh di sini
                        <strong><a>Unduh</a></strong>
                      </p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="grey darken-1" text @click="close"> Batal </v-btn>
                <v-btn
                  color="primary darken-1"
                  @click="save"
                  depressed
                  :loading="importLoading"
                  :disabled="importLoading"
                >
                  Import
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small @click="generatePdf(item)"> mdi-printer </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>

    <vue-html2pdf
      :show-layout="controlValue.showLayout"
      :float-layout="controlValue.floatLayout"
      :enable-download="controlValue.enableDownload"
      :preview-modal="controlValue.previewModal"
      :filename="controlValue.filename"
      :paginate-elements-by-height="controlValue.paginateElementsByHeight"
      :pdf-quality="controlValue.pdfQuality"
      :pdf-format="controlValue.pdfFormat"
      :pdf-orientation="controlValue.pdfOrientation"
      :pdf-content-width="controlValue.pdfContentWidth"
      :manual-pagination="controlValue.manualPagination"
      :html-to-pdf-options="htmlToPdfOptions"
      @progress="onProgress($event)"
      @startPagination="startPagination()"
      @hasPaginated="hasPaginated()"
      @beforeDownload="beforeDownload($event)"
      @hasDownloaded="hasDownloaded($event)"
      ref="html2Pdf"
    >
      <pdf-content :siswa="selectedItem" @domRendered="domRendered()" slot="pdf-content" />
    </vue-html2pdf>
  </div>
</template>

<script>
import EventBus from "@/configs/EventBus.js";

import PdfContent from "@/components/Prints/RaportLayout";
import VueHtml2pdf from "vue-html2pdf";
import { mapFields } from "vuex-map-fields";
import ControlsContainer from "@/components/Prints/ControlsContainer";

export default {
  name: "TabelSiswa",
  components:{
    VueHtml2pdf,
    PdfContent,
    ControlsContainer,
  },
  data: () => ({
    selectedItem:{},
    importErrMsg: "",
    importErr: false,
    importLoading: false,
    dialog: false,
    dialogDelete: false,
    excelFile: null,
    headers: [
      {
        text: "Nama",
        align: "start",
        sortable: false,
        value: "nama",
      },
      { text: "NIS", value: "nis" },
      { text: "Kelas", value: "kelas" },
      { text: "Tingkat", value: "tingkat" },
      { text: "Tahun pelajaran", value: "tapel" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    editedIndex: -1,

    // html2pdf
    contentRendered: false,
      progress: 0,
      generatingPdf: false,
      pdfDownloaded: false,
  }),

  computed: {
    successMsg() {
      return this.$store.getters.successMsg;
    },
    formTitle() {
      return this.editedIndex === -1 ? "Import Siswa" : "Edit Item";
    },
    siswas() {
      return this.$store.state.siswas;
    },
     ...mapFields(["controlValue"]),
    htmlToPdfOptions() {
      return {
        margin: 0,
        filename: "hee hee.pdf",
        image: {
          type: "jpeg",
          quality: 0.98,
        },
        enableLinks: true,
        html2canvas: {
          scale: this.controlValue.pdfQuality,
          useCORS: true,
        },
        jsPDF: {
          unit: "in",
          format: this.controlValue.pdfFormat,
          orientation: this.controlValue.pdfOrientation,
        },
      }
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    successMsg(val) {
      if (val) this.$awn.success(val);
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    fileChanged(evt) {
      this.excelFile = evt[0];
    },
    initialize() {},

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.importErr = false;
      this.importLoading = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      const payload = {
        file: this.excelFile,
      };
      this.importLoading = true;
      this.$store.dispatch("uploadFile", payload);
    },

    // html2pdf
    async generatePdf(item) {
      this.selectedItem = item
      if (!(await this.validateControlValue())) return;
      this.$refs.html2Pdf.generatePdf();
    },
    validateControlValue() {
      if (this.controlValue.pdfQuality > 2) {
        alert("pdf-quality value should only be 0 - 2");
        this.controlValue.pdfQuality = 2;
        return false;
      }
      if (!this.controlValue.paginateElementsByHeight) {
        alert("paginate-elements-by-height value cannot be empty");
        this.controlValue.paginateElementsByHeight = 1400;
        return false;
      }
      const paperSizes = [
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "letter",
        "legal",
        "a5",
        "a6",
        "a7",
        "a8",
        "a9",
        "a10",
      ];
      if (!paperSizes.includes(this.controlValue.pdfFormat)) {
        alert(`pdf-format value should only be ${paperSizes}`);
        this.controlValue.pdfFormat = "a4";
        return false;
      }
      if (!this.controlValue.pdfOrientation) {
        alert("pdf-orientation value cannot be empty");
        this.controlValue.pdfOrientation = "portrait";
        return false;
      }
      if (!this.controlValue.pdfContentWidth) {
        alert("pdf-content-width value cannot be empty");
        this.controlValue.pdfContentWidth = "800px";
        return false;
      }
      return true;
    },
    onProgress(progress) {
      this.progress = progress;
      console.log(`PDF generation progress: ${progress}%`);
    },
    startPagination() {
      console.log(`PDF has started pagination`);
    },
    hasPaginated() {
      console.log(`PDF has been paginated`);
    },
    async beforeDownload({ html2pdf, options, pdfContent }) {
      console.log(`On Before PDF Generation`);
      // await html2pdf().set(options).from(pdfContent).toPdf().get('pdf').then((pdf) => {
      // 	const totalPages = pdf.internal.getNumberOfPages()
      // 	for (let i = 1; i <= totalPages; i++) {
      // 		pdf.setPage(i)
      // 		pdf.setFontSize(10)
      // 		pdf.setTextColor(150)
      // 		pdf.text('Page ' + i + ' of ' + totalPages, (pdf.internal.pageSize.getWidth() * 0.88), (pdf.internal.pageSize.getHeight() - 0.3))
      // 	}
      // }).save()
    },
    hasDownloaded(blobPdf) {
      console.log(`PDF has downloaded yehey`);
      this.pdfDownloaded = true;
      console.log(blobPdf);
    },
    domRendered() {
      console.log("Dom Has Rendered");
      this.contentRendered = true;
    },
    onBlobGenerate(blob) {
      console.log(blob);
    },
  },
  mounted() {
    this.$store.dispatch("fetchSiswas");

    EventBus.$on("IMPORT_ERROR", (payload) => {
      this.importErr = true;
      this.importLoading = false;
      this.importErrMsg = payload;
    });
    EventBus.$on("SISWAS_UPDATED", (payload) => {
      this.close();
    });
  },
};
</script>

<style>
</style>