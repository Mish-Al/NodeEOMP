<template>
    <div id="style_table" class="container">
        <table class="table table-hover" id="table">
            <thead class="head">
            <tr>
                <th id="id">ID</th>
                <th id="name">Name</th>
                <th id="img-head">Image</th>
                <th id="role">Role</th>
                <th id="age">Age</th>
                <th id="email">Email</th>
                <th id="del">Delete</th>
                <th id="edit">Update</th> 
            </tr>
          </thead>
          <tbody id="product-table">
            <tr v-for="user in user" :key="user.userID">
                <td id="id">{{user.userID}}</td>
                <td id="name">{{ user.firstName }} {{ user.lastName }}</td>
                <td id="prodImg"><img :src="user.userProfile" :alt="user.firstName" style="width: 13.5rem"></td>
                <td id="role">{{ user.userRole}}</td>
                <td id="age">{{ user.userAge}}</td>
                <td id="email">{{ user.emailAdd}}</td>
        
                <td id="del"><button class="del">delete</button></td>
        
                <td id="edit"><button class="edit">edit</button></td>
              </tr>
          </tbody>
          </table>
       </div>
  </template>
  <script>
  import SpinnerComp from "@/components/SpinnerComp.vue";
  export default {
    computed: {
      user() {
        return this.$store.state.users;
      },
    },
    mounted() {
       this.$store.dispatch("fetchUsers");
    },
    components: {
      SpinnerComp,
    },
  };
  </script>
  <style scoped>
  </style>
 