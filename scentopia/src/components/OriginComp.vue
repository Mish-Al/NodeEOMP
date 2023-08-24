<template>
  <div>
    <!-- Scrollable modal -->
    <button
      type="button"
      class="btn"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Our Story
    </button>
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              The Origins of Scentopia
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>
              Once upon a time, in the vibrant city of Cape Town, South Africa,
              two individuals named Mish-Al Taliep and Imtiyaaz Damon embarked
              on an olfactory journey that would eventually shape the fragrance
              industry. They were driven by their shared passion for scents, and
              their desire to create a brand that would transport people to a
              world of enchanting aromas. Together, they set out to establish a
              unique fragrance company called Scentopia. Mish-Al, a visionary
              with a keen sense of creativity, was captivated by the power of
              scents to elicit emotions and memories. Growing up in a family
              that cherished perfumes, she developed a deep appreciation for the
              intricacies of fragrance composition. Her artistic background and
              unquenchable thirst for innovation drove her to explore uncharted
              territories in the world of perfumery. Imtiyaaz, on the other
              hand, brought a wealth of knowledge and expertise in the business
              realm. With a sharp analytical mind and a remarkable ability to
              identify market trends, he was the perfect complement to Mish-Al's
              artistic inclinations. Together, they embarked on a mission to
              curate exceptional fragrances and redefine the way people
              experience scents. Their journey began by immersing themselves in
              the rich cultural heritage of South Africa. They traveled far and
              wide, discovering the diverse landscapes and traditions that
              inspired a myriad of fragrances. From the lush bushveld to the
              vibrant cityscapes, from the rugged coastline to the sprawling
              vineyards, Mish-Al and Imtiyaaz captured the essence of each
              location and transformed it into olfactory masterpieces. The
              values of sustainability and community resonated deeply within the
              hearts of the founders. They sought to create a brand that not
              only celebrated the beauty of nature but also gave back to the
              communities that nurtured it. Mish-Al and Imtiyaaz made it their
              mission to source their raw materials ethically, ensuring that
              each bottle of Scentopia fragrance embodied the principles of
              environmental stewardship. With their unwavering dedication and
              commitment to quality, Scentopia quickly gained recognition in the
              fragrance industry. Their exquisite blends, carefully crafted by
              renowned perfumers, swept the world by storm. From the exotic
              spices of Zanzibar to the delicate flowers of the Cederberg
              Mountains, each Scentopia fragrance told a timeless story with its
              distinct notes. As the brand flourished, Mish-Al and Imtiyaaz
              remained devoted to their initial vision. They established
              initiatives to support local
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn-understand"
              data-bs-dismiss="modal"
            >
              Okay I'm Done
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn{
  background-color: #d09869;
  border: #553a1d;
  border-radius: 5px;
  color: #f7dfb1;
}
.btn:hover{
  background-color: #f7dfb1;
  color: #d09869;
  border: 1px solid #553a1d;
}
.btn-understand{
  background-color: #d09869;
  border: #553a1d;
  border-radius: 5px;
  color: #f7dfb1;
  padding: 5px;
}
.btn-understand:hover{
  background-color: #f7dfb1;
  color: #d09869;
  border: 1px solid #553a1d;
}
.modal-body{
  background-color: #553a1d;
  color: #f7dfb1;
  border-radius: 7px;
}
.modal-header{
  background-color: #f7dfb1;
  color: #553a1d;
  border-radius: 7px;
}
.modal-footer{
  background-color: #f7dfb1;
  border-radius: 7px;
}
</style>

