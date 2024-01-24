import { defineStore } from "pinia";

export const useAnimalStore = defineStore({
  id: "Animals",
  state: () => ({
    Animals: [],
  }),
  actions: {
    async fetchSpecimens() {
      const response = await fetch(
        "http://localhost:8080/api/animals"
      );
      const data = await response.json();

      this.Animalss = data;

     
    
    },
  },
});