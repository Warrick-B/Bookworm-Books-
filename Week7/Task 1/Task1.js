//Global 
//Gloabal Resistration of Componenet
Vue.component("global-faqs-component", {
  template: "<h1>BookWorm FAQs </h1>", //Global Component 
  });
  //Global
  var globalComponent = new Vue({
    el: "#bookWormFAQs",  
    data: {
      message: "Can I order online and pay in store?", 
    },
  });

  //Local
  var lobalComponent = new Vue({ 
  el: "#answerFAQs",
  components: { //have to define components in local registration
    "local-faqs-component": { // have to pass object key and propety
      template: "<p>Answer: Yes you can! Just simply check the pay in store option on the order page :)</p>",
  },
  },
  });
