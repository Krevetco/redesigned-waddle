import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('store', {
    state: () => {
        return {
            count: 0,
            importData: '',
        }
    },

    actions: {
        increaseCount() {
            this.count++
        },
        getTodos() {
            if (this.importData) return this.importData
            else
                return axios
                    .get('https://jsonplaceholder.typicode.com/todos/' + Math.round(Math.random() * 10))
                    .then(({ data }) => {
                        return (this.importData = data)
                    })
        },
        deleteTodos() {
            this.importData = ''
        },
    },
})
