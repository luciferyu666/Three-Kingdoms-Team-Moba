<template>
    <div class="tactics-page">
      <h1>戰法選擇</h1>
      <input type="text" v-model="searchQuery" placeholder="搜索戰法..." class="search-box" />
      <div class="tactics-list">
        <div
          v-for="tactic in filteredTactics"
          :key="tactic.id"
          class="tactic-item"
          @click="selectTactic(tactic)"
        >
          <h3>{{ tactic.name }}</h3>
          <p>效果：{{ tactic.effect }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TacticsPage',
    data() {
      return {
        tactics: [], // 模擬戰法數據，實際應從後端獲取
        searchQuery: ''
      };
    },
    computed: {
      filteredTactics() {
        return this.tactics.filter(tactic =>
          tactic.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    methods: {
      selectTactic(tactic) {
        // 實現選擇戰法的邏輯，例如導航到戰法詳細頁面或直接配置到武將
        console.log("選擇戰法：", tactic);
      }
    },
    mounted() {
      // 模擬從後端獲取戰法數據
      this.tactics = [
        { id: 1, name: '連環計', effect: '使敵方全體混亂' },
        { id: 2, name: '火攻', effect: '對敵方全體造成大量傷害' },
        // 更多戰法...
      ];
    }
  };
  </script>
  
  <style scoped>
  .tactics-page {
    padding: 20px;
  }
  
  .search-box {
    margin: 20px 0;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }
  
  .tactics-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  .tactic-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 10px;
    padding: 20px;
    width: calc(33.333% - 20px);
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .tactic-item:hover {
    background-color: #f0f0f0;
  }
  </style>
  