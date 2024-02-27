<template>
    <div class="general-list">
      <GeneralCard
        v-for="general in generals"
        :key="general.id"
        :general="general"
        @click="goToGeneralDetail(general.id)"
      />
    </div>
  </template>
  
  <script>
  // 導入GeneralCard組件
  import GeneralCard from './GeneralCard.vue';
  
  export default {
    name: 'GeneralList',
    components: {
      GeneralCard
    },
    props: {
      generals: {
        type: Array,
        required: true
      }
    },
    methods: {
      goToGeneralDetail(generalId) {
        // 實現導航到指定武將詳情頁面的功能，這裡僅示例，需要根據路由配置實現
        this.$router.push(`/generals/${generalId}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .general-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }
  
  /* GeneralCard組件樣式可在GeneralCard.vue中定義，此處僅設置列表布局 */
  </style>
  