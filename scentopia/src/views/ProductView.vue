<template>
  <div>
    <SearchComp />
    <ProductComp />
  </div>
</template>

<script>
import SearchComp from "@/components/SearchComp.vue";
import ProductComp from "@/components/ProductComp.vue";
export default {
  components: {
    SearchComp,
    ProductComp,
  },
  methods: {
    viewSingle(prodID) {
      const single = this.products.filter(
        (product) => product.prodID === prodID
      );
      this.$store.commit("singleProd", single);
      this.$router.push({ name: singleProd, params: { prodID: prodID } });
    },
  },
};
</script>


<style scoped>
</style>