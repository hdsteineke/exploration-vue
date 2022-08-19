var app = new Vue({
  el: '#app',
  data() {
    return {
      message: 'Vuepoints',
      value: 0,
      username: ''
    }

  },
  methods: {
    increment() {
      this.value += 1;
    },
    decrement() {
      this.value -= 1;
    },
    submit() {
      console.log(this.username);
    }
  }
})

