<template>
  <div class="anything" v-for="product in products" :key="product.prodID">
    <div class="card">
      <img
        :src="product.prodUrl"
        class="card-img-top"
        :alt="product.prodName"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.prodName }}</h5>
        <p class="card-text">{{ product.amount }}.</p>

        <router-link
          class="btn" :to="{ name: 'singleProd', params: { prodID: product.prodID } }"
          >View More</router-link
        >
      </div>
    </div>
  </div>
</template>
  <script>
import axios from "axios";
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    fetchProducts() {
      axios.get("https://scentopia.onrender.com/products").then((res) => {
        console.log(res);
      });
    },

    viewSingle(prodID) {
      this.$router.push({ name: "singleProd", params: { prodID } });
    },
  },
};
</script>
  <style scoped>
.btn {
  background-color: #d09869;
  border: 3px solid #553a1d;
  border-radius: 5px;
  color: #f7dfb1;
}
.btn:hover {
  background-color: #f7dfb1;
  color: #d09869;
  border: 1px solid #553a1d;
}
.btn-understand {
  background-color: #d09869;
  border: #553a1d;
  border-radius: 5px;
  color: #f7dfb1;
  padding: 5px;
}
.btn-understand:hover {
  background-color: #f7dfb1;
  color: #d09869;
  border: 1px solid #553a1d;
}
.card{
  display: flex;
  justify-content: center;
  background-color: #f7dfb1;
  color: #553a1d;
  border-radius: 8px;

  width: 18rem;
}
.anything{
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin: 1rem;
}
img{
  height: 15rem;
}

</style>
 