
    const {createApp, ref} = Vue

    createApp({
        setup() {
      const message = ref('Hello vue!')
    return {
        message
    }
    }
  }).mount('#sites-noticias-regionais')
