<template>
    <div v-if="isShow">
        <div class="news-contain">
            <div class="new-head">
                <div class="container">
                    <h1>虎扑体育</h1>
                </div>
            </div>
            <div class="news-navigation">
                <tab bar-active-color="#e01a1a" active-color="#e01a1a">
                    <tab-item :selected="navigationTitle === 'NBA'" @click="navigationTitle = 'NBA'">NBA</tab-item>
                    <tab-item :selected="navigationTitle === 'CBA'" @click="navigationTitle = 'CBA'">CBA</tab-item>
                </tab>
            </div>
            <div class="new-body">
                <ul class="entries entry-list">
                    <li class="entry-item" v-for="item in list">
                        <div class="entry-info">
                            <div class="info-row">
                                <div class="entry-title-box">
                                    <a target="_blank" class="entry-title" :title="item.title"
                                       @click="detail(item)">{{item.title}}</a>
                                </div>
                                <div class="entry-date-box">
                                    <div class="entry-date">{{ item.time }}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="new-footer">
                <a :page="paging.homePage" @click="getList(paging.homePage)">首页</a>
                <a :page="paging.previousPage" @click="getList(paging.previousPage)">上一页</a>
                <a :page="paging.nextPage" @click="getList(paging.nextPage)">下一页</a>
                <a :page="paging.lastPage" @click="getList(paging.lastPage)">末页</a>
            </div>
        </div>
    </div>
</template>

<script>
  import {Tab, TabItem} from 'vux'
  import VueRouter from 'vue-router'

  export default{
    components: {
      Tab, TabItem
    },
    data () {
      return {
        isShow: false,
        navigationTitle: 'NBA',
        list: []
      }
    },
    computed: {},
    created () {
      this.getList(1);
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
    methods: {
      getList(pageSize){
        let url = '/localApi/hupu/getlist/' + pageSize;
        this.$api.xHttp.get(url).then((data) => {
          console.log("data:", data);
          this.list = data.list;
          this.paging = data.paging;
          this.isShow = true
        }).catch(({code, msg}) => {
          this.$vux.alert.show({content: msg})
        })
      },
      detail(item){
        let local = localStorage.getItem(item.id);
        if (!local) {
          console.log("local is empty");
          console.log("JSON.stringify(item.article):", JSON.stringify(item.article))
          localStorage.setItem(item.id, JSON.stringify(item.article));
        }
        const router = new VueRouter({});
        router.push({path: '/detail', query: {id: item.id}})
      }
    }
  }
</script>


<style lang="less" rel="stylesheet/less">
    .news-contain {
        background-color: #fff;

        .new-head {
            background-color: #e01a1a;

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

                h1 {
                    color: #fff;
                    font-size: 18px;
                    padding: 10px 0;
                    text-align: center;
                    vertical-align: middle;
                    width: 100%;
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
                    border-bottom: 1px solid #e5e5e5;

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

        .new-footer {
            background-color: #f3f3f3;
            display: block;
            display: -moz-box;
            display: -webkit-box;
            width: 100%;
            text-align: center;
            padding: 14px 6px;
            border-bottom: 1px solid #e3e4e5;
            box-sizing: border-box;

            a {
                display: block;
                background-color: #fff;
                padding: 8px 6px;
                color: #000;
                border: 1px solid #e3e3e3;
                -moz-box-flex: 1;
                -webkit-box-flex: 1;
                margin: 0 4px;
                -webkit-tap-highlight-color: transparent;
                text-decoration: none;
                box-sizing: border-box;
            }
        }
    }
</style>
