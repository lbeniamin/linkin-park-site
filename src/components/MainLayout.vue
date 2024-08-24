<template>
  <div class="mainLayout d-flex pb-10">
    <div class="mainLayout_content">
      <slot name="content" />
    </div>
    <div class="mainLayout_sidebar">
      <slot name="sidebar" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';

@Component({
    name: 'MainLayout',
})
class MainLayout extends Vue {

}

export default toNative(MainLayout)
</script>

<style lang="scss">
  .mainLayout {
    min-height: calc(100vh - 320px);
    gap: 16px;
    &_content, &_sidebar {
      background-color: rgba(45, 45, 45, 0.5);
      border-radius: 6px;
      padding: 1.5vw;
    }
    &_content {
      width: 75%;
      @media (max-width: 1199px) {
        width: 100%;
      }
    }
    &_sidebar {
      width: 25%;
      @media (max-width: 1199px) {
        width: 100%;
      }
    }
    @media (max-width: 1199px) {
      flex-direction: column;
    }
  }
</style>
