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
    submitForm() {
      console.log('========First name========='); //Print label in console
      console.log('First Name:', this.firstname); //get and then display data of the named field in the console
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


      this.firstname = '',  //empty the input boxes to reset the form after  submission 
      this.lastname = '',
      this.email = '',
      this.phone = '',
      this.subject = '',
      this.message = '';

    }
  }
});








