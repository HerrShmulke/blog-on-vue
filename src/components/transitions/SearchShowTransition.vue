<template>
  <Transition name="search-show">
    <slot></slot>
  </Transition>
</template>

<script>
export default {
  name: 'SearchShowTransition',
};
</script>

<style lang="scss">
.search-show {
  &-enter-active {
    animation: search-show 0.4s both reverse;
  }

  &-leave-active {
    animation: search-show 0.4s both;
  }
}

@keyframes search-show {
  0% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
    -webkit-animation-timing-function: cubic-bezier(0.2727, 0.0986, 0.8333, 1);
    animation-timing-function: cubic-bezier(0.2727, 0.0986, 0.8333, 1);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
}
</style>
