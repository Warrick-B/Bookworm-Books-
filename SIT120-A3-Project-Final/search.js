//Book class to create a template for book objects with all relevant properties 
class Book {
  constructor(title, link, author, img, price) {
    this.title = title;
    this.link = link;
    this.author = author;
    this.img = img;
    this.price = price;
  }
}

//Book Search Vue app
const booksearch = new Vue({
  el: '#booksearch',
  data: {
    keyword: '',
    bookList: [ // array containing all the book objects
      new Book( //new keyword to create an object 
        'Absalom Absalom!', //Title
        './BookPages/AbsalomAbsalom.html',  //detials page link
        'William Faulkner', //Author
        './images/books/AbsalomAbsalom.jpg', //image
        '$9.99',//Price
      ),
      new Book(
        'The Aeneid', 
        './BookPages/theAeneid.html',  
        'Virgil', 
        './images/books/TheAeneid.jpg',
        '$12.00',
      ),
      new Book(
        'Animal Farm', 
        './BookPages/AnimalFarm.html',  
        'George Orwell', 
        './images/books/AnimalFarm.jpg',
        '$19.99', 
      ),
      new Book(
        'Anna Karenina', 
        './BookPages/AnnaKarenina.html',  
        'Leo Tolstoy', 
        './images/books/AnnaKarenina.jpg', 
        '$22.00',
      ),
      new Book(
        'The Awakening ', 
        './BookPages/theAwakening.html',  
        'Kate Chopin', 
        './images/books/TheAwakening.jpg',
        '$24.99',
      ),
      new Book(
        'Beach Read', 
        './BookPages/BeachRead.html',  
        'Emily Henry', 
        './images/books/BeachRead.jpg',
        '$19.99',
      ),
      new Book(
        'Before I Fall', 
        './BookPages/BeforeIFall.html',  
        'Lauren Oliver', 
        './images/books/BeforeIfall.jpg',
        '$24.99',
      ),
      new Book(
        'Beloved', 
        './BookPages/Beloved.html',  
        'Toni Morrison', 
        './images/books/Beloved.jpg',
        '$29.99',
      ),
      new Book(
        'Bleak House', 
        './BookPages/BleakHouse.html',  
        'Charles Dickens', 
        './images/books/BleakHouse.jpg',
        '$12.00',
      ),
      new Book(
        'Breaking Dawn', 
        './BookPages/BreakingDawn.html',  
        'Stephenie Meyer', 
        './images/books/BreakingDawn.jpg',
        '$9.99',
      ),
      new Book(
        'Cane River', 
        './BookPages/CaneRiver.html',  
        'Lalita Tademy', 
        './images/books/CaneRiver.jpg',
        '$14.99',
      ),
      new Book(
        'Cantoras', 
        './BookPages/Cantoras.html',  
        'Carolina De Robertis', 
        './images/books/Cantoras.jpg',
        '$35.99',
      ),
      new Book(
        'Catch-22', 
        './BookPages/Catch22.html',  
        'Joseph Heller', 
        './images/books/Catch22.jpg',
        '$19.99',
      ),
      new Book(
        'The Cellist', 
        './BookPages/theCellist.html',  
        'Daniel Silva', 
        './images/books/Cellist.jpg',
        '$29.99',
      ),
      new Book(
        'Circe', 
        './BookPages/Circe.html',  
        'Madeline Miller', 
        './images/books/Circe.jpg',
        '$12.00',
      ),

     
    ]
  },
 
//filteredbooks function that  compares the keyword in the search box to titles in the bookList array and filters the Books that match 
  computed: {
    filteredBooks() {
      return this.bookList.filter((book) => {
        return book.title.toLowerCase().includes(this.keyword.toLowerCase()); 
      });
    }
  }
});