const communityReviews = new Vue({
  el: '#reviews',
  data: {
    heading: 'Community Reviews',
    newBookTitle: '', //set the variables as empty when the review page is initially loaded
    newBookAuthor: '',
    newBookRating:'',
    newReviewerName: '',
    newReviewText: '',

    reviews: [{ // Review array containing a list of reviews, These reviews have already been entered and will be display once the page is loaded
      newBookTitle: 'The Lion, the Witch and the Wardrobe',
      newBookAuthor: 'C. S. Lewis',
      newBookRating:'4',
      newReviewerName: 'Soha Roy',
      newReviewText: 'Honestly this book is outstandingly amazing! I love the great use of words and how creative it is. I let’s my imagination go wild! It paints a clear image in my head on what is going on. If your a potter head like me i suggest you read it! I am in year 5 so i think it is perfect for my year level and how it can improve my use of words and my stories! I love how the book plays with your emotions.',
    }],

  },


  methods: {
    addReview() {   //add review function used to add a review object onto the reviews array

      this.reviews.push(
        {
          newBookTitle: this.newBookTitle, //all the data in the input form is added to the review array as one object
          newBookAuthor: this.newBookAuthor,
          newBookRating: this.newBookRating,
          newReviewerName: this.newReviewerName,
          newReviewText: this.newReviewText,
        });

        this.newBookTitle = '',  //empty the input boxes to reset the form after submission 
        this.newBookAuthor = '',
        this.newBookRating= '',
        this.newReviewerName = '',
        this.newReviewText = '';


    }

  }
});