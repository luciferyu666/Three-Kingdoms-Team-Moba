<template>
    <div class="general-card">
      <img :src="general.imageUrl" alt="武將圖像" class="general-image"/>
      <h3 class="general-name">{{ general.name }}</h3>
      <p class="general-faction">陣營：{{ general.faction }}</p>
      <p class="general-abilities">武力：{{ general.strength }} | 智力：{{ general.intelligence }} | 統御：{{ general.command }}</p>
      <button @click="viewDetails">查看詳情</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GeneralCard',
    props: {
      general: {
        type: Object,
        required: true
      }
    },
    methods: {
      viewDetails() {
        // 實現導航到武將詳細頁面的邏輯
        // 例如：this.$router.push(`/generals/${this.general.id}`);
        alert("查看武將詳情的功能尚未實現。");
      }
    }
  };
  </script>
  
  <style scoped>
  .general-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    margin: 10px;
    text-align: center;
    width: 200px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .general-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  .general-name {
    margin: 10px 0 5px 0;
    color: #333;
  }
  
  .general-faction, .general-abilities {
    margin: 5px 0;
    color: #666;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    margin-top: 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  