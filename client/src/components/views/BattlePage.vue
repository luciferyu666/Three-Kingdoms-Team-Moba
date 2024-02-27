<template>
    <div class="battle-page">
      <h1>模擬對戰</h1>
      <div class="teams-selection">
        <div class="team">
          <h2>隊伍一</h2>
          <!-- 假設有一個TeamSelector組件讓用戶選擇隊伍 -->
          <TeamSelector @teamSelected="setTeam(1, $event)" />
        </div>
        <div class="team">
          <h2>隊伍二</h2>
          <TeamSelector @teamSelected="setTeam(2, $event)" />
        </div>
      </div>
      <button @click="simulateBattle">開始對戰</button>
      <BattleResult v-if="battleResult" :result="battleResult" />
    </div>
  </template>
  
  <script>
  import TeamSelector from './TeamSelector.vue'; // 假設的組件，用於選擇隊伍
  import BattleResult from './BattleResult.vue'; // 用於展示對戰結果的組件
  
  export default {
    name: 'BattlePage',
    components: {
      TeamSelector,
      BattleResult
    },
    data() {
      return {
        team1: null,
        team2: null,
        battleResult: null
      };
    },
    methods: {
      setTeam(teamNumber, team) {
        if (teamNumber === 1) {
          this.team1 = team;
        } else {
          this.team2 = team;
        }
      },
      simulateBattle() {
        // 假設有一個simulateBattle方法來處理對戰邏輯
        // 這裡僅模擬對戰結果
        this.battleResult = {
          winner: '隊伍一',
          details: '隊伍一在對戰中展現了優異的策略...'
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .battle-page {
    text-align: center;
  }
  
  .teams-selection {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .team {
    margin: 0 20px;
  }
  
  button {
    padding: 10px 20px;
    cursor: pointer;
  }
  </style>
  