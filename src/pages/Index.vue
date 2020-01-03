<template>
  <div class="q-pa-xl">
    <h2>VueJS Section</h2>
    <input
      type="text"
      v-model="message"
      :class="{ 'error' : message.length > 22 }"
      ref="messageInput"
      v-autofocus
    />
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      message: "Lovin' Quasar & VueJS"
    };
  },
  // a directive that focuses the respective element
  // when the page gets loaded
  directives: {
    autofocus: {
      inserted: el => el.select()
    }
  },
  mounted() {
    this.$refs.messageInput.className = "bg-green-11";
  }
};
</script>

<style lang="stylus">

input
  width 100%
  padding 0.5rem
  font-size 1.4rem

.error
  color red
  background rgba(255, 0, 0, 0.1)
  padding 0.25rem 0.5rem

.border-red
  border 1px solid red

</style>
