<template>
  <div>
    <div class="cards">
          <div class="card" style="width: 18rem">
            <img
              src="https://i.postimg.cc/7PTDMqP7/Paco-Rabanne-Invictus-Legend-Eau-de-Parfum-1-removebg-preview.png"
              class="card-img-top"
              alt="iphone"
            />
            <div class="card-body">
              <h5 class="card-title mt-5">Paco Rabanne Invictus Legend Eau de Parfum</h5>
              <a href="../views/ProductView.vue" class="btn mt-3">more info</a>
            </div>
          </div>
          <div class="card" style="width: 18rem">
            <img
              src="https://i.postimg.cc/tCWqypLy/xs-pour-homme-eau-de-toilette-spray-100ml-tester-men-paco-rabanne-p177-227-zoom-1-removebg-preview.png"
              class="card-img-top"
              alt="iphone"
            />
            <div class="card-body">
              <h5 class="card-title">Paco Rabanne xs Pour Homme</h5>
              <a href="../views/ProductView.vue" class="btn">more info</a>
            </div>
          </div>
          <div class="card" style="width: 18rem">
            <img
              src="https://i.postimg.cc/qvB4tnQB/Versace-Man-Eau-Fraiche-removebg-preview.png"
              class="card-img-top"
              alt="oppo"
            />
            <div class="card-body">
              <h5 class="card-title">Versace Man Eau De Fraiche</h5>
              <a href="../views/ProductView.vue" class="btn">more info</a>
            </div>
          </div>
          <div class="card" style="width: 18rem">
            <img
              src="https://i.postimg.cc/1XDnL1Jn/Paco-Rabanne-Phantom-Eau-de-Toilette.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Paco Rabanne Phantom Eau De Toilette</h5>
              <a href="../views/ProductView.vue" class="btn">more info</a>
            </div>
          </div>
          </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  margin: 4rem;

}
.card{
  background-color: #f7dfb1;
  color: #553a1d;
  border: 3px solid #553a1d;
  border-radius: 8px;
}
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