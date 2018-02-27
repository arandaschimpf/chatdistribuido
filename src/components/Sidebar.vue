<template>
  <q-layout-drawer
      v-model="open"
      content-class="bg-grey-2">
      <q-list
        no-border
        link
        inset-delimiter>
        <q-list-header>Chats</q-list-header>
        <q-item>
          <q-item-main label="General"/>
        </q-item>
      </q-list>
    </q-layout-drawer>
</template>

<script>
export default {
  props: {
    open: Boolean
  }
}
</script>
