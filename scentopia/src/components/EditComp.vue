<template>
  <div>
    <button
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      edit
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit</h1>
            <button
              type="button"
              class="btn btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
              type="text"
              v-model="editProduct.prodName"
              placeholder="Input Name"
            />
            <input
              type="text"
              v-model="editProduct.amount"
              placeholder="Input Price (ZAR)"
            />
            <input
              type="text"
              v-model="editProduct.prodUrl"
              placeholder="Input Image Url"
            />
            <input
              type="text"
              v-model="editProduct.quantity"
              placeholder="Input Quantity"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editProduct: {
        prodID: "",
        prodName: "",
        price: 0,
        image: "",
        quantity: 0,
      },
    };
  },

  props: ["id"],
  methods: {
    editSomething() {
      this.$store.dispatch("confirmEdit", this.editProduct);
    },
  },
};
</script>

<style scoped>
.btn{
  background-color: #d09869;
  border: 1px solid#553a1d;
  border-radius: 5px;
  color: #f7dfb1;
}
.btn:hover{
  background-color: #f7dfb1;
  color: #d09869;
  border: 1px solid #553a1d;
}
</style>