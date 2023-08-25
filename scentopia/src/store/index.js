import { createStore } from "vuex";
import axios from "axios"
const scentopiaUrl = "https://scentopia-555a.onrender.com/"
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: null,
    token: null,
    msg: null,
  },
  getters: {
    getProduct(state){
      return state.singleProd
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    addProduct(state, product) {
      state.product = product;
    }
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${scentopiaUrl}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "An error has occured");
      }
    },
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${scentopiaUrl}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        alert(e.message);
      }
    } ,  
    async fetchProduct(context,prodID) {
      try {
        const {data} = await axios.get(`${scentopiaUrl}products/${prodID}`);  
        const {results} = await data
        context.commit("setProduct", results[0]);
      } catch (e) {
        alert(e.message);
      }
    },
    async addProduct(context, proddata) {
      try {
        const data = await axios.post(`${scentopiaUrl}product`, proddata);
        context.commit("addProduct", data.result);
      } catch (e) {
        alert(e.message);
      }
    },

    deleteProduct(prodID) {
      axios
        .delete(`https://scentopia.onrender.com/products/${prodID}`)
        .then((res) => {
          // Handle successful response
          console.log(res);
          this.fetchProducts();
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    },  
    editProduct(prodID) {
      axios.put(`https://scentopia.onrender.com/products/${prodID}`)
    }
  },
  modules: {},
  
});
