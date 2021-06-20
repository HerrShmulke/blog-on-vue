<template>
  <Transition name="fade">
    <slot></slot>
  </Transition>
</template>

<script>
export default {
  name: 'FadeTransition',
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
