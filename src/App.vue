<template>
  <v-app>
    <login v-if="!isLoggedThisSession"></login>
    <v-app-bar v-if="isLoggedThisSession"
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content v-if="isLoggedThisSession">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {store} from './store'
import {mapGetters} from 'vuex'
import Login from '@/views/Login'


export default {
  name: 'App',
  store: store,
  components: {
Login
  },

  data: () => ({
    //
  }),
  computed: {
     ...mapGetters("auth",['isLoggedThisSession'])
  }
};
</script>
