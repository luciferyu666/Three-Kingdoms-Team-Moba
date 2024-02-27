<template>
    <div class="tactics-list">
      <div v-for="tactic in tactics" :key="tactic.id" class="tactic-item" @click="selectTactic(tactic)">
        <h3 class="tactic-name">{{ tactic.name }}</h3>
        <p class="tactic-effect">效果：{{ tactic.effect }}</p>
        <p class="tactic-type">適用類型：{{ tactic.type }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TacticsList',
    props: {
      tactics: {
        type: Array,
        required: true
      }
    },
    methods: {
      selectTactic(tactic) {
        // 實現選擇戰法的邏輯，例如發射事件或導航到詳細頁面
        this.$emit('tacticSelected', tactic);
      }
    }
  };
  </script>
  
  <style scoped>
  .tactics-list {
    display: flex;
    flex-direction: column;
  }
  
  .tactic-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;
  }
  
  .tactic-item:hover {
    background-color: #f9f9f9;
  }
  
  .tactic-name {
    margin: 0;
    color: #333;
  }
  
  .tactic-effect, .tactic-type {
    margin: 5px 0;
    color: #666;
  }
  </style>
  