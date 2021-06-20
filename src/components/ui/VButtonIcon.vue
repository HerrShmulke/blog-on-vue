<template>
  <button :class="[$style.buttonIcon]" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VButtonIcon',
};
</script>

<style lang="scss" module>
.buttonIcon {
  background: none;
  cursor: pointer;
  display: flex;
  border: none;
  padding: 0;
  margin: 0;
}
</style>
