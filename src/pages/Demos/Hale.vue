<template>
  <div class="hale-contain">
    <h1>qqqqq</h1>
  </div>
</template>

<script>
  export default{
    data () {
      return {}
    },
    computed: {},
    created () {},
    beforeDestroy () {},
    mounted () {},
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // 通过 `vm` 访问组件实例
      })
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      next()
    },
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less">
  .hale-contain {
    background-color: #fff;
  }
</style>
