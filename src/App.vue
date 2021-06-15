<template>
  <div :style="scrollFixWidthStyle" :class="[$style.scrollFix]">
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      scrollBarWidth: this.getScrollWidth(),
      scrollFixWidth: this.getSizeWithoutScrollbar(),
    };
  },

  computed: {
    scrollFixWidthStyle() {
      return { width: `${this.scrollFixWidth}px` };
    },
  },

  mounted() {
    window.addEventListener('resize', this.resizeHandler);
  },

  unmounted() {
    window.removeEventListener('resize', this.resizeHandler);
  },

  methods: {
    resizeHandler() {
      this.scrollFixWidth = this.getSizeWithoutScrollbar();
    },

    getSizeWithoutScrollbar() {
      return window.innerWidth - (this.scrollBarWidth || this.getScrollWidth());
    },

    getScrollWidth() {
      const bodyWidth = document.querySelector('body').clientWidth;
      const scrollBarWidth = window.innerWidth - bodyWidth;

      return scrollBarWidth;
    },
  },
};
</script>

<style lang="scss" module>
.scrollFix {
  position: relative;
  min-height: 100vh;
}
</style>
