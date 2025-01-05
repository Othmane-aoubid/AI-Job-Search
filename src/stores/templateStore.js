import { defineStore } from "pinia";

export const useTemplateStore = defineStore("templateStore", {
  state: () => ({
    selectedTemplate: null, // Stores the selected template type
  }),
  actions: {
    setTemplate(template) {
      this.selectedTemplate = template;
      console.log("this is the selected template ", this.selectedTemplate)
    },
  },
});
