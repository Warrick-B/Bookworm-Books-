//Vue contact app that create empty personal details and message field to be logged
var contact = new Vue({
  el: '#contact',
  data: {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  },
  methods: {
    //SubmitContactForm function to log all the data in the contact form
    submitContactForm() {
      console.log('========First name========='); //Print corresponding form label in console
      console.log('First Name:', this.firstname); //display data of the named field in the console
      console.log('========Last name=========');
      console.log('Last Name:', this.lastname);
      console.log('========Email Adress=========');
      console.log('Email:', this.email);
      console.log('=========Phone Number========');
      console.log('Phone Number:', this.phone);
      console.log('========Subject=========');
      console.log('Subject:', this.subject);
      console.log('========Message=========');
      console.log('Message:', this.message);
    }
  }
});








