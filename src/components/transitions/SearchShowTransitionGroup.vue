<template>
  <TransitionGroup name="search-show">
    <slot></slot>
  </TransitionGroup>
</template>

<script>
export default {
  name: 'SearchShowTransitionGroup',
};
</script>
