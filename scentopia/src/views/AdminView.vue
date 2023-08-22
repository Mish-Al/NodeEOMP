<template>
    <div>
        <AddProdComp/>
        <div class="btp">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add new product
            </button>
            <button class="btn btn-success">sort</button>
          </div>
          <!-- table -->
        <table class="box w-100 table table-bordered table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Description</th>
                <th>Delete</th>
                <th>Update</th> 
            </tr>
          </thead>
          <tbody id="product-table">
            <tr v-for="products in products" :key="products.id">
                <td>{{products.id}}</td>
                <td>{{ products.name }}</td>
                <td>{{ products.price}}</td>
                <td><img :src="products.image" :alt="products.name" style="width: 18rem"></td>
                <td>{{ products.description }}</td>
        
                <td><button class="del">delete</button></td>
        
                <td><button>edit</button></td>
              </tr>
          </tbody>
          </table>  
    </div>
</template>

<script>
import AddProdComp from '@/components/AddProdComp.vue';
import axios from 'axios'
    export default {
        components:{
            AddProdComp
        },
        computed:{
            products(){
                return this.$store.state.products;
            }
        },
        mounted(){
            // this.$store.dispatch("fetchProducts"),
            this.getProducts()
        },
        data(){
            return{
                product:[]
            }
        },
        methods:{
            getProducts(){
                axios.get('https://scentopia.onrender.com/').then(res =>{
                    this.products = res.data.products
                    console.log(res)
                });
            }
        }
        
    }
</script>

<style scoped>

</style>