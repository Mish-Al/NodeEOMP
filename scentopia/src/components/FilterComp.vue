<template>
    <div>
        <input v-model="searchQuery" placeholder="Search...">
        <select v-model="selectedFilter">
            <option value="name">Name</option>
        </select>
        <button @click="applyFilter">Apply</button>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                searchQuery: '',
                selectedFilter: 'name',
            };
        },

        methods: {
            applyFilter() {
                if(this.searchQuery === '') {
                    this.products = this.$store.products;
                }else {
                    this.products = this.$store.state.products.filter(product =>{
                        return product[this/this.selectedFilter].toLowerCase().includes(this.searchQuery.toLowerCase());
                    })
                }
            },
            clearFilter() {
                this.searchQuery = '',
                this.products = this.$store.state.products;
            },
            getProducts() {
                axios.get('https://scentopia-555a.onrender.com/').then(res => {
                    this.$store.commit('setProducts', res.data.products);
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>

</style>