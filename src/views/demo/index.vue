<template>
  <div id="demo">
    this is {{data}}
    <br>
    filter: {{'text' | filterDemo}}
  </div>
</template>

<script>
import Controller from './handle'
export default Controller
</script>

<style scoped lang="sass">
@import "../../assets/style/demo/index.scss"
</style>
