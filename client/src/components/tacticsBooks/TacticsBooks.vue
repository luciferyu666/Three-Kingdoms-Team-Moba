<template>
    <div class="tactics-books">
      <div class="config-section">
        <h2>戰法選擇</h2>
        <select v-model="selectedTactic">
          <option v-for="tactic in tactics" :key="tactic.id" :value="tactic.id">
            {{ tactic.name }}
          </option>
        </select>
      </div>
  
      <div class="config-section">
        <h2>兵書配置</h2>
        <select v-model="selectedBook">
          <option v-for="book in books" :key="book.id" :value="book.id">
            {{ book.name }}
          </option>
        </select>
      </div>
  
      <button @click="saveConfig">保存配置</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TacticsBooks',
    data() {
      return {
        tactics: [], // 應從後端獲取戰法數據
        books: [],   // 應從後端獲取兵書數據
        selectedTactic: '',
        selectedBook: ''
      };
    },
    methods: {
      saveConfig() {
        // 實現保存戰法和兵書配置的邏輯，可能需要與後端進行交互
        console.log(`已選擇的戰法ID: ${this.selectedTactic}, 已選擇的兵書ID: ${this.selectedBook}`);
      }
    },
    mounted() {
      // 示例：模擬從後端獲取數據
      this.tactics = [{ id: 't1', name: '連環計' }, { id: 't2', name: '火攻' }];
      this.books = [{ id: 'b1', name: '孫子兵法' }, { id: 'b2', name: '六韜' }];
    }
  };
  </script>
  
  <style scoped>
  .tactics-books {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .config-section {
    margin: 20px 0;
  }
  
  button {
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
  