<template>
    <div>
      <h2>戰法和兵書配置</h2>
      <div>
        <h3>選擇戰法</h3>
        <select v-model="selectedTactic">
          <option v-for="tactic in tactics" :key="tactic.id" :value="tactic">
            {{ tactic.name }}
          </option>
        </select>
      </div>
      <div>
        <h3>選擇兵書</h3>
        <select v-model="selectedBook">
          <option v-for="book in books" :key="book.id" :value="book">
            {{ book.name }}
          </option>
        </select>
      </div>
      <button @click="configure">配置</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TacticsBooksConfig',
    data() {
      return {
        tactics: [
          { id: 1, name: '連環計', effect: '減少敵方防禦力' },
          { id: 2, name: '火攻', effect: '對敵方造成直接傷害' },
          // 更多戰法...
        ],
        books: [
          { id: 1, name: '孫子兵法', effect: '提升全軍士氣' },
          { id: 2, name: '六韜', effect: '提升智謀' },
          // 更多兵書...
        ],
        selectedTactic: null,
        selectedBook: null
      };
    },
    methods: {
      configure() {
        if (this.selectedTactic && this.selectedBook) {
          // 發送配置到後端或觸發其他組件更新
          console.log('配置戰法:', this.selectedTactic.name);
          console.log('配置兵書:', this.selectedBook.name);
          // 重置選擇
          this.selectedTactic = null;
          this.selectedBook = null;
        } else {
          alert('請選擇戰法和兵書');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  select {
    margin-bottom: 20px;
  }
  
  button {
    cursor: pointer;
  }
  </style>
  