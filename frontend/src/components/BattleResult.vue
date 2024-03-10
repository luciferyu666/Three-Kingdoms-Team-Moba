<template>
    <div class="battle-result">
      <h2>對戰結果</h2>
      <div v-if="result">
        <p>隊伍A評分: {{ result.teamAScore }}</p>
        <p>隊伍B評分: {{ result.teamBScore }}</p>
        <p>勝利方: {{ result.winner === 'draw' ? '平局' : result.winner }}</p>
        <p>戰鬥詳細報告: {{ result.battleReport }}</p>
      </div>
      <div v-else>
        <p>對戰結果正在計算中...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BattleResult",
    props: {
      result: Object
    }
  };
  </script>
  
  <style scoped>
  .battle-result {
    /* 根據需求添加樣式 */
  }
  </style>
  