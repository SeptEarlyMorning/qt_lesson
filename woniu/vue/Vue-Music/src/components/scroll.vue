<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'
import BScroll from 'better-scroll'
export default {
  props:{
    click:{
      type:Boolean,
      default:true
    }
  },
  mounted(){
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods:{
    // better-scroll的设置
    _initScroll() {
      if(this.$refs.wrapper){
        return ;
      }
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:this.click,
        probeType:this.probeType,
        eventPassthrough: this.direction === DIRECTION_V ? DIRECTION_H : DIRECTION_V
      });
      // 是否派发滚动事件
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }

      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('scrollToEnd')
          }
        })
      }

      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on('touchend', (pos) => {
          // 下拉动作
          if (pos.y > 50) {
            this.$emit('pulldown')
          }
        })
      }

      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    disable() {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable()
    },
    enable() {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable()
    },
    refresh() {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
  },
  watch:{
    data() {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    }
  }
}
</script>

<style>

</style>