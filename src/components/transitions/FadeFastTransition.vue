<template>
  <Transition name="fade-fast">
    <slot></slot>
  </Transition>
</template>

<script>
export default {
  name: 'FadeFastTransition',
};
</script>

<style lang="scss">
.fade-fast {
  &-enter-active {
    transition: opacity 5s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0);
  }
}
</style>
