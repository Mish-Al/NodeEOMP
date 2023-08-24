<template>
  <div class="testimonial">
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h4>
            "I absolutely adore the fragrances from Scentopia! I feel like I'm
            transported to different places with each scent. I purchase from
            them every month because they always have such unique and
            high-quality products. I would recommend Scentopia to anyone looking
            for a signature scent that truly stands out!" <br />
            ~ Sarah Richards
          </h4>
        </div>
        <div class="carousel-item">
          <h4>
            "I can't get enough of the fragrances Scentopia has to offer. The
            variety is remarkable, and every product has an exceptional
            longevity. I find myself purchasing from them every few weeks
            because I can't resist trying new scents. I would recommend them
            because they provide an extensive selection that caters to all
            preferences." <br />
            ~ Jose Adams
          </h4>
        </div>
        <div class="carousel-item">
          <h4>
            "As a loyal customer, I can confidently say that the fragrances from
            Scentopia never disappoint. I am captivated
            by the quality of their products. Whenever I need to replenish my
            collection, I always turn to Scentopia. Their consistent
            excellence and quick delivery keep me coming back. I highly
            recommend them to anyone searching for a reliable fragrance source." <br>
            ~ Maria Henderson
          </h4>
        </div>
        <div class="carousel-item">
          <h4>
            "I absolutely love the fragrances from Scentopia.
            They offer a range of options, from classic to niche scents, and I'm
            always satisfied with my purchases. Their products are long-lasting,
            and I appreciate that they frequently introduce new arrivals. Due to
            their competitive prices and exceptional customer service, I
            wouldn't hesitate to recommend them to everyone I know!" <br>
            ~ Ibrahim Peck
          </h4>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" id="prev" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" id="next" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#carouselExampleFade {
  display: flex;
  justify-content: center;
  width: 60%;
  border: 3px solid #D09869;
  border-radius: 20px;
  background-color: #eac7a1;
  color: #553a1d;
}
.testimonial {
  display: flex;
  justify-content: center;
}
.carousel-inner {
  /* display: flex;
    justify-content: center; */
  width: 60%;
}
h4{
 font-style: italic ;
}
</style>