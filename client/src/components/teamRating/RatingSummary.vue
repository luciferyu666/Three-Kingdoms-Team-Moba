<template>
    <div class="rating-summary">
      <h2>隊伍評分摘要</h2>
      <p>總體評分：{{ summary.totalScore }}</p>
      <div class="strengths-weaknesses">
        <h3>優點：</h3>
        <ul>
          <li v-for="strength in summary.strengths" :key="strength">
            {{ strength }}
          </li>
        </ul>
        <h3>弱點：</h3>
        <ul>
          <li v-for="weakness in summary.weaknesses" :key="weakness">
            {{ weakness }}
          </li>
        </ul>
      </div>
      <div class="recommendations">
        <h3>改善建議：</h3>
        <p>{{ summary.recommendations }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RatingSummary',
    props: {
      summary: {
        type: Object,
        required: true,
        default: () => ({
          totalScore: 0,
          strengths: [],
          weaknesses: [],
          recommendations: ""
        })
      }
    }
  };
  </script>
  
  <style scoped>
  .rating-summary {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .strengths-weaknesses, .recommendations {
    margin-top: 20px;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  </style>
  