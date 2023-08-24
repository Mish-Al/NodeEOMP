<template>
    <div>
        <h2>Admin</h2>
        <div>
            <div class="btp">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add new product
              <AddProdComp/></button>
            <button class="btn btn-success">sort</button>
          </div>


       <div id="style_table" class="container">
        <table class="table table-hover" id="table">
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
                <td id="id">{{product.prodID}}</td>
                <td id="name">{{ product.prodName }}</td>
                <td id="price">{{ product.amount}}</td>
                <td id="prodImg"><img :src="product.prodUrl" :alt="products.prodName" style="width: 13.5rem"></td>
                <td id="zamount">{{ product.quantity }}</td>
        
                <td id="del"><button class="del">delete</button></td>
        
                <td id="edit"><button class="edit">edit</button></td>
              </tr>
          </tbody>
          </table>
       </div>
        </div>
          <UsersComp/>

    </div>
</template>

<script>
import UsersComp from '@/components/UsersComp.vue';
import AddProdComp from '@/components/AddProdComp.vue';
import axios from 'axios'
    export default {
        components:{
            UsersComp,
            AddProdComp
        },
        computed:{
            products(){
                return this.$store.state.products;
            },
            users(){
                return this.$store.state.user;
            }
        },
        mounted(){
            this.$store.dispatch("fetchProducts"),
            this.$store.dispatch("fetchUsers"),
            this.fetchUsers()
            this.fetchProducts()
        },
        data(){
            return{
                product:[]
            }
        },
        methods:{
            fetchProducts(){
                axios.get('https://scentopia.onrender.com/products').then(res =>{
                    this.products = res.data.products
                    console.log(res)
                });
            },  
            fetchUsers(){
                axios.get('https://scentopia.onrender.com/users').then(res =>{
                    this.users = res.data.users
                    console.log(res)
                });
            }
        }
        
    }
</script>

<style scoped>
#id{
    width: 2.9rem;
}
#name{
    width: 18rem;
    text-align: center;
}
#price{
    width: 8rem;
}
#img-head{
    width: 20rem;
}

#style_table {
    width: 70%;
    display: flex;
    justify-content: center;
}
.head{
    background-color: #eac7a1;
}

.bb {
    display: flex;
    justify-content: center; 
}



</style>