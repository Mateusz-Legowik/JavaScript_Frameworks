<template>
  <div id="app">
    <TestUAM
    />
  </div>
</template>

<script>
import TestUAM from './components/TestUAM.vue'

export default{
  name: 'App',
  components: {TestUAM}
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
