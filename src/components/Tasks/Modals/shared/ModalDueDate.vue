<template>
  <div class="row q-mb-sm">
    <q-input
      label="Due date"
      :value="dueDate"
      @input="$emit('update:dueDate', $event)"
      outlined
      clearable
      >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy>
            <q-date
              :value="dueDate"
              @input="$emit('update:dueDate', $event)"
              clearable
              />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>

export default {
  name: 'ModalDueDate',
  data() {
    return {

    }
  },
  props: [
    'dueDate'
  ]
}
</script>

<style>

</style>
