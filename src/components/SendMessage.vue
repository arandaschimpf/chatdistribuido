<template>
  <div class="send-message">
    <q-input v-model="message" @keyup.enter="send"/>
    <q-btn color="primary" @click="send">
      <q-icon name="send" />
    </q-btn>
  </div>
</template>

<style scoped>
.send-message {
  position: fixed;
  width: 100vw;
  height: 3em;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.377);
  background: white;
}

.q-input {
  flex: 1;
}
</style>

<script>
export default {
  data: () => ({
    message: ''
  }),
  methods: {
    send () {
      this.$emit('message', this.message)
      this.message = ''
    }
  }
}
</script>
