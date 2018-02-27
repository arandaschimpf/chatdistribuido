<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn
          flat
          dense
          round
          class="mobile-only"
          @click="leftDrawerOpen = !leftDrawerOpen">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Chat usando memoria distribuida
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <Sidebar v-model="leftDrawerOpen"/>
    <q-page-container style="margin: 10px 5px;">
      <router-view v-if="user"/>
      <div class="flex flex-center" v-else>
        <q-btn @click="login">
          LOGIN
        </q-btn>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
export default {
  name: 'LayoutDefault',
  components: {Sidebar},
  data () {
    return {
      leftDrawerOpen: this.$q.platform.desktop
    }
  },
  computed: {
    user () { return this.$store.state.user }
  },
  methods: {
    login () {
      this.$store.dispatch('login')
    }
  }
}
</script>

<style>
</style>
