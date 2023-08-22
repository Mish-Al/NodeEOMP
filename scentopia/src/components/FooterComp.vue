<template>
    <div>
      <footer class="feet">
        <p>© Copyright {{ cYear }}</p>
        <p>Built by</p>
        <p>Mish-Al Taliep & Imtiyaaz Damon</p>
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
  .feet{
    background-color: #EAC7A1;
    text-align: center;
    color: #553a1d;
  }
  
  .bi:hover {
    color: black;
  }
  
  .bi {
    color: #bee9e8;
    font-size: 1.5rem;
    margin: 0.3rem;
  }
  </style>