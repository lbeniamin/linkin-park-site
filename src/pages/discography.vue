<template>
  <main-layout class="discography">
    <template v-slot:content>
      <app-article :header="$t('discography.discography')" description="Opis artykułu.">
        <image-tiles-group :tiles="tiles" />
      </app-article>
    </template>
  </main-layout>
</template>

<script lang="ts">
import { ImageTile } from "../model/ImageTile";
import { Component, Vue, toNative } from 'vue-facing-decorator';

@Component
class Discography extends Vue {
  get tiles(): ImageTile[] {
    return [
      new ImageTile({ src: '/src/assets/studio-albums.webp', title: this.$t('discography.studioAlbums') }),
      new ImageTile({ src: '/src/assets/live-albums.webp', title: this.$t('discography.liveAlbums') }),
      new ImageTile({ src: '/src/assets/singles.webp', title: this.$t('discography.singles') }),
      new ImageTile({ src: '/src/assets/studio-albums.webp', title: this.$t('discography.studioAlbums') }),
      new ImageTile({ src: '/src/assets/live-albums.webp', title: this.$t('discography.liveAlbums') }),
      new ImageTile({ src: '/src/assets/singles.webp', title: this.$t('discography.singles') }),
    ]
  }
}

export default toNative(Discography);
</script>

<style lang="scss">
.discography {

}
</style>
