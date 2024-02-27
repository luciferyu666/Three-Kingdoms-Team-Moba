<template>
    <div id="app">
      <Navbar />
      <div class="content">
        <router-view/>
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from './components/common/Navbar.vue';
  import Footer from './components/common/Footer.vue';
  
  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    }
  };
  </script>
  
  <style>
  /* 全局樣式 */
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
  
  .content {
    min-height: calc(100vh - 120px); /* 假設Navbar和Footer高度總和為120px */
    padding: 20px;
  }
  </style>
  