<template>
    <div class="general-details" v-if="general">
      <h2>{{ general.name }}</h2>
      <p><strong>屬性：</strong>{{ general.attributes }}</p>
      <p><strong>戰力：</strong>{{ general.strength }}</p>
      <p><strong>智力：</strong>{{ general.intelligence }}</p>
      <p><strong>速度：</strong>{{ general.speed }}</p>
    </div>
    <div v-else>
      <p>請選擇一名武將以查看詳細資訊。</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "GeneralDetails",
    props: {
      general: Object
    }
  };
  </script>
  
  <style scoped>
  .general-details {
    border: 1px solid #ddd;
    padding: 20px;
    margin-top: 20px;
  }
  </style>
  