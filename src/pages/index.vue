<template>
  <q-page class="column justify-between">
    <div class="messages" style="overflow: auto;">
          <q-chat-message
            v-for="i in 30"
            :key="i"
            avatar="https://freeiconshop.com/wp-content/uploads/edd/person-flat.png"
            :text="['Mensaje']"
            stamp="4 minutes ago"
            :sent="(i%3) === 0"/>
    </div>
    <SendMessage />
  </q-page>
</template>

<style scoped>
.messages {
  margin-bottom: 3em;
}
</style>

<script>
import SendMessage from '../components/SendMessage.vue'
export default {
  name: 'PageIndex',
  components: {SendMessage}
}
</script>
