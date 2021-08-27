var app = new Vue({
  el: '#app',
  data: {
    message: 'Book Quiz!',
  },
  methods: {
    startQuiz: function () {
      this.message = 'Question 1: What type of books do you like to read?'
    }
  }
})

var add = new Vue({
  el: '#add',
  data: {
    counter: 0
  }
})
