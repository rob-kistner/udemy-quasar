<template>
  <q-card>

    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn flat round dense v-close-popup icon="close" />
    </q-card-section>

    <q-form @submit="submitForm">

      <q-card-section>

        <!-- Task name -->
        <div class="row q-mb-sm">
          <q-input
            label="Task name"
            ref="name"
            class="col"
            v-model="taskToSubmit.name"
            :rules="[val => !!val || 'Task name is required']"
            outlined
            autofocus
            clearable
            />
        </div>

        <!-- Due Date -->
        <div class="row q-mb-sm">
          <q-input
            label="Due date"
            v-model="taskToSubmit.dueDate"
            outlined
            clearable
            >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy>
                  <q-date
                    v-model="taskToSubmit.dueDate"
                    clearable
                    />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

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

    </q-form>

  </q-card>
</template>

<script>
  import { mapActions } from 'vuex'

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
