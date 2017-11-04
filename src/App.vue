<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <div id="title"><router-link to="/">OneBite's Principles</router-link></div>
        <button id="createnew"><router-link to="/create">躁一篇</router-link></button>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  
  .header {
    width:100%;
    height: 80px;
    background-color: #161616;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .inner {
    color: white;
    position: relative;
  }
  .inner a {
    color: white;
  }
  a {
    text-decoration: none;
  }
  
  #title {
    position: relative;
    top: 22px;
    font-size: 32px;
    
    
  }
  
  #title a {
    color: rgb( 224, 31, 61 );
    font-weight: 900;
  }
  
  #createnew {
    position: absolute;
    right: 40px;
    top: 20px;
    font-size: 18px;
    background-color: rgb( 224, 31, 61 );
    border-color: transparent;
    padding: 5px 30px;
    border-radius: 40px;
  }
  #app {
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(/static/img/background.jpg);
    background-position: right top;
    background-repeat: no-repeat;
  }
  
</style>
