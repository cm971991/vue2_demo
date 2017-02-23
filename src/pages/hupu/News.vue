<template>
    <div v-if="isShow">
        <div class="news-contain">
            <div class="new-head">
                <div class="container">
                    <img src="../../assets/images/hp_logo_nba.png"
                         class="logo">
                </div>
            </div>
            <div class="news-navigation">
                <tab>
                    <tab-item :selected="demo1 === 'NBA'" @click="demo1 = 'NBA'">NBA</tab-item>
                    <tab-item :selected="demo1 === 'xx1'" @click="demo1 = 'xx1'">xx1</tab-item>
                    <tab-item :selected="demo1 === 'xx2'" @click="demo1 = 'xx2'">xx2</tab-item>
                </tab>
            </div>
            <div class="new-body">
                <ul class="entries entry-list">
                    <li class="entry-item" v-for="item in list">
                        <div class="entry-info">
                            <div class="info-row">
                                <div class="entry-title-box">
                                    <a target="_blank" class="entry-title" v-bind:title="item.title"
                                       v-bind:href="item.url">{{item.name}}</a>
                                </div>
                                <div class="entry-date-box">
                                    <div class="entry-date">{{ item.data }}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import {Tab, TabItem} from 'vux'

  export default{
    components: {
      Tab, TabItem
    },
    data () {
      return {
        isShow: false,
        demo1: 'NBA',
        list: []
      }
    },
    computed: {},
    created () {
      this.$api.xHttp.get('/localApi').then((data) => {
        console.log('data:', data)
        this.list = data
        this.isShow = true
      }).catch(({code, msg}) => {
        this.$vux.alert.show({content: msg})
      })
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
      next()
    },
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less">
    .news-contain {
        background-color: #fff;

        .new-head {
            .container {
                width: 100%;
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                position: relative;
                height: 100%;
                padding: 0 .3em;
                box-sizing: border-box;
                outline: none;
                margin-left: auto;
                margin-right: auto;
                border-bottom: 1px solid #eae5e5;

                img {
                    width: 100px;
                    height: 60%;
                    cursor: pointer;
                    border: 0;
                    box-sizing: border-box;
                    outline: none;
                    margin: 15px 0 10px 0;
                }
            }
        }

        .news-navigation {
        }

        .new-body {
            ul {
                list-style: none;
                margin: 0;
                padding: 1em 0;
                box-sizing: border-box;
                outline: none;

                li {
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    position: relative;
                    padding: 0 1.5em;
                    min-height: 92px;
                    transition: background-color .3s;
                    cursor: pointer;
                    user-select: none;
                    box-sizing: border-box;
                    outline: none;

                    .entry-info {
                        display: flex;
                        min-width: 0;
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                        flex-direction: column;
                        -webkit-box-pack: center;
                        justify-content: center;
                        -webkit-box-flex: 1;
                        flex: 1 1 0;
                        padding: 0;
                        font-size: .7em;
                        color: rgba(24, 37, 50, .3);
                        box-sizing: border-box;
                        outline: none;

                        .info-row {
                            -webkit-box-align: center;
                            align-items: center;
                            min-height: 2.8em;
                            display: flex;
                            min-width: 0;
                            box-sizing: border-box;
                            outline: none;

                            .entry-title-box {
                                -webkit-box-flex: 1;
                                flex: 1 1 0;
                                font-size: 1.5em;
                                line-height: 1.5em;
                                font-weight: 600;
                                letter-spacing: .02em;
                                color: #333;
                                min-width: 0;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                box-sizing: border-box;
                                outline: none;

                                a {
                                    white-space: normal;
                                    overflow: auto;
                                    transition: color .3s;
                                    color: #333;
                                    text-decoration: none;
                                    background-color: transparent;
                                    box-sizing: border-box;
                                    outline: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
