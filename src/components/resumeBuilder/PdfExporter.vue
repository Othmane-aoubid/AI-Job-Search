<template>
  <div class="pdf-exporter">
    <button
      @click="exportToPdf"
      class="bg-blue-500 text-white py-2 px-4 rounded"
    >
      Export to PDF
    </button>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default {
  name: "PdfExporter",
  props: {
    targetElementId: {
      type: String,
      required: true,
    },
  },
  methods: {
    exportToPdf() {
      const element = document.getElementById(this.targetElementId);
      if (element) {
        html2canvas(element).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();
          pdf.addImage(imgData, "PNG", 0, 0);
          pdf.save("resume.pdf");
        });
      } else {
        console.error("Element not found:", this.targetElementId);
      }
    },
  },
};
</script>

<style scoped>
.pdf-exporter {
  margin-top: 20px;
}
</style>
