<template>
  <header>
    <nav> </nav>
  </header>
  <div :class="[$style.main]">
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>

<style lang="scss" module>
.main {
  max-width: 980px;
  margin: 0 auto;
}
</style>
