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
