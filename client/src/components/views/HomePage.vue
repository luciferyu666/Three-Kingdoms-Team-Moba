<template>
    <div class="home-page">
      <h1>歡迎來到三國志隊伍評分應用程式</h1>
      <p>這是一個幫助你評估和優化你的三國志遊戲隊伍配置的工具。</p>
      
      <div class="navigation">
        <h2>探索功能</h2>
        <button @click="navigateTo('GeneralsPage')">查看武將列表</button>
        <button @click="navigateTo('BattlePage')">模擬對戰</button>
        <button @click="navigateTo('TeamRatingPage')">隊伍評分</button>
      </div>
      
      <div class="latest-news">
        <h2>最新資訊</h2>
        <p>現在支援全新的武將和戰法！</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    methods: {
      navigateTo(pageName) {
        this.$router.push({ name: pageName });
      }
    }
  };
  </script>
  
  <style scoped>
  .home-page {
    text-align: center;
    padding: 20px;
  }
  
  .navigation button {
    margin: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .navigation button:hover {
    background-color: #0056b3;
  }
  
  .latest-news {
    margin-top: 40px;
  }
  </style>
  