<template>
    <div class="generals-page">
      <h1>武將列表</h1>
      <input type="text" v-model="search" placeholder="搜索武將..." />
      <div class="generals-list">
        <GeneralCard
          v-for="general in filteredGenerals"
          :key="general.id"
          :general="general"
          @click="goToGeneralDetail(general.id)"
        />
      </div>
    </div>
  </template>
  
  <script>
  import GeneralCard from '@/components/GeneralCard.vue'; // 假設GeneralCard組件已實現
  
  export default {
    name: 'GeneralsPage',
    components: {
      GeneralCard
    },
    data() {
      return {
        generals: [], // 假設這裡將從後端獲取武將數據
        search: ''
      };
    },
    computed: {
      filteredGenerals() {
        return this.generals.filter(general =>
          general.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
    methods: {
      goToGeneralDetail(generalId) {
        this.$router.push({ name: 'GeneralDetail', params: { generalId } });
      }
    },
    mounted() {
      // 模擬從後端獲取武將數據
      this.generals = [
        { id: 1, name: '劉備', faction: '蜀', imageUrl: 'path/to/image', strength: 80, intelligence: 90 },
        // 其他武將數據...
      ];
    }
  };
  </script>
  
  <style scoped>
  .generals-page {
    padding: 20px;
  }
  
  .generals-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  input[type="text"] {
    margin: 20px 0;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
  }
  </style>
  