<template>
    <div class="rating-detail">
      <h2>隊伍評分詳細結果</h2>
      <p>總體評分：{{ rating.totalScore }}</p>
      <div class="score-details">
        <h3>分項評分：</h3>
        <ul>
          <li v-for="(score, key) in rating.scores" :key="key">
            {{ key }}：{{ score }}
          </li>
        </ul>
      </div>
      <div class="recommendations">
        <h3>改善建議：</h3>
        <p>{{ rating.recommendations }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RatingDetail',
    props: {
      rating: {
        type: Object,
        required: true,
        default: () => ({
          totalScore: 0,
          scores: {},
          recommendations: ""
        })
      }
    }
  };
  </script>
  
  <style scoped>
  .rating-detail {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .score-details, .recommendations {
    margin-top: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  </style>
  