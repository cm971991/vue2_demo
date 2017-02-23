<template>
  <div class="index-contain">
    <div class="vux-demo">
      <img class="logo" src="../assets/images/hp_logo_nba.png">
      <h2>vux2项目模版</h2>
    </div>
    <group title="控件">
      <cell title="按钮" :link="{path:'/button'}"></cell>
      <cell title="弹窗" :link="{path:'/dialog'}"></cell>
      <cell title="上拉加载下拉刷新" :link="{path:'/load'}"></cell>
      <cell title="常用输入组件" :link="{path:'/input'}"></cell>
    </group>
    <group title="接口">
      <cell title="调用接口" :link="{path:'/http'}"></cell>
      <cell title="调用App接口" :link="{path:'/sp'}"></cell>
    </group>
    <group title="Utils">
      <cell title="常用辅助方法" :link="{path:'/utils'}"></cell>
    </group>
    <group title="微信">
      <cell title="测试微信jssdk" :link="{path:'/wx'}"></cell>
    </group>
    <group title="虎扑">
      <cell title="测试虎扑" :link="{path:'/hale'}"></cell>
    </group>
  </div>
</template>

<script>
  import { Cell, Group } from 'vux'

  export default{
    components: {
      Cell, Group
    },
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
  .index-contain {
    background-color: #fff;
    .vux-demo {
      text-align: center;
    }

    .logo {
      width: 100px;
      height: 100px
    }
  }
</style>
