<template>
  <div>
  <NavbarComp />
  <FilterComp @filter-applied="applyFilter"/>
  <SearchComp @search-peformed="performSearch"/>
  <ResultsComp :searchResults = "results"/>
  <main>
    <router-view />
  </main>
  <FooterComp/>
</div>
</template>
<script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComp from "@/components/FooterComp.vue";
import SearchComp from "./components/SearchComp.vue";
import FilterComp from "./components/FilterComp.vue";
import ResultsComp from "./components/ResultsComp.vue";
import axios from 'axios';

export default {
  components: {
    NavbarComp,
    FooterComp
  },
  // data() {
  //   return {
  //     res
  //   }
  // },
  // methods: {
  //   applyFilter(selectedFilter) {

  //   },
  //   performSearch(searchQuery) {
  //     axios.get(`/search?query=${searchQuery}`).then(res => {
  //       this.results = res.data;
  //     })
  //   }
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif,;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color: #f5d7a1 !important;
}
::-webkit-scrollbar {
  display: none;
}
</style>
