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
  getters: {},
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
        const { data } = await axios.get(`${scentopiaUrl}products/${prodID}`);
        context.commit("setProduct", data.result);
      } catch (e) {
        alert(e.message);
      }
    } ,  
  },
  modules: {},
});
