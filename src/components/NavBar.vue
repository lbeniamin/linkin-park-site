<template>
  <div class="navBar mx-auto py-10 px-5">
    <div class="d-flex">
      <site-logo class="mr-4" @click="openMainPage" />
      <div class="navBar_navigationArea d-flex flex-column justify-end" :class="{ 'justify-space-between' : isMobile.value }">
        <v-icon v-if="isMobile.value" icon="mdi-menu" :size="36" :ripple="false" @click="openMobileDrawer" class="ml-auto" />
        <div class="d-flex justify-space-between" :class="{ 'flex-column align-start mb-0': isMobile.value, 'align-end mb-6': !isMobile.value }">
          <header @click="openMainPage">
            <h1 v-if="!isMobile.value">Linkin Park - Poland</h1>
            <h1 v-else>Linkin Park <br> Poland</h1>
          </header>
          <language-toggle :class="{'ml-4': !isMobile.value, 'mt-4': isMobile.value }" />
        </div>
        <site-menu :is-mobile="isMobile.value" :mobileNavigationOpened="mobileNavigationOpened" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';
import { useDisplay } from 'vuetify';
import { EnumEventType } from '../enum/EnumEventType';

@Component({
    name: 'NavBar'
})
class NavBar extends Vue {
  openMainPage(): void {
    this.$router.push('/');
  }

  openMobileDrawer(): void {
    this.emitter.emit(EnumEventType.OPEN_NAV_DRAWER);
  }

  get isMobile(): boolean {
    return useDisplay().mobile;
  }
}

export default toNative(NavBar)
</script>

<style lang="scss">

.navBar {
  max-width: 1280px;
  width: 100%;
  &_navigationArea {
    width: 100%;
    h1 {
      font-size: 40px;
      line-height: 1;
      font-weight: 300;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
}
</style>
