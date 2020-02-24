import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  tasks: {
    // ID1: {
    //   name: 'Go to shop',
    //   dueDate: '2019/10/12',
    //   dueTime: '18:30',
    //   completed: false,
    // },
    // ID2: {
    //   name: 'Get bananas',
    //   dueDate: '2019/10/18',
    //   dueTime: '11:00',
    //   completed: false,
    // },
    // ID3: {
    //   name: 'Get apples',
    //   dueDate: '2019/10/22',
    //   dueTime: '08:15',
    //   completed: false,
    // },
  },
}

const mutations = {
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  },
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    // requires built-in vue method to update the UI
    // i.e.: delete state.tasks[id] wont work
    Vue.delete(state.tasks, id)
  },
}

const actions = {
  addTask({ commit }, task) {
    let taskID = uid()
    let payload = {
      id: taskID,
      task: task
    }
    commit('addTask', payload)
  },
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id)
  },
}

const getters = {
  tasks: state => state.tasks,
}

export default {
  namespaced: true, // allows for multiple store modules
  state,
  mutations,
  actions,
  getters,
}
