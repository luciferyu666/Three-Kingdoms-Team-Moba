<template>
    <footer class="footer">
      <div class="container">
        <p>© 2024 三國志隊伍評分應用程式。版權所有。</p>
        <p>
          <a href="#">隱私政策</a> | <a href="#">使用條款</a>
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f5f5f5;
    text-align: center;
    padding: 20px 0;
    margin-top: 20px;
    font-size: 0.9em;
    color: #666;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  