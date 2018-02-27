<template>
  <div class="send-message">
    <q-input v-model="message"/>
    <q-btn color="primary">
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
  })
}
</script>
