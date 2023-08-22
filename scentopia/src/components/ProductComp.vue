<template>
    <div class="container">
      <div class="row">
        <div class="display-2">
          <h2>Products</h2>
        </div>
        <div class="row justify-content-center gap-3" v-if="products">
          <div
            v-for="item in products"
            class="card"
            style="width: 18rem"
            :key="item.prodID"
          >
            <img
              :src="item.prodUrl"
              class="card-img-top"
              :alt="item.prodName"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.prodName }}</h5>
              <p class="card-text">
                Catergory : {{ item.catergory }}
              </p>
            </div>
          </div>
        </div>
        <div v-else class="row">
          <SpinnerCompVue />
        </div>
      </div>
    </div>
  </template>
  <script>
  import SpinnerCompVue from "@/components/SpinnerComp.vue";
  export default {
    computed: {
      users() {
        return this.$store.state.products;
      },
    },
    mounted() {
      this.$store.dispatch("fetchProducts");
    },
    components: {
      SpinnerCompVue,
    },
  };
  </script>
  <style scoped>
  </style>
 