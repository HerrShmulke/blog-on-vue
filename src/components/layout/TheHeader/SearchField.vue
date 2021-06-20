<template>
  <form class="the-header-search-field" @submit.prevent="find">
    <VButtonIcon class="the-header-search-field__icon-button" aria-label="Найти" @click="find">
      <MagnifyingGlassIcon />
    </VButtonIcon>

    <input
      ref="searchField"
      type="text"
      class="the-header-search-field__field"
      placeholder="Поиск на OnlyTrue"
      autocapitalize="off"
      autocorrect="off"
      autocomplete="off"
      aria-autocomplete="list"
    />

    <VButtonIcon
      class="the-header-search-field__icon-button"
      aria-label="Закрыть поиск"
      @click="close"
    >
      <CrossIcon />
    </VButtonIcon>
  </form>
</template>

<script>
import VButtonIcon from '@/components/ui/VButtonIcon.vue';
import CrossIcon from '@/components/icons/CrossIcon.vue';
import MagnifyingGlassIcon from '@/components/icons/MagnifyingGlassIcon.vue';

export default {
  name: 'TheHeaderSearchField',

  components: { VButtonIcon, CrossIcon, MagnifyingGlassIcon },

  emits: ['close', 'find'],

  mounted() {
    console.log(this.$refs.searchField.focus());
  },

  methods: {
    close() {
      this.$emit('close');
    },

    find() {
      this.$emit('find');
    },
  },
};
</script>

<style lang="scss">
.the-header-search-field {
  animation: searchform-slide 1s 0.4s both;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  color: $color-blue-20;
  display: flex;
  flex-direction: row;

  &__field {
    animation: searchform-fade 0.4s 0.4s both;
    width: 100%;
    flex-grow: 1;
    font-size: 18px;
    outline: none;
    border: none;
    padding: 0 10px;
    font-family: inherit;
  }

  &__icon-button {
    color: rgba($color-blue-20, 0.8);
    animation: searchform-fade 0.4s 0.4s both;
    transition: color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

    &:hover {
      color: rgba($color-blue-20, 1);
    }
  }

  @keyframes searchform-slide {
    0% {
      transform: translate3d(100px, 0, 0);
      animation-timing-function: cubic-bezier(0.12, 0.87, 0.15, 1);
    }
    100% {
      transform: translateZ(0);
    }
  }

  @keyframes searchform-fade {
    0% {
      opacity: 0;
      animation-timing-function: cubic-bezier(0.67, 0, 0.33, 1);
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
