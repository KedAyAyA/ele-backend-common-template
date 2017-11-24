<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html, body {
	margin: 0px;
	padding: 0px;
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  font-size: 14px;
  height: 100%;
  width: 100%;
	-webkit-font-smoothing: antialiased;
}

section,div,aside,header {
  box-sizing: border-box;
}

.el-menu-item [class^=fa], .el-submenu [class^=fa] {
    color: #fff;
    vertical-align: baseline;
    margin-right: 10px;
}

.el-submenu__title i {
  color: #fff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
