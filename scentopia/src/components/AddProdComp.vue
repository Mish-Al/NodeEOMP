<template>
    <div class="container">
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Adding a new product</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>id</p>
              <input  id="id" type="text" placeholder="Enter the id" class="intpID w-100">
              <p>Name</p>
              <input  id="name" type="text" placeholder="Enter the name of product" class="intpName w-100">
              <p>Price</p>
              <input  id="price" type="text" placeholder="Enter the price" class="intpPrice w-100">
              <p>Image</p>
              <input  id="img" type="url" placeholder="Enter the Image url" class="intpImg w-100">
              <p>Description</p>
              <input  id="description" type="text" placeholder="Enter the description" class="intpDescr w-100">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" id="add-btn">Add to admin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>