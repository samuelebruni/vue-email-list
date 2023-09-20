const { createApp } = Vue

  createApp({
    data() {
      return {
        generateEmails: []
      }
    },
    mounted(){
        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                 this.generateEmails.push(response.data.response)
            })
            
        }

    }
  }).mount('#app')