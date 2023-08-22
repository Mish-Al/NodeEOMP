<template>
  <div>
  <NavbarComp />
  <main>
    <router-view />
  </main>
  <FooterComp/>
</div>
</template>
<script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  components: {
    NavbarComp,
    FooterComp
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color: #f5d7a1;
}
</style>
