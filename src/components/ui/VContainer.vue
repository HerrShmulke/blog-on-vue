<template>
  <div :class="$style.container">
    <slot></slot>
  </div>
</template>

<style lang="scss" module>
.container {
  max-width: 980px;
  margin: 0 auto;
}
</style>
