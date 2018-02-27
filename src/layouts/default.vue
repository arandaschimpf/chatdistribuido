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
    <Sidebar :open="leftDrawerOpen"/>
    <q-page-container style="margin: 10px 5px;">
      <router-view />
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
  }
}
</script>

<style>
</style>
