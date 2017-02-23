import Index from './pages/Index.vue'
import Button from './pages/Demos/Button.vue'
import Dialog from './pages/Demos/Dialog.vue'
import Utils from './pages/Demos/Utils.vue'
import Input from './pages/Demos/Input.vue'
import SpApi from './pages/Demos/SpApi.vue'
import Wexin from './pages/Demos/Wexin.vue'
import Http from './pages/Demos/Http.vue'
import Hale from './pages/Demos/Hale.vue'
import News from './pages/hupu/News.vue'

module.exports = {
  defaultTitle: 'vux模版项目',
  routes: [
    {path: '/', component: Index},
    {path: '/button', component: Button, meta: {title: '按钮'}},
    {path: '/dialog', component: Dialog},
    {path: '/utils', component: Utils},
    // 异步加载组件方式（推荐）
    {
      path: '/load',
      component: function (resolve) {
        require(['./pages/Demos/PulldownPullup.vue'], resolve)
      }
    },
    {path: '/input', component: Input},
    {path: '/sp', component: SpApi},
    {path: '/wx', component: Wexin},
    {path: '/http', component: Http},
    {path: '/hale', component: Hale},
    {path: '/news', component: News}
  ],
  // 默认页面头部留2%高度的余白，不需要的页面需特殊处理
  noShowTopSpacePage: ['/news'],
  // 默认展示底部提示，不需要的页面需特殊处理
  noShowFootPage: ['/button', '/news']
}
