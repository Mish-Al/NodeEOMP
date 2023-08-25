<template>
  <div class="anything" v-if="product">
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
    <div v-else>
      <p>Loading...</p>
    </div>
</template>

<script>
import axios from 'axios';
// import { mapGetters } from 'vuex';

export default {
    // props: ["prodID"],
    computed: {
      // products() {
      //   return this.$store.state.products
      // },
      product() {
        return this.$store.state.product
      }
        // ...mapGetters(['getProduct']),
        // product(){
        //   return this.getProduct
        // },
        // prodID(){
        //   return this.$route.params.prodID
        // }
    },
    created() {
      //  this.$store.dispatch("fetchProduct", this.prodID)
      // this.fetchProduct(this.prodID)
    },
    mounted() {
      this.$store.dispatch('fetchProduct', this.$route.params.prodID)
    },
    methods: {
      // singleProd(prodID) {
      //   const single = this.prod
      // }
      // async fetchProduct(prodID){
      //   try {
      //     const response = await this.$store.dispatch('fetchProduct', prodID)
      //     console.log('Product', response);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
    }
  };
</script>

<style scoped>
</style>