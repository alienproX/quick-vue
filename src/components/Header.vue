<template>
  <div id="header">
    <div id="processBar"></div>
    <router-link :to="{ path: '/'}">
      Home
    </router-link>
    <router-link :to="{ path: '/demo'}">
      Demo
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'header',
  computed: {}
}
</script>

<style lang="sass">
@import "../assets/style/reset.scss"
</style>
<style scoped lang="sass">
@import "../assets/style/header.scss"
</style>
