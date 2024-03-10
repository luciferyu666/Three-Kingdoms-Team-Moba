<template>
    <div>
      <h2>武將列表</h2>
      <ul>
        <li v-for="general in generals" :key="general.id" @click="selectGeneral(general)">
          {{ general.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GeneralsList',
    data() {
      return {
        // 假設的武將數據
        generals: [
          { id: 1, name: '劉備' },
          { id: 2, name: '關羽' },
          { id: 3, name: '張飛' },
          // 更多武將...
        ]
      };
    },
    methods: {
      selectGeneral(general) {
        // 觸發一個自定義事件，並將選中的武將作為參數傳遞
        this.$emit('generalSelected', general);
      }
    }
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    cursor: pointer;
    margin: 5px 0;
    padding: 5px;
    transition: background-color 0.2s ease;
  
    /* 添加一點樣式以提高互動性 */
  }
  
  li:hover {
    background-color: #f0f0f0;
  }
  </style>
  