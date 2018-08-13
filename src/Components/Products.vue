<style scoped>

</style>
<template>
  <div>
    <h1>{{title}} : {{$route.params.id}}</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      "title" :  "Produtos",
    }
  }
}
</script>
