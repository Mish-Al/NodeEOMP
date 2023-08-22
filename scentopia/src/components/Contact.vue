<template>
    <div>
        <div class="cards">
        <div class="card" style="width: 20rem;" >
          
          <h5>Contact Us</h5>
          <div class="card-body">
            <form
              action="https://formspree.io/f/xwkjygvl"
              method="POST"
              class="row -3 contactForm"
            >
              <div class="col-md-6">
                <label for="inputName4" class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName4"
                  required="name"
                />
              </div>
              <div class="col-md-6">
                <label for="inputSurname4" class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputSurname4"
                  required="last name"
                />
              </div>
              <div class="col-12">
                <label for="inputSubject" class="form-label">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputSubject"
                  required="subject"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  required="address"
                />
              </div>
              <div class="col-12">
                <button type="submit" class="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div class="contact_details">
            <div class="card" style="width: 20rem">

              <div class="card-body">
                <h5 class="card-title">Contact & Address Information</h5>
                <div class="card-text">
                  <div class="row">
                    <div class="col-12">
                        <i class="bi bi-geo-alt location"></i><br> 310 Imam Haron Road,
              Lansdowne Cape Town 7780
                      </div>
                      </div>
                      <div class="col-12">
                        <i class="bi bi-telephone phone"></i><br>  +27 65 859 9211 <br> +27 68 692 1712

                      </div>
                      <div class="col-12">
                        <i class="bi bi-envelope-at mail"></i><br> mtaliep.lifechoices@gmail.com
              imtidamon777@gmail.com
                      </div>
                </div>
              </div>
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
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
.card {
  border-radius: 20px;
  background-color: #EAC7A1;
}
.card img {
  height: 4rem;
  width: 5rem;
}
.landing label {
  color: rgba(216, 217, 217, 0.737);
}
.landing p {
  color: rgba(216, 217, 217, 0.737);
}
.mail {
  color: #553a1da1;
}
.location {
  color: #553a1da1;
}
.phone {
  color: #553a1da1;
}
.card h5 {
  text-align: center;
  text-decoration: underline;
  color: #553a1d;
}
.btn {
    text-decoration: none;
  color: #F7DFB1;
  background-color: #D09869;
  border: #553a1d;
  border-radius: 5px;
  height: 3rem;
  margin: 1rem;
}
.btn:hover {
  background-color: #F7DFB1;
  color: #D09869;
  border: 1px solid #553a1d;
}
</style>