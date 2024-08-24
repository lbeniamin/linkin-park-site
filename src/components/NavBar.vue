<template>
  <div class="navBar mx-auto py-10">
    <div class="d-flex">
      <site-logo class="mr-4" @click="openMainPage" />
      <div class="navBar_navigationArea d-flex flex-column justify-end">
        <div class="d-flex align-end justify-space-between mb-6">
          <header @click="openMainPage">
            <h1>Linkin Park - Poland</h1>
          </header>
          <language-toggle class="ml-4" />
        </div>
        <site-menu />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, toNative } from 'vue-facing-decorator';

@Component({
    name: 'NavBar'
})
class NavBar extends Vue {
  openMainPage(): void {
    this.$router.push('/');
  }
}

export default toNative(NavBar)
</script>

<style lang="scss">

.navBar {
  max-width: 1200px;
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
