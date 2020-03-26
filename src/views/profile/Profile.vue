<template>
  <div>
    <div>这是我的</div>
    <div>{{$route.params.id}}</div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  created() {
    console.log('profile create');
  },
  destroyed() {
    console.log('profile destroyed');
  },
}
</script>