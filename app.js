var app = new Vue({
  el: '#app',
  data() {
    return {
      message: 'Vuepoints',
      value: 0,
      username: '',
      page: 0
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
    },
    nextPage() {
      this.page += 1;

      if (this.page >= 3) {
        this.page = 0;
      }
    }
  }
})

