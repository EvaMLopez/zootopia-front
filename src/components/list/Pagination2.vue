 
  <script>
  export default {
    data() {
      return {
        page: 1,
        totalPages: 3, // Establece el número total de páginas según tu API
        apiData: [],   // Almacena los datos obtenidos de la API
      };
    },
    methods: {
      fetchData(page) {
        // Aquí realizarías la llamada a tu API para obtener los datos de la página especificada
        // Puedes usar una biblioteca como Axios para realizar la solicitud HTTP
        // En este ejemplo, solo estoy actualizando la página y generando datos ficticios
        this.page = page;
        this.generateDummyData();
      },
      generateDummyData() {
        // Simulación de datos de la API
        const itemsPerPage = 5;
        const start = (this.page - 1) * itemsPerPage + 1;
        const end = start + itemsPerPage - 1;
  
        this.apiData = Array.from({ length: itemsPerPage }, (_, index) => ({
          id: start + index,
          name: `Item ${start + index}`,
        }));
      },
    },
  };
  </script>
<template>
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" @click="fetchData(page - 1)" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          
          <li class="page-item" v-for="pageNumber in totalPages" :key="pageNumber" :class="{ 'active': pageNumber === page }">
            <a class="page-link" @click="fetchData(pageNumber)" href="#">{{ pageNumber }}</a>
          </li>
          
          <li class="page-item">
            <a class="page-link" @click="fetchData(page + 1)" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
      
      <!-- Aquí puedes mostrar los datos obtenidos de la API -->
      <div v-for="item in apiData" :key="item.id">{{ item.name }}</div>
    </div>
  </template>
 
  
  <style>
  /* Puedes agregar estilos personalizados aquí si es necesario */
  </style>