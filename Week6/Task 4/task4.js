var app = new Vue({
  el: "#orderForm",
  data: {
    firstName: "",  // all data feild start off empty so the user can type in information 
    lastName:"",
    phone:""
  }
});

var app = new Vue({
  el: '#shippingSelection',
  data() {
    return {
      selected: 'Fast',
      options: [
        { text: 'Standard Shipping', value: 'Slow' }, // Shipping  options 
        { text: 'Priority Shipping', value: 'Fast' },
        { text: 'Express Shipping', value: 'Next Day Delivery' }
      ]
    }
  }
})

var app = new Vue({
  el: '#optionSelection',
  data() {
    return {
      checkedOptions: [] // all the addional options the user has selected
    }
  }
})

