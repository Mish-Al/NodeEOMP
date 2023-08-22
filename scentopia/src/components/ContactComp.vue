<template>
  <div>
      <h1 class="mt-2">Contact</h1>
  </div>

  <br />
  <div class="contact">
  <div class="container">
    <div class="row">
      <div class="col forms">
          <form
            class="p-5" 
            action="https://formspree.io/f/xqkonyvj"
            method="POST"
          >
            <div>
              <label for="exampleFormControlInput1" class="form-label"
                >First Name 
              </label>
              <input
                name="firstname"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                required
                oninvalid="this.setCustomValidity('Input Name')"
                oninput="this.setCustomValidity('')"
              />
            </div> 
            <div>
              <label for="exampleFormControlInput1" class="form-label"
                >Surname</label
              >
              <input
                name="surname"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                required
                oninvalid="this.setCustomValidity('Input Surname')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <div>
              <label for="exampleFormControlInput1" class="form-label"
                >Email Address</label
              >
              <input
                name="email"
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                required 
                oninvalid="this.setCustomValidity('Input Email')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <label for="exampleFormControlTextarea1" class="form-label"
              >Comment or Message</label
            >
            <textarea
              name="message"
              class="form-control text-center"
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>
            <br />
            <div class="middle d-flex justify-content-center">
              <button type="submit" class="btn">Submit</button>
              <button type="reset" class="btn">Clear</button>
            </div>
          </form>
        </div>
    </div>
  </div>
  <div class="container">
          <div class="row">
          <div class="col-6 details">
          <div class="details pb-5">
            <h2>Contact Details</h2>
            <h4 class="phone">
              <i class="bi bi-telephone"></i><br>  +27 65 859 9211 <br> +27 68 692 1712
            </h4>
            <h4 class="mail">
              <i class="bi bi-envelope-at"></i><br> mtaliep.lifechoices@gmail.com
              imtidamon777@gmail.com
            </h4>
            <h4 class="place">
              <i class="bi bi-geo-alt"></i><br> 310 Imam Haron Road,
              Lansdowne Cape Town 7780
            </h4>
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
.container {
  text-align: center;
  width: 40%;
}
.details {
  background-color: #EAC7A1;
  color: #553a1d;
  border-radius: 20px;
  margin-bottom: 1rem;
}

.forms {
  display: flex;
  justify-content: space-between;
  background-color: #EAC7A1;
  border-radius: 20px;
  margin-bottom: 1rem;


}

#exampleFormControlInput1 {
  text-align: center;
}

h1 {
  text-decoration: underline;
  color: #553a1d;
}
h2{
  color: #553a1d;
}
h4 {
  color: #553a1d;
}
.contact{
  width: 100;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}
</style>
  