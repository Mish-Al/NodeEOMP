<template>
    <div class="container">
      <div class="row">
        <div class="display-2">
          <h2>Users</h2>
        </div>
        <div class="row justify-content-center gap-3" v-if="user">
          <div
            v-for="user in user"
            class="card"
            style="width: 18rem"
            :key="user.userID"
          >
            <img
              :src="user.userProfile"
              class="card-img-top"
              :alt="user.firstName"
            />
            <div class="card-body">
              <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
              <p class="card-text">
                Age : {{ user.userAge }}
              </p>
              <p>
                Email : {{ user.emailAdd }}
              </p>
            </div>
          </div>
        </div>
        <div v-else class="row">
          <SpinnerComp/>
        </div>
      </div>
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
 