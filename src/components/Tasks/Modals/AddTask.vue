<template>
  <q-card>

    <modal-header>Add task</modal-header>

    <q-form @submit="submitForm">

      <q-card-section>

        <!-- Task name -->
        <modal-task-name
          :name.sync="taskToSubmit.name"
          />

        <!-- Due Date -->
        <modal-due-date
          :dueDate.sync="taskToSubmit.dueDate"
          />

        <!-- Due time -->
        <div class="row q-mb-sm" v-if="taskToSubmit.dueDate">
          <q-input
            label="Due time"
            v-model="taskToSubmit.dueTime"
            outlined
            >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy>
                  <q-time v-model="taskToSubmit.dueTime" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right" id="notme">
        <q-btn
          type="submit"
          label="Save"
          color="primary"
          />
      </q-card-actions>

      <pre>
        {{ taskToSubmit }}
      </pre>
    </q-form>

  </q-card>
</template>

<script>
  import { mapActions } from 'vuex'
  import ModalHeader from './shared/ModalHeader'
  import ModalTaskName from './shared/ModalTaskName'
  import ModalDueDate from './shared/ModalDueDate'

  export default {
    data() {
      return {
        taskToSubmit: {
          name: '',
          dueDate: '',
          dueTime: '',
          completed: false,
        }
      }
    },
    components: {
      ModalHeader,
      ModalTaskName,
      ModalDueDate
    },
    methods: {
      ...mapActions('tasks', ['addTask']),
      submitForm() {
        console.log('submitted form')
        // this is how you'd manually validate a field...
        // this.$refs.name.validate()
        // if (!this.$refs.name.hasError) {
        //   this.submitTask()
        // }
        this.submitTask()
      },
      submitTask() {
        this.addTask(this.taskToSubmit)
        this.$emit('close-popup')
      }
    }
  }
</script>

<style>
</style>
