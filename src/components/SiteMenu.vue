<template>
  <div class="siteMenu">
    <v-tabs :height="56" tag="nav" slider-color="transparent">
      <v-tab v-for="(menuItem, index) in siteMenuItems" :key="index" :ripple="false" @click="openSubpage(menuItem)">
        <span class="siteMenu_menuItem">{{ $t(menuItem.name) }}</span>
      </v-tab>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { SiteMenuItem } from '../model/SiteMenuItem';

@Component({
    name: 'SiteMenu'
})
class SiteMenu extends Vue {

  siteMenuItems = [
    new SiteMenuItem({ name: 'siteMenu.news', icon: '', address: '/' }),
    new SiteMenuItem({ name: 'siteMenu.aboutBand', icon: '', address: '/about-band' }),
    new SiteMenuItem({ name: 'siteMenu.discography', icon: '', address: '/discography' }),
    new SiteMenuItem({ name: 'siteMenu.aboutSite', icon: '', address: '/about-site' }),
  ];

  openSubpage(menuItem: SiteMenuItem): void {
    this.$router.push(menuItem.address);
  }
}

export default toNative(SiteMenu)
</script>

<style lang="scss">
  .siteMenu {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    .v-slide-group__content {
      justify-content: space-around;
      .v-btn {
        width: 25%;
        transition: all 0.3s ease-in-out;
        &:hover {
          background-color: rgba($color: white, $alpha: 0.01)
        }
      }
      .v-tab-item--selected .siteMenu_menuItem {
        font-weight: 700;
      }
    }
    &_menuItem {
      letter-spacing: normal;
      font-size: 14px;
      font-weight: 400;
    }
  }
</style>
