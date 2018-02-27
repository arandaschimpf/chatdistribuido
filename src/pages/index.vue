<template>
  <q-page class="column justify-between">
    <div class="messages" style="overflow: auto;">
          <q-chat-message
            v-for="message in messages"
            :key="message.key"
            :avatar="message.photo"
            :text="message.texto"
            :stamp="message.stamp"
            :title="message.name"
            :sent="message.sent"
            @click.native="seeSender(message)"/>
    </div>
    <SendMessage @message="sendMessage"/>
  </q-page>
</template>

<style scoped>
.messages {
  margin-bottom: 3em;
}
</style>

<script>
import { date } from 'quasar'
import SendMessage from '../components/SendMessage.vue'

export default {
  name: 'PageIndex',
  components: {SendMessage},
  mounted () {
    this.setup()
  },
  computed: {
    chatID () {
      return this.$route.params.id || 'general'
    },
    user () {
      return this.$store.state.user
    },
    messages () {
      const messages = this.$store.state.messages
      const users = this.$store.state.users
      return Object.keys(messages).map(k => {
        const msg = messages[k]
        const user = users[msg.uid]
        return {
          key: k,
          photo: user.photo,
          name: user.name,
          texto: [msg.message],
          stamp: date.formatDate(msg.datetime, 'DD/MM/YYYY HH:mm'),
          sent: this.user.id === msg.uid
        }
      })
    }
  },
  watch: {
    $route () {
      this.setup()
    }
  },
  methods: {
    async setup () {
      window.scrollTo(0, document.body.scrollHeight)
    },
    sendMessage (message) {
      this.$store.dispatch('sendMessage', message)
    },
    seeSender (msg) {
      this.$q.notify({
        message: msg.name,
        timeout: 1000,
        type: 'info'
      })
    }
  }
}
</script>
