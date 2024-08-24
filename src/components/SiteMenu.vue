<template>
  <div v-if="!isMobile" class="siteMenu">
    <v-tabs :height="56" tag="nav" slider-color="transparent">
      <v-tab v-for="(menuItem, index) in siteMenuItems" :key="index" :ripple="false" @click="openSubpage(menuItem)">
        <span class="siteMenu_menuItem">{{ $t(menuItem.name) }}</span>
      </v-tab>
    </v-tabs>
  </div>
  <div v-else class="siteMenu mobile mx-5" :class="{ visible: mobileNavigation }">
    <div class="siteMenu_mobileDrawer d-flex justify-space-between pl-6 pr-5 py-5">
      <div class="siteMenu_menuItems d-flex flex-column justify-space-between py-1">
        <div v-for="(menuItem, index) in siteMenuItems" :key="index" @click="openSubpage(menuItem)" class="d-flex align-center">
          <v-icon :icon="menuItem.icon" :size="30" class="mr-4" />
          <span class="siteMenu_menuItem mobile">{{ $t(menuItem.name) }}</span>
        </div>
      </div>
      <v-icon icon="mdi-close" size="36" @click="mobileNavigation = false" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, toNative } from 'vue-facing-decorator';
import { SiteMenuItem } from '../model/SiteMenuItem';
import { EnumEventType } from '../enum/EnumEventType';

@Component({
    name: 'SiteMenu'
})
class SiteMenu extends Vue {
  @Prop()
  isMobile: boolean;

  mobileNavigation = false;

  created(): void {
    this.emitter.on(EnumEventType.OPEN_NAV_DRAWER, () => this.mobileNavigation = true);
  }

  siteMenuItems = [
    new SiteMenuItem({ name: 'siteMenu.news', icon: 'mdi-newspaper', address: '/' }),
    new SiteMenuItem({ name: 'siteMenu.aboutBand', icon: 'mdi-account-multiple', address: '/about-band' }),
    new SiteMenuItem({ name: 'siteMenu.discography', icon: 'mdi-disc', address: '/discography' }),
    new SiteMenuItem({ name: 'siteMenu.aboutSite', icon: 'mdi-information-outline', address: '/about-site' }),
  ];

  openSubpage(menuItem: SiteMenuItem): void {
    this.$router.push(menuItem.address);
    if (this.isMobile) {
      this.mobileNavigation = false;
    }
  }
}

export default toNative(SiteMenu)
</script>

<style lang="scss">
  .siteMenu {
    position: relative;
    &:not(.mobile) {
      border-top: 1px solid white;
      border-bottom: 1px solid white;
    }
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
    &_menuItems {
      height: 100%;
    }
    &_menuItem {
      letter-spacing: normal;
      font-size: 14px;
      font-weight: 400;
      &.mobile {
        cursor: pointer;
      }
    }
    &.mobile {
      position: absolute;
      top: 20px;
      left: 0;
      width: calc(100% - 40px);
      height: 230px;
      background: #1c1726;
      border-radius: 6px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease-in-out;
      &.visible {
        opacity: 1;
        pointer-events: all;
      }
    }
    &_mobileDrawer {
      height: 100%;
    }
  }
</style>
