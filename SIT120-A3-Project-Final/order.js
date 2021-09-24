//Vue contact app that create empty personal details and payment fields to be logged
var order = new Vue({
  el: '#order',
  data: {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    book: '',
    instore: false,   // instore and online boolean values are set to false as when submitted only one will be true ( when selected)
    online: false,
    streetaddress: '',
    city: '',
    state: '',
    cardnumber: '',
    cvc: '',
    expirydate: '',
  },

  methods: {
    //SubmitOrderForm function to log all the data in the order form
    submitOrderForm() {
      console.log('========First name========='); //Print label in console
      console.log('First Name:', this.firstname); //display data of the named field in the console
      console.log('========Last name=========');
      console.log('Last Name:', this.lastname);
      console.log('========Email Adress=========');
      console.log('Email:', this.email);
      console.log('========= Pick up and pay in store (true/false)========');
      console.log('Instore:', this.instore);
      console.log('========= Ship and pay online (true/false)========');
      console.log('Online:', this.online);
      console.log('========Street Address=========');
      console.log('Last Name:', this.streetaddress);
      console.log('========City=========');
      console.log('City:', this.city);
      console.log('========state=========');
      console.log('State:', this.state);
      console.log('========Card Number=========');
      console.log('Card Number:', this.cardnumber);
      console.log('========CVC=========');
      console.log('CVC:', this.cvc);
      console.log('========Expiry Date=========');
      console.log('Expiry Date:', this.expirydate);




    }
  }
});








