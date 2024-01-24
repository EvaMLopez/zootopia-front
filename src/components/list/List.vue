<script>
export default {
  
}
</script>




<template>

  <div class="specie">

  </div>

  <div class="search">
    
  </div>

  <div class="menu-info">
    <div class="container">
      <div class="col-1">Id</div>
      <div class="col-1">Name</div>
      <div class="col-1">Gendre</div>
      <div class="col-1">Specie</div>
      <div class="col-1">Family</div>
      <div class="col-1">Country</div>
      <div class="col-1">Date</div>
      <div class="col-1"></div>
      <div class="col-1"></div>
    </div>

    <div class="container">
      <div class="col-left"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col">
        <button type="button" class="btn-Ed">EDIT</button>
      </div>
      <div class="col-right">
        <button @click="" type="button" class="btn-Del">DELETE</button>
      </div>
    </div>

    <div class="container">
      <div class="col-left"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col">
        <button type="button" class="btn-Ed">EDIT</button>
      </div>
      <div class="col-right">
        <button @click="" type="button" class="btn-Del">DELETE</button>
      </div>
    </div>

    <div class="container">
      <div class="col-left"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col">
        <button type="button" class="btn-Ed">EDIT</button>
      </div>
      <div class="col-right">
        <button @click="" type="button" class="btn-Del">DELETE</button>
      </div>
    </div>

    <div class="container">
      <div class="col-left"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col">
        <button type="button" class="btn-Ed">EDIT</button>
      </div>
      <div class="col-right">
        <button @click="" type="button" class="btn-Del">DELETE</button>
      </div>
    </div>
  </div>    
</template>

<style lang="scss">
 
.container {
  width: 70%;
  margin: 0 auto;
  display: flex;
}

.col-1 {
  flex: 1; 
  padding: 15px;
  text-align: center;
  margin-bottom: 10px;
  background-color: #386F5B;
  position: relative;
  padding: 15px; 
  border-color: #386F5B;
  border: 2px solid #386F5B; 
  font-family: 'Langar', system-ui;
  font-size: 18px;
  color: white;
}
.col {
  flex: 1; 
  padding: 10px;
  text-align: center;
  margin-bottom: 5px;
  background-color: #cacaca;
  position: relative;
  padding: 5px; 
  border: 2px solid #386F5B; 
  border-left:none;
  border-right: none;
  font-family: 'Langar', system-ui;
  font-size: 18px;
}

.col-left {
  flex: 1; 
  padding: 10px;
  text-align: center;
  margin-bottom: 5px;
  background-color: #cacaca;
  position: relative;
  padding: 5px; 
  border: 2px solid #386F5B; 
  border-right: none;
  font-family: 'Langar', system-ui;
  font-size: 18px;
} 
  
.col-right {
  flex: 1; 
  padding: 10px;
  text-align: center;
  margin-bottom: 5px;
  background-color: #cacaca;
  position: relative;
  padding: 5px;
  border: 2px solid #386F5B; 
  border-left: none;
  font-family: 'Langar', system-ui;
  font-size: 18px;
} 
   
.btn-Ed {
  padding: 10px;
  background-color: #DFE25A;
  border: 1px solid black;
  border-radius: 20px;
}

.btn-Del {
  padding: 10px;
  background-color: #8F1D1D;
  border: 1px solid black;
  border-radius: 25px;
  cursor: pointer;
}

</style>