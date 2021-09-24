
function contactValidate() //form validation
{
  //null check for firstname field
  if (document.contact.firstname.value == "") {
    alert("Please enter your first name")
    document.contact.firstname.focus();
    return false;
  }

  //null check for lastname field
  if (document.contact.lastname.value == "") {
    alert("Please enter your last name")
    document.contact.lastname.focus();
    return false;
  }

  //null check for email field
  if (document.contact.email.value == "") {
    alert("Please enter a email address")
    document.contact.email.focus();
    return false;
  }

  // check for phone field is not greater or less than 10
  if (document.contact.phone.value.length < 10 || document.contact.phone.value.length > 10) {
    alert("Please Enter a Valid Phone Number containing 10 digits eg. 0463654567 ")
    document.contact.phone.focus();
    return false;
  }

  //null check for subject field
  if (document.contact.subject.value == "") {
    alert("Please enter a subject")
    document.contact.subject.focus();
    return false;
  }

  //null check for message field
  if (document.contact.message.value == "") {
    alert("Please enter a message")
    document.contact.message.focus();
    return false;
  }

  // return Successful and display alert if all fields are filled in correctly
  {
    var contactform = document.getElementsByName('contact')[0];
    contactform.submit(); // Submit the form
    contactform.reset();  // Reset all form data
    alert("Thank you for contacting Bookworm, Your message has been successfully sent")
    return true; 

  }
}

function orderValidate() //form validation
{
  //null check for firstname field
  if (document.order.firstname.value == "") {
    alert("Please enter your first name")
    document.order.firstname.focus();
    return false;
  }

  //null check for lastname field
  if (document.order.lastname.value == "") {
    alert("Please enter your last name")
    document.order.lastname.focus();
    return false;
  }

  //null check for email field
  if (document.order.email.value == "") {
    alert("Please enter a email address")
    document.order.email.focus();
    return false;
  }

  // check for phone field is not greater or less than 10
  if (document.order.phone.value.length < 10 || document.order.phone.value.length > 10) {
    alert("Please Enter a Valid Phone Number containing 10 digits eg. 0463654567 ")
    document.order.phone.focus();
    return false;
  }

  //null check for product selection
  if (document.order.bookSelect.value == "") {
    alert("Please select a book")
    document.order.bookSelect.focus();
    return false;
  }

  //null check for pick or online selection
  if (document.order.instore.checked == false && document.order.online.checked == false) {
    alert("Please choose instore or online payment ")
    document.instore.subject.focus();
    return false;
  }


  //Only check the payment details if the user checks the online payment raido button
  if (document.order.online.checked == true) {

    //null check for street address field
    if (document.order.streetaddress.value == "") {
      alert("Please enter a Street Address")
      document.order.streetaddress.focus();
      return false;
    }


    //null check for city field
    if (document.order.city.value == "") {
      alert("Please enter a city")
      document.order.city.focus();
      return false;
    }


    //null check for state selection
    if (document.order.state.value == "") {
      alert("Please select a state")
      document.order.state.focus();
      return false;
    }

    //null check for card number field
    if (document.order.cardnumber.value == "") {
      alert("Please enter a Card Number")
      document.order.cardnumber.focus();
      return false;
    }


    //check for cvc field ( has to be 3 numbers)
    if (document.order.cvc.value.length != 3) {
      alert("Please enter a 3 digit cvc")
      document.order.cvc.focus();
      return false;
    }

    //null check for expiry date field
    if (document.order.expirydate.value == "") {
      alert("Please enter an expiry date")
      document.order.expirydate.focus();
      return false;
    }

  }


  // Return Successful and display alert if all order fields are filled in correctly
  {
    var orderform = document.getElementsByName('order')[0];
    orderform.submit(); // Submit the form
    orderform.reset();  // Reset all form data
    alert("Your book order has been succesfully placed and a confirmation email has been sent ,Thank you for shopping with Bookworm")
    return true; 
  }
}



function initMap() //interactive google map
{
  let location = { lat: -37.8538636, lng: 145.1495752 }; //Burrwod one longitude and latitude (for bookworm bookshop)
  let map = new google.maps.Map(document.getElementById("map"), { //inputing google maps into the map element on the about page
    zoom: 15,
    center: location
  });
  let marker = new google.maps.Marker({ //add marker to the Burrwod one shopping centre
    position: location,
    map: map
  });
}

function displayQuiz() { //Hides the Start button and shows the vue quiz by using their respective ids
  document.getElementById('recommendationsQuiz').style.display = "block";
  document.getElementById('hide').style.display = "none";
}


function pickupOrder() { //Keeps the paymentDetails (online order) hidden as it is not needed
  document.getElementById('paymentDetails').style.display = 'none';
}
function payOnline() { // Displays the paymentDetails as it is need when ordering online
  document.getElementById('paymentDetails').style.display = 'block';
}