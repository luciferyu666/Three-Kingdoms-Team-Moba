<template>
    <div id="app">
      <nav>
        <ul>
          <li><router-link to="/">主页</router-link></li>
          <li><router-link to="/generals">武将列表</router-link></li>
          <li><router-link to="/tactics">战法</router-link></li>
          <li><router-link to="/books">兵书</router-link></li>
        </ul>
      </nav>
      <router-view/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  };
  </script>
  
  <style>
  /* 简单的样式，根据实际需求调整 */
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 10px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #000;
  }
  
  nav ul li a.router-link-exact-active {
    font-weight: bold;
  }
  </style>
  