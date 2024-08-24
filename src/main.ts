/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'pl',
  fallbackLocale: 'en',
  messages: {
    'pl': {
      message: {
        hello: 'hello world',
      },
      siteMenu: {
        news: 'Aktualności',
        aboutBand: 'O zespole',
        discography: 'Dyskografia',
        aboutSite: 'O stronie'
      },
      discography: {
        discography: 'Dyskografia',
        studioAlbums: 'Albumy studyjne',
        liveAlbums: 'Albumy koncertowe',
        singles: 'Single',
      }
    },
    en: {
      message: {
        hello: 'こんにちは、世界',
      },
      siteMenu: {
        news: 'News',
        aboutBand: 'About band',
        discography: 'Discography',
        aboutSite: 'About Site',
      },
      discography: {
        discography: 'Discography',
        studioAlbums: 'Studio albums',
        liveAlbums: 'Live albums',
        singles: 'Singles',
      }
    },
  },
});

const app = createApp(App);

app.use(i18n);
registerPlugins(app);
app.mount('#app');
