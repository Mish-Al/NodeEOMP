<template>
    <div>
    <input v-model="searchQuery" placeholder="Search..." />
    <button @click="performSearch">Search</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    performSearch() {
      this.$emit('search-performed', this.searchQuery);
    },
  },
}</script>

<style scoped>

</style>