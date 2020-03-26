<template>
  <div>
    <div>我是首页</div>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return{
      path: '/home/news'
    }
  },
  created() {
    console.log("home creatd");
    
  },
  destroyed() {
    console.log("home destroyed");
  },
  //这俩只有keep-alivec才会执行
  activated() {
    console.log(this.$route.path);
    this.$router.push(this.path)
  },
  deactivated() {
    console.log("home deactivated" );
  },
  beforeRouteLeave (to, from, next) {
    console.log(this.$route.path);
    if(this.path == this.$route.path){
      this.path = this.$route.path
    }
    
    next()
  }
}
</script>
<style scoped>

</style>