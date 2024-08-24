<template>
  <div class="imageTilesGroup d-flex align-center justify-center flex-wrap">
    <image-tile
      v-for="(tile, index) in tiles"
      :key="index"
      :src="tile.src"
      :title="tile.title"
      :description="tile.description"
      :image-width="imageWidth"
      :image-height="imageHeight" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, toNative } from 'vue-facing-decorator';
import { ImageTile } from '@/model/ImageTile';

@Component({
    name: 'ImageTilesGroup',
})
class ImageTilesGroup extends Vue {
  @Prop({ required: true })
  tiles: ImageTile[];

  @Prop()
  imageWidth: string;

  @Prop()
  imageHeight: string;
}

export default toNative(ImageTilesGroup)
</script>

<style lang="scss">
  .imageTilesGroup {
    gap: 0.75vw;
    > .imageTile {
      width: calc(1 / 3 * 100% - 1 / 3 * 1.5vw);
    }
  }
</style>
