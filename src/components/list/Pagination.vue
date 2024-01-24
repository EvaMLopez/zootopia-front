
<script >
  export default {
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, name: 'Fred', },
          { id: 2, name: 'Wilma',  },
          { id: 3, name: 'Barney',  },
          { id: 4, name: 'Betty',  },
          { id: 5, name: 'Pebbles',  },
          { id: 6, name: 'Bamm Bamm',  },
          { id: 7, name: 'The Great',  },
          { id: 8, name: 'Rockhead',  },
          { id: 9, name: 'Pearl',  },
          { id: 10, name: 'Fred',  },
          { id: 11, name: 'Wilma',  },
          { id: 12, name: 'Barney',  },
          { id: 13, name: 'Betty', },
          { id: 14, name: 'Pebbles',  },
          { id: 15, name: 'Bamm Bamm',  },
          { id: 16, name: 'The Great',  },
          { id: 17, name: 'Rockhead', },
          { id: 18, name: 'Pearl', },
          { id: 19, name: 'Fred', },
          { id: 20, name: 'Wilma',  },
          { id: 21, name: 'Barney',  },
          { id: 22, name: 'Betty',  }

        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>

<template>
     <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
  </div>
<!-- 
  //pagination bootstrap -->
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>


</template>

<style>


</style>