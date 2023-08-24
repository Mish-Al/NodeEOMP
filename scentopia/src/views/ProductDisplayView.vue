<template>
  <div class="anything" v-for="product in products" :key="product.prodID">
      <div class="card" style="width: 18rem">
        <img
          :src="product.prodUrl"
          class="card-img-top"
          :alt="product.prodName"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.prodName }}</h5>
          <p class="card-text">{{ product.Category }}.</p>
          
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ["prodID"],
    computed: {
      product() {
        return this.$store.state.product
      },
    },
    created() {
       this.$store.dispatch("fetchProduct", this.prodID)
    },
    methods: {
      fetchProducts() {
        axios.get('https://scentopia.onrender.com/products/:id').then(res =>{
          console.log(res)
        })
      }
    }
  };
</script>

<style scoped>
</style>