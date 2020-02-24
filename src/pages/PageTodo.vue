<template>
  <q-page padding class="q-pa-lg">

    <q-list v-if="Object.keys(tasks).length" bordered separator>
      <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key" />
    </q-list>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        color="primary"
        size="1.25em"
        icon="add"
        ripple
        @click="showAddTask = true"
        />
    </div>

    <q-dialog v-model="showAddTask">
      <!-- listening for $emit from AddTask.vue -->
      <add-task @close-popup="showAddTask = false" />
    </q-dialog>

  </q-page>

</template>

<script>
  import { mapGetters } from 'vuex'
  import Task from '../components/Tasks/Task'
  import AddTask from '../components/Tasks/Modals/AddTask'

  export default {
    components: {
      task: Task,
      addTask: AddTask
    },
    data() {
      return {
        showAddTask: false
      }
    },
    computed: {
      ...mapGetters('tasks', ['tasks']),
    },
  }
</script>

<style lang="stylus"></style>
