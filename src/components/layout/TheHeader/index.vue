<template>
  <div class="header">
    <FadeTransition>
      <div v-if="isFocused" class="header__overlay" @click="blur"></div>
    </FadeTransition>
    <header class="header__wrapper" :class="{ 'header__wrapper--open': isFocused }">
      <VContainer class="header__container">
        <SearchShowTransition>
          <div v-show="!isFocused" :style="getDelayStyle(0)" class="header__logo-wrapper">
            OnlyTrue
          </div>
        </SearchShowTransition>

        <SearchShowTransitionGroup tag="nav" class="header__nav-wrapper">
          <RouterLink
            v-for="(route, index) of $options.ROUTES"
            v-show="!isFocused"
            :key="route.id"
            :to="route.name"
            :style="getDelayStyle(index + 1)"
            class="header__link"
          >
            {{ route.text }}
          </RouterLink>
        </SearchShowTransitionGroup>

        <SearchShowTransition>
          <div v-show="!isFocused" :style="getDelayStyle(4)" class="header__actions-container">
            <FadeFastTransition mode="out-in">
              <VButtonIcon
                class="header__search-button"
                aria-label="Открыть окно поиска"
                @click="focus"
              >
                <MagnifyingGlassIcon />
              </VButtonIcon>
            </FadeFastTransition>
          </div>
        </SearchShowTransition>

        <TheSidebarSearchField v-if="isFocused" @close="blur" />
      </VContainer>
    </header>
  </div>
</template>

<script>
// Components
import VContainer from '@/components/ui/VContainer.vue';
import VButtonIcon from '@/components/ui/VButtonIcon.vue';
import MagnifyingGlassIcon from '@/components/icons/MagnifyingGlassIcon.vue';
import FadeTransition from '@/components/transitions/FadeTransition.vue';
import FadeFastTransition from '@/components/transitions/FadeFastTransition.vue';
import SearchShowTransition from '@/components/transitions/SearchShowTransition.vue';
import SearchShowTransitionGroup from '@/components/transitions/SearchShowTransitionGroup.vue';
import TheSidebarSearchField from './SearchField.vue';

const DELAY_COUNT_DISAPPEARING_ITEMS = 5;
const DELAY_STEP = 35;
const ROUTES = [
  { id: 0, name: '#', text: 'Статьи' },
  { id: 1, name: '#', text: 'Обзоры' },
  { id: 2, name: '#', text: 'Новости' },
];

export default {
  name: 'TheHeader',

  components: {
    VContainer,
    VButtonIcon,
    MagnifyingGlassIcon,
    FadeTransition,
    FadeFastTransition,
    SearchShowTransition,
    SearchShowTransitionGroup,
    TheSidebarSearchField,
  },

  data: () => ({
    isFocused: false,
  }),

  methods: {
    focus() {
      this.isFocused = true;
    },

    blur() {
      this.isFocused = false;
    },

    getDelay(order) {
      return this.isFocused
        ? DELAY_COUNT_DISAPPEARING_ITEMS * DELAY_STEP - order * DELAY_STEP
        : order * DELAY_STEP;
    },

    getDelayStyle(order) {
      return `animation-delay: ${this.getDelay(order)}ms !important`;
    },
  },

  ROUTES,
};
</script>

<style lang="scss">
.header {
  margin-bottom: 64px;
  min-height: 57px;

  &__wrapper {
    padding: 14px 0;
    position: sticky;
    top: 0;
    min-height: 57px;
    background-color: $color-white-200;

    &--open {
      z-index: 1000;
    }
  }

  &__wrapper--open,
  &__overlay {
    position: fixed;
    top: 0;
    width: 100%;
  }

  &__overlay {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &__logo-wrapper {
    display: flex;
    font-size: 20px;
  }

  &__link {
    color: $color-blue-20;
    text-decoration: none;
    font-size: inherit;

    &:hover {
      color: $color-blue-100;
    }
  }

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  &__nav-wrapper {
    grid-template-columns: repeat(auto-fit, minmax(0, min-content));
    justify-content: center;
    column-gap: 16px;
    display: grid;
    flex-grow: 1;
  }

  &__search-button {
    color: $color-blue-20;

    &:hover {
      color: $color-blue-100;
    }
  }
}
</style>
