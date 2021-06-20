<template>
  <TheHeader />
  <div :class="[$style.main]">
    <RouterView />
  </div>
</template>

<script>
// Components
import TheHeader from '@/components/layout/TheHeader';

export default {
  name: 'DefaultLayout',

  components: { TheHeader },
};
</script>

<style lang="scss" module>
.main {
  max-width: 980px;
  margin: 0 auto;
}
</style>
