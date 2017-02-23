<template>
  <div class="i-hide-input-contain">
    <div v-if="showTopLine"></div>
    <cell :title="hideValue" @click.native="idCardClick"
          v-show="(!autoHide||currentValue.length==length)&&!showInput">
      <div slot="icon" style="width: 4em; text-align: right; margin-right: 1em;">
        {{title}}
      </div>
    </cell>
    <x-input :title=title :placeholder=placeholder v-model="currentValue" :max="length" :keyboard="keyboard"
             v-show="(autoHide&&currentValue.length!==length)||showInput" ref="idCardInput" @on-blur="onBlur"></x-input>
  </div>
</template>

<script>
  import { XInput, Cell } from 'vux'
  export default{
    props: {
      value: String,
      type: String,
      title: String,
      placeholder: String,
      showTopLine: {
        type: Boolean,
        default: true
      }
    },
    components: {
      XInput,
      Cell
    },
    data () {
      return {
        currentValue: '',
        showInput: true,
        length: 0,
        regular: null,
        autoHide: true,
        keyboard: null
      }
    },
    computed: {
      hideValue () {
        if (this.currentValue && (!this.autoHide || this.currentValue.length === this.length)) {
          return this.currentValue.replace(this.regular[0], this.regular[1])
        }
        return ''
      }
    },
    created () {
      switch (this.type) {
        case 'idCard' : {
          this.length = 18
          this.regular = [/(\d{2})\d{14}(\d{2})/, '$1∗∗∗∗∗∗∗∗∗∗∗∗∗∗$2']
          break
        }
        case 'name' : {
          this.length = 6
          this.regular = [/.(?=.)/g, '∗']
          this.autoHide = false
          break
        }
        case 'phone' : {
          this.length = 11
          this.regular = [/(\d{3})\d{4}(\d{4})/, '$1∗∗∗∗$2']
          this.keyboard = 'number'
          break
        }
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
      next()
    },
    methods: {
      onBlur () {
        this.showInput = false
      },
      idCardClick () {
        this.showInput = true
        this.$nextTick(() => {
          this.$refs.idCardInput.focus()
        })
      }
    },
    watch: {
      value (val) {
        this.currentValue = val
      },
      currentValue (val) {
        if (this.autoHide && val && val.length === this.length) {
          this.showInput = false
        }
        this.$emit('input', val)
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .i-hide-input-contain {
    .weui_label {
      width: 4em !important;
      text-align: right;
      margin-right: 1em;
    }
  }
</style>
