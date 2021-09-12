
function contactValidate() //form validation
{
  //null check for firstname field
  if (document.contact.firstname.value == "") {
    alert("please enter your first name")
    document.contact.firstname.focus();
    return false;
  }

  //null check for lastname field
  if (document.contact.lastname.value == "") {
    alert("please enter your last name")
    document.contact.lastname.focus();
    return false;
  }

  //null check for email field
  if (document.contact.email.value == "") {
    alert("please enter a email address")
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
    alert("please enter a subject")
    document.contact.subject.focus();
    return false;
  }

  //null check for message field
  if (document.contact.message.value == "") {
    alert("please enter a message")
    document.contact.message.focus();
    return false;
  }

  // return Successful and display alert if all fields are fill in correctly
  {
    alert("Thank you for contacting Bookworm, Your message has been successfully sent")
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

function displayQuiz(){ //Hides the Start button and shows the vue quiz by using their respective ids
  document.getElementById('recommendationsQuiz').style.display = "block";
  document.getElementById('hide').style.display = "none";
}
