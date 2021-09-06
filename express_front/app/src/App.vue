<template>
  <div>
    <h1> Test Applications</h1>
    <TestComponent msg="Test hot reload"></TestComponent>
  </div>
</template>
<script>
  import TestComponent from "./components/TestComponent";
    export default {
        name: "App",
        components: {
            TestComponent
        }
    }
</script>

<style>
  #app {
    background-color: aquamarine;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
