<template>
  <div>
      <AddProdComp />
    <h2>Admin</h2>
    <div>

      <div id="style_table" class="container">
        <table class="table" style="background-color: #eac7a1; color: #553a1d; border: 3px solid #D09869;" id="table">
          <thead class="head">
            <tr>
              <th id="id">ID</th>
              <th id="name">Name</th>
              <th id="price">Price (ZAR)</th>
              <th id="img-head">Image</th>
              <th id="amount">Quantity</th>
              <th id="del">Delete</th>
              <th id="edit">Update</th>
            </tr>
          </thead>
          <tbody id="product-table">
            <tr v-for="product in products" :key="product.prodID">
              <td id="id">{{ product.prodID }}</td>
              <td id="name">{{ product.prodName }}</td>
              <td id="price">{{ product.amount }}</td>
              <td id="prodImg">
                <img
                  :src="product.prodUrl"
                  :alt="products.prodName"
                  style="width: 13.5rem"
                />
              </td>
              <td id="amount">{{ product.quantity }}</td>

              <td id="del">
                <button class="btn" @click="deleteProduct(product.prodID)">
                  delete
                </button>
              </td>

              <td id="edit">
                <button class="edit"><EditComp/></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <UsersComp />
  </div>
</template>

<script>
import AddProdComp from "@/components/AddProdComp.vue";
import UsersComp from "@/components/UsersComp.vue";
import axios from "axios";
import EditComp from "@/components/EditComp.vue";
export default {
  components: {
    AddProdComp,
    UsersComp,
    EditComp
    
},
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts"),
      this.$store.dispatch("fetchUsers"),
      this.fetchUsers();
    this.fetchProducts();
  },
  data() {
    return {
      product: [],
    };
  },
  methods: {
    fetchProducts() {
      axios.get("https://scentopia.onrender.com/products").then((res) => {
        this.products = res.data.products;
        console.log(res);
      });
    },
    fetchUsers() {
      axios.get("https://scentopia.onrender.com/users").then((res) => {
        this.users = res.data.users;
        console.log(res);
      });
    },
    // deleteProduct(prodID) {
    //   axios
    //     .delete(`https://scentopia.onrender.com/products/${prodID}`)
    //     .then((res) => {
    //       // Handle successful response
    //       console.log(res);
    //       this.fetchProducts();
    //     })
    //     .catch((error) => {
    //       // Handle error
    //       console.error(error);
    //     });
    // },
    editProduct(product) {
        axios.put('https://scentopia.onrender.com/products').then((res) => {
            console.log(res);
            this.fetchProducts();
        })

    }
  },
};
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
#id {
  width: 2.9rem;
  background-color: #eac7a1; color: #553a1d
}
#name {
  width: 18rem;
  text-align: center;
  background-color: #eac7a1; color: #553a1d
}
#price {
  width: 8rem;
  background-color: #eac7a1; color: #553a1d
}
#img-head {
  width: 20rem;
  background-color: #eac7a1; color: #553a1d
}
#amount{
    background-color: #eac7a1; color: #553a1d

}
#del{
    background-color: #eac7a1; color: #553a1d
}
#edit{
    background-color: #eac7a1; color: #553a1d
}

#style_table {
  width: 70%;
  display: flex;
  justify-content: center;
}
.head {
  background-color: #eac7a1;
}

.table {
  border-radius: 20px;
}
img{
    background: none;
}
</style>