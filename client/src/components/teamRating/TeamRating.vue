<template>
    <div class="team-rating">
      <h2>隊伍綜合評分</h2>
      <p>總體評分：{{ teamRating.totalScore }}</p>
      <div class="rating-details">
        <h3>評分細節：</h3>
        <ul>
          <li v-for="(value, key) in teamRating.details" :key="key">
            {{ key }}：{{ value }}
          </li>
        </ul>
      </div>
      <div class="recommendations">
        <h3>改善建議：</h3>
        <p>{{ teamRating.recommendations }}</p>
      </div>
      <!-- 互動功能按鈕，例如重新評分 -->
      <button @click="reEvaluate">重新評分</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TeamRating',
    props: {
      teamRating: {
        type: Object,
        required: true,
        default: () => ({
          totalScore: 0,
          details: {},
          recommendations: ''
        })
      }
    },
    methods: {
      reEvaluate() {
        // 觸發重新評分的邏輯
        console.log("觸發重新評分...");
        // 實際應用中，這裡可以是重新計算評分或導航到評分配置頁面的邏輯
      }
    }
  };
  </script>
  
  <style scoped>
  .team-rating {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .rating-details ul, .recommendations {
    margin-top: 10px;
  }
  
  li {
    list-style-type: none;
  }
  
  button {
    margin-top: 20px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  