<template>
    <div>
      <ul>
        <li v-for="result in searchResults" :key="result.id">{{ result.name }}</li>
      </ul>
    </div>
  </template>
  <script>
  export default {
    props: ['searchResults'],
  };
  </script>

<style scoped>

</style>