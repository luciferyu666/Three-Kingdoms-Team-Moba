<template>
    <div class="books-list">
      <div 
        v-for="book in books" 
        :key="book.id" 
        class="book-item"
        @click="goToBookDetail(book.id)"
      >
        <h3 class="book-title">{{ book.name }}</h3>
        <p class="book-effect">效果：{{ book.effect }}</p>
        <p class="book-type">適用類型：{{ book.type }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BooksList',
    props: {
      books: {
        type: Array,
        required: true
      }
    },
    methods: {
      goToBookDetail(bookId) {
        // 實現導航到指定兵書詳情頁面的功能，這裡僅示例，需要根據路由配置實現
        this.$router.push(`/books/${bookId}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .books-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .book-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    margin: 10px;
    width: 200px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .book-title {
    margin: 0;
    color: #333;
  }
  
  .book-effect, .book-type {
    margin: 10px 0;
    color: #666;
  }
  </style>
  