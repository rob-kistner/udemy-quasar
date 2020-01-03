<template>
  <q-item
    @click="updateTask({ id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-orange-1' : 'bg-white'"
    v-ripple
    clickable
  >
    <q-item-section side middle>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough' : task.completed }">{{ task.name }}</q-item-label>
    </q-item-section>

    <q-item-section side middle>
      <div class="row">
        <div class="column q-mr-sm">
          <q-icon name="event" size="1.25rem" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>{{ task.dueDate }}</q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <q-btn flat round dense color="red" icon="delete" @click.stop="promptToDelete" />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: 'Delete Task',
          message: 'Are you sure you want to delete this task?',
          ok: {},
          cancel: {},
          persistent: true,
        })
        .onOk(() => {
          this.deleteTask(this.id)
        })
    },
  },
}
</script>

<style lang="stylus"></style>
