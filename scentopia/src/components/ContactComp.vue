<template>
  <div>
    <div class="message d-flex;" style= "justify-content: center;">
    <h4>
       Welcome to our scented oasis of comfort! We understand the power of scent
      in evoking emotions and creating a sense of tranquility. While our contact
      page may seem empty, fear not, for behind the scenes, we are diligently
      working to respond to your queries and provide you with exceptional
      service.
    </h4>
  </div>
    <div class="cards">
      <div class="change">
        <div class="left">
          <div class="card left-card" style="width: 20rem">
            <h5>Contact Us</h5>
            <div class="card-body left-body">
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
                  <label for="inputSurname4" class="form-label"
                    >Last Name</label
                  >
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
        </div>
        <div class="contact_details">
          <div class="card right" style="width: 20rem">
            <div class="card-body right-body">
              <h5 class="card-title">Contact & Address Information</h5>
              <div class="card-text">
                <div class="row">
                  <div class="col-12">
                    <i class="bi bi-geo-alt location"></i><br />
                    <a
                      href="https://www.google.com/maps/place/Life+Choices/@-33.9856238,18.4908163,17.44z/data=!4m6!3m5!1s0x1dcc433bedd50e81:0x9c746d268c8e0ad9!8m2!3d-33.9856643!4d18.4926986!16s%2Fg%2F1tgc20ns?authuser=0&entry=ttu"
                    >
                      310 Imam Haron Road, Lansdowne Cape Town 7780</a
                    >
                  </div>
                </div>
                <div class="col-12">
                  <i class="bi bi-telephone phone"></i><br />
                  +27 65 859 9211 <br />
                  +27 68 692 1712
                </div>
                <div class="col-12">
                  <i class="bi bi-envelope-at mail"></i><br />
                  mtaliep.lifechoices@gmail.com imtidamon777@gmail.com
                </div>
              </div>
            </div>
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
.message{
  float: inline-start;
  width: 70vw;
  border: 3px solid teal;
font-style: italic;
}
.cards {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 2.5rem;
  height: 55vh;
  margin-bottom: 4rem;
  /* /* margin-bottom: 5rem; */
}
.card {
  border-radius: 20px;
  background-color: #eac7a1;
}
.left-card {
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  height: 25rem;
  box-shadow: 20px 20px #d09869;
  /* border: 3px solid black; */
}
a {
  text-decoration: none;
  color: #553a1d;
}
a:hover {
  color: #d09869;
}
.right-body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.right {
  border-radius: 20px;
  background-color: #eac7a1;
  height: 25rem;
  border: 3px solid teal;
  padding: 2rem;
  box-shadow: 20px 20px #d09869;
}
/* .card img {
  height: 4rem;
  width: 5rem;
} */
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
  padding-top: 1rem;
  text-align: center;
  text-decoration: underline;
  color: #553a1d;
}
.btn {
  text-decoration: none;
  color: #f7dfb1;
  background-color: #d09869;
  border: #553a1d;
  border-radius: 5px;
  height: 3rem;
  margin: 1rem;
}
.btn:hover {
  background-color: #f7dfb1;
  color: #d09869;
  border: 1px solid #553a1d;
}
.change {
  display: flex;
  justify-content: space-evenly;
  justify-content: center;
  align-items: center;
  /* border: 3px solid red; */
  width: 70%;
  height: 100%;
}
.contact_details {
  width: 50%;
  /* border: 3px solid green; */
  display: flex;
  justify-content: right;
  align-items: center;
}

@media screen and (max-width: 1000px) {
  .cards {
    flex-direction: column;
    height: auto;
  }
  .left-card,
  .right {
    height: auto;
    margin-bottom: 2rem;
  }
  .change {
    flex-direction: column;
  }
  .contact_details {
    width: 100%;
  }
}
</style>