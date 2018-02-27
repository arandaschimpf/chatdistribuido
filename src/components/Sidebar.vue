<template>
  <q-layout-drawer
      v-model="open"
      content-class="bg-grey-2 column justify-between">
      <q-list
        no-border
        link
        inset-delimiter>
        <q-list-header>Chats</q-list-header>
        <q-item>
          <q-item-main label="General"/>
        </q-item>
      </q-list>
      <q-btn @click="logout">Cerrar sesión</q-btn>
    </q-layout-drawer>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  computed: {
    open: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
