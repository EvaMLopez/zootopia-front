<template>
  <div class="home">
    <div v-for="(animal, index) in animals" :key="index" class="row">
      <button @click="toggleMenu(index)" class="row-button">
        <div class="animal-info">
          <p class="animal-species">{{ animal.species }}</p>
          <p class="total-species">Total: {{ animal.totalSpecies }}</p>
        </div>
        <div class="animal-image">
          <!-- Agrega tu imagen aquí -->
          <img :src="getAnimalImage(index)" alt="Imagen" />
        </div>
      </button>
      <div v-if="expandedRow === index" class="menu-container">
        <div class="menu">
          <!-- Contenido del menú aquí -->
          Información del menú {{ animal.species }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandedRow: null,
      animals: [
        { species: 'Félidos', totalSpecies: 50 },
        { species: 'Cánidos', totalSpecies: 30 },
        { species: 'Reptiles', totalSpecies: 20 },
        { species: 'Mustelids', totalSpecies: 15 },
        { species: 'Leporidae', totalSpecies: 25 },
      ],
    };
  },
  methods: {
    toggleMenu(index) {
      this.expandedRow = this.expandedRow === index ? null : index;
    },
    getAnimalImage(index) {
      // Devuelve la URL de la imagen según la fila
      // Puedes personalizar esto según tus necesidades
      return `url_de_la_imagen_${index}`;
    },
  },
};
</script>

<style lang="scss">
.home {
  width: 70%;
  margin: 0 auto;
}

.row {
  margin-bottom: 10px;
  background-color: #cacaca;
  position: relative;
  padding: 5px; /* Reducir el padding */
  border-color: #386F5B;
  border: 2px solid #386F5B; /* Borde superior de color */
  font-family: 'Langar', system-ui;
  font-size: 18px;
}

.animal-info {
  display: flex;
  align-items: center;
}

.animal-species {
  margin-right: 10px;
  font-weight: bold;
}

.total-species {
  margin: 0;
}

.animal-image img {
  max-width: 50px;
  height: auto;
}

.menu-container {
  position: relative;
  width: 100%;
}

.menu {
  background-color: #f0f0f0;
  padding: 10px;
  height: 14em;
}
</style>