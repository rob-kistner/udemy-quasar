<template>
  <q-card-section class="row">

    <div class="text-h6">
      <slot>Modal header title</slot>
    </div>

    <q-space />

    <q-btn
      icon="close"
      v-close-popup
      flat
      round
      dense
      />
  </q-card-section>
</template>

<script>

export default {
  name: 'ModalHeader',
  data() {
    return {

    }
  }
}
</script>

<style>

</style>
