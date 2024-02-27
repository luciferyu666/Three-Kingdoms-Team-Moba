<template>
    <div class="general-detail">
      <img :src="general.imageUrl" alt="武將圖像" class="general-image" />
      <h1 class="general-name">{{ general.name }}</h1>
      <p class="general-faction">陣營：{{ general.faction }}</p>
      <div class="abilities">
        <p>武力：{{ general.strength }}</p>
        <p>智力：{{ general.intelligence }}</p>
        <p>統御：{{ general.command }}</p>
        <p>速度：{{ general.speed }}</p>
      </div>
      <div class="history">
        <h2>歷史背景</h2>
        <p>{{ general.history }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GeneralDetail',
    props: {
      general: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .general-detail {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 8px;
  }
  
  .general-image {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .general-name {
    margin: 0;
    color: #333;
  }
  
  .general-faction {
    margin: 10px 0;
    color: #666;
  }
  
  .abilities, .history {
    margin: 20px 0;
  }
  
  .abilities p, .history p {
    margin: 5px 0;
  }
  
  .history {
    border-top: 1px solid #eee;
    padding-top: 20px;
  }
  </style>
  