<template>
    <div class="detail-contain">
        <x-header :left-options="{showBack:'true'}" style="background-color:#E01A1A;">NBA新闻</x-header>
        <div class="detail-title">
            <strong>{{model.header}}</strong>
        </div>
        <div class="detail-image">
            <img :src="model.image">
        </div>
        <div class="detail-content">
            <p v-for="item in model.content">
                {{item}}
            </p>
        </div>
    </div>
</template>

<script>
  import {XHeader, XImg} from 'vux'

  export default{
    components: {XHeader, XImg},
    data () {
      return {
        model: {}
      }
    },
    computed: {},
    created () {
      let id = this.$route.query.id;
      let local = localStorage.getItem(id);
      if (local) {
        this.model = JSON.parse(local);
        console.log("model:", this.model)
      }
    },
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
      console.log("this:", this);
      next()
    },
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less">
    .detail-contain {
        background-color: #fff;
        .detail-title {
            margin: 10px 0;
            padding: 5px 15px;
            font-size: 18px;
        }

        .detail-image {
            padding: 5px 15px;
        }

        .detail-content {
            padding: 5px 15px;

            p {
                padding: 10px 0;
                font-size: 18px;
                color: #444;
            }
        }
    }
</style>
