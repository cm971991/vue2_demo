<template>
  <div id="app" style="height:100%;">
    <view-box ref="AppViewBox">
      <div class="page-wrap">
        <!--顶部留白-->
        <div class="clearfix span" v-show="showTopSpace"></div>
        <!--default slot-->
        <transition :name="transitionName">
          <router-view class="router-view"></router-view>
        </transition>
      </div>
      <!--底部提示-->
      <footer class="site-footer" v-show="showFoot">
        <p class="weui-footer__links">
          <a href="javascript:void(0);" class="weui-footer__link">底部链接</a>
          <a href="javascript:void(0);" class="weui-footer__link">底部链接</a>
        </p>
        <p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>
      </footer>
    </view-box>
  </div>
</template>

<script>
  import { ViewBox } from 'vux'
  import { mapState } from 'vuex'

  export default {
    components: {
      ViewBox
    },
    created () {
    },
    beforeDestroy () {},
    data () {
      return {
        routerTransition: {
          forward: 'slideRL',
          back: 'slideLR'
        },
        transition: 'go'
      }
    },
    computed: {
      ...mapState({
        isLoading: ({global}) => global.isLoading,
        direction: ({global}) => global.direction,
        showTopSpace: ({global}) => global.showTopSpace,
        showFoot: ({global}) => global.showFoot
      }),
      transitionName () {
        return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "~vux/src/styles/reset.less";
  @import "~vux/src/styles/1px.less";
  @import "assets/styles/global/close";
  @import "assets/styles/App/common";
  @import "assets/styles/App/custom";
  @import "assets/styles/Global/global.css";
</style>
