<template>
  <div class="row q-mb-sm">
    <!--
      The @input listener below:

      emits the changes to the prop 'name' up the chain, which is then listened to in the parent component (AddTask) and dealt with in the parent component
    -->
    <q-input
      label="Task name"
      ref="name"
      class="col"
      :value="name"
      :rules="[val => !!val || 'Task name is required']"
      @input="$emit('update:name', $event)"
      outlined
      autofocus
      clearable
      />
  </div>
</template>

<script>

export default {
  name: 'ModalTaskName',
  data() {
    return {

    }
  },
  props: [
    'name'
  ]
}
</script>

<style>

</style>
