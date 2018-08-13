<style scoped>

</style>
<template>
  <div>
    <h1>{{title}} : {{id}}</h1>
  </div>
</template>
<script>
export default {
  props:["id"],
  data () {
    return {
      "title" :  "Produtos",
    }
  }
}
</script>
