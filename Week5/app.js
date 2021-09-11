var app = new Vue({
  el: '#app',
  data: {
    message: 'Book Quiz!', // Starting title
  },
  methods: {
    startQuiz: function () {
      this.message = 'Question 1: What type of books do you like to read?'  // Question in the quiz
    }
  }
})

var add = new Vue({
  el: '#add',
  data: {
    counter: 0 //Count amount of books added 
  }
})


var review = new Vue({
  el: '#review',
  data: {
    reviews: [  // Revies are listed here
      { text: 'Very Good' },
      { text: 'Not Great' },
      { text: 'Ok' }
    ]
  }
})