<template>
  <div id="app">

    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/profile/' + id" tag="button">我的</router-link>


    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      id: 'zhangsan'
    }
  }
}
</script>

<style>

</style>
