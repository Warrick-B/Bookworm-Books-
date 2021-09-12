var BookRecomendation = new Vue();

Vue.component("status-button-template", {
	template: "#vue-recommend-button-template",
	methods: {
		sendRecommendSuccess: function() {
			BookRecomendation.$emit('sucessMessage', 'The recommendation button has been clicked, Thank you.'); //Message from the 1st Vue component, is sent to the 2nd component with $on
		}
	}
});

Vue.component("display-recommendation", {
	template: "#vue-recommend-overview-template",
	data: function() {
		return {
			successMessage: 'Waiting for the click...'  //message while component 2 is waiting for the event (button click) 
		}
	},
	methods: {
		displayMessage: function(message) { 
			this.successMessage = message;
		}
	},
	created: function() {
		BookRecomendation.$on('sucessMessage', this.displayMessage);  //Reciveing the message from $emit and display it
	}
});

new Vue({
	el: "#instantBookRecomendation"
});