<template>
  <div>
    <footer class="feet">
      <p>© Copyright {{ cYear }}</p>
      <p>Built by</p>
      <p>
        <a href="https://mishvueportfolio-f3137.web.app/#/"> Mish-Al Taliep</a>
        & <a href="https://amazing-creponne-5778d1.netlify.app/">Imtiyaaz Damon</a>
      </p>
    </footer>
  </div>
</template>
    
    <script>
export default {
  data() {
    return {
      cYear: new Date().getUTCFullYear(),
    };
  },
};
</script>
    
    <style scoped>
.feet {
  background-color: #eac7a1;
  text-align: center;
  color: #553a1d;
}
a {
  text-decoration: none;
  color: #553a1d;
}
a:hover {
  color: #d09869;
}
</style>