<template>
    <div class="team-rating-page">
      <h1>隊伍評分結果</h1>
      <div class="rating-summary">
        <h2>總體評分：{{ rating.totalScore }}</h2>
        <p>隊伍表現概述：</p>
        <p>{{ rating.summary }}</p>
      </div>
      <div class="rating-details">
        <h3>評分細節：</h3>
        <ul>
          <li v-for="(score, aspect) in rating.details" :key="aspect">
            {{ aspect }}：{{ score }}
          </li>
        </ul>
      </div>
      <div class="recommendations">
        <h3>改善建議：</h3>
        <p>{{ rating.recommendations }}</p>
      </div>
      <button @click="reEvaluate">重新評分</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TeamRatingPage',
    data() {
      return {
        rating: {
          totalScore: 85,
          summary: "您的隊伍在攻擊力上表現出色，但在策略多樣性上還有提升的空間。",
          details: {
            "攻擊力": 90,
            "防禦力": 80,
            "策略多樣性": 75
          },
          recommendations: "考慮增加具有輔助戰法的武將來提升策略多樣性。"
        }
      };
    },
    methods: {
      reEvaluate() {
        // 實現重新評分的邏輯，可能涉及導航到隊伍配置頁面或直接重新計算評分
        console.log("重新評分...");
      }
    }
  };
  </script>
  
  <style scoped>
  .team-rating-page {
    padding: 20px;
  }
  
  .rating-summary, .rating-details, .recommendations {
    margin-bottom: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  button {
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  