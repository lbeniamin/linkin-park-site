<template>
  <main-layout>

  </main-layout>
  <!-- <div class="mainPage d-flex pb-10">
    <div class="mainPage_content pa-4">
      <div class="d-flex align-center">
        <image-tile src="/src/assets/studio-albums.webp" :title="$t('discography.studioAlbums')" />
        <image-tile src="/src/assets/live-albums.webp" :title="$t('discography.liveAlbums')" />
        <image-tile src="/src/assets/singles.webp" :title="$t('discography.singles')" />
      </div>
    </div>
    <div class="mainPage_sidebar"></div>
  </div> -->
</template>

<script lang="ts" setup>
  //
</script>

<style lang="scss">
  .mainPage {
    min-height: calc(100vh - 310px);
    column-gap: 16px;
    &_content, &_sidebar {
      background-color: rgba(45, 45, 45, 0.5);
      border-radius: 6px;
    }
    &_content {
      width: 75%;
      > div {
        column-gap: 16px;
      }
    }
    &_sidebar {
      width: 25%;
    }
  }
</style>
