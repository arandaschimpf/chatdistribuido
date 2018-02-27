<template>
  <q-page class="column justify-between">
    <div class="messages" style="overflow: auto;">
          <q-chat-message
            v-for="message in messages"
            :key="message.key"
            :avatar="message.photo"
            :text="message.texto"
            :stamp="message.stamp"
            :sent="message.sent"/>
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

        return {
          key: k,
          photo: users[msg.uid].photo,
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
    }
  }
}
</script>
