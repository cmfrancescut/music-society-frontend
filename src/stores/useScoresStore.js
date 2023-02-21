import { defineStore } from 'pinia';
import axios from 'axios'

export const useScoresStore = defineStore('scores', {
    state: () => ({
        scores: [],
        score: []
    }),
    getters: {
    },
    actions: {
        async fetchScores () {
            await axios.get('http://localhost/api/score')
                .then(res => {
                    this.scores = res.data.data
                })
                .catch(err => {
                    console.log(err)
                })
        },
        async fetchScore (id) {
            await axios.get(`http://localhost/api/score/${id}`)
                .then(res => {
                    this.score = res.data.data
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
});
