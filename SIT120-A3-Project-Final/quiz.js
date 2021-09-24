Vue.component("quiz-questions", {  // All varables that are used for the quiz questions
  props: {
    question: String,
    option1: String,
    option2: String,
    option3: String,
    a: String,
    b: String,
    c: String,
    retry: String,

  },

  // The template below is used to display the question and multiple choice buttons on the index page, as well as the question information

  template: `
<div>
<div><p style="font-size: 20px">{{question}}</p></div> 
<br>
<div><p style="font-size: 18px">{{option1}}</p></div>
<br>
<div><p style="font-size: 18px">{{option2}}</p></div>
<br>
<div><p style="font-size: 18px">{{option3}}</p></div>

<div>
<br>
<button class="buttonRound" v-if="a != 0" @click="emitAnswer(a)">A</button>    
<button class="buttonRound" v-if="b != 0" @click="emitAnswer(b)">B</button>
<button class="buttonRound" v-if="c != 0" @click="emitAnswer(c)">C</button>  
<button class="buttonRound" v-if="retry != 0" @click="emitAnswer(retry)">Retry</button>

</div>
</div>`,
  //if the a,b,c, and retry variables are any other value than 0 the buttons are displayed, but if the are 0 the button will not be shown



  // fucuntion/method to go to differnet pages/questions by using the id as the page number
  methods: {
    emitAnswer(goToPage) {
      this.$emit("answer-given", goToPage);
    }
  }
});

var vuequiz = new Vue({
  el: "#vuequiz",
  data: {
    show: 1,  //initial question
    questions:
      [

        // all questions have an id number, question, option 1 2 and 3 to display the choices the users has, and a b c are given values to take users a specific question depending on their answer

        //Opening Question
        { id: 1, question: "What length of book do you prefer?", option1: "A)Short", option2: "B)Medium", option3: "C)Long", a: "2", b: "11", c: "20", retry: "0" },


        //Short book 
        { id: 2, question: "What type of book?", option1: "A)Fiction", option2: "B)Non-Fiction", a: "3", b: "7", c: "0", retry: "0" },

        //Short book - Ficiton 
        { id: 3, question: "What genre interests you the most?", option1: "A)Romance/Drama", option2: "B)Sc-fi/Action", option3: "C)Crime/Mystery", a: "4", b: "5", c: "6", retry: "0" },

        //Short book - Ficiton --> Romance/Drama
        { id: 4, question: "Your Recommendation: The Night Circus ", a: "0", b: "0", c: "0", retry: "1" },

        //Short book - Ficiton --> Sc-fi/Action 
        { id: 5, question: "Your Recommendation: Solaris ", a: "0", b: "0", c: "0", retry: "1" },

        //Short book - Ficiton --> Crime/Mystery 
        { id: 6, question: "Your Recommendation: Dust Devils ", a: "0", b: "0", c: "0", retry: "1" },


        //Short book - Non-Fiction 
        { id: 7, question: "What genre interests you the most?", option1: "A)Biographical", option2: "B)Educational", option3: "C)Historical", a: "8", b: "9", c: "10", retry: "0" },

        //Short book - Non-Fiction  --> Biographical
        { id: 8, question: "Your Recommendation: A Short Biography of Alexander Hamilton ", a: "0", b: "0", c: "0", retry: "1" },

        //Short book - Non-Fiction  --> Educational
        { id: 9, question: "Your Recommendation: Big Ideas for Curious Minds ", a: "0", b: "0", c: "0", retry: "1" },

        //Short book - Non-Fiction  --> Historical 
        { id: 10, question: "Your Recommendation: Frederick Douglas: Prophet of Freedom ", a: "0", b: "0", c: "0", retry: "1" },


        //Medium book 
        { id: 11, question: "What type of book? ", option1: "A)Fiction", option2: "B)Non-Fiction", a: "12", b: "16", c: "0", retry: "0" },

        //Medium book - Ficiton 
        { id: 12, question: "What genre interests you the most?", option1: "A)Romance/Drama", option2: "B)Sc-fi/Action", option3: "C)Crime/Mystery", a: "13", b: "14", c: "15", retry: "0" },

        //Medium book - Ficiton --> Romance/Drama
        { id: 13, question: "Your Recommendation: Eleanor & Park ", a: "0", b: "0", c: "0", retry: "1" },

        //Medium book - Ficiton --> Sc-fi/Action 
        { id: 14, question: "Your Recommendation: Brave New World ", a: "0", b: "0", c: "0", retry: "1" },

        //Medium book - Ficiton --> Crime/Mystery 
        { id: 15, question: "Your Recommendation: The Cellist", a: "0", b: "0", c: "0", retry: "1" },


        //Medium book - Non-Fiction 
        { id: 16, question: "What genre interests you the most?", option1: "A)Biographical", option2: "B)Educational", option3: "C)Historical", a: "17", b: "18", c: "19", retry: "0" },

        //Medium book - Non-Fiction  --> Biographical
        { id: 17, question: "Your Recommendation: Steve Jobs", a: "0", b: "0", c: "0", retry: "1" },

        //Medium book - Non-Fiction  --> Educational
        { id: 18, question: "Your Recommendation: Thinking, Fast And Slow", a: "0", b: "0", c: "0", retry: "1" },

        //Medium book - Non-Fiction  --> Historical 
        { id: 19, question: "Your Recommendation: The Interesting Narrative of the Life of Olaudah Equiano", a: "0", b: "0", c: "0", retry: "1" },


        //Long book 
        { id: 20, question: "What type of book?", option1: "A)Fiction", option2: "B)Non-Fiction", a: "21", b: "25", c: "0", retry: "0" },

        //Long book - Ficiton 
        { id: 21, question: "What genre interests you the most?", option1: "A)Romance/Drama", option2: "B)Sc-fi/Action", option3: "C)Crime/Mystery", a: "22", b: "23", c: "24", retry: "0" },

        //Long book - Ficiton --> Romance/Drama
        { id: 22, question: "Your Recommendation: Pride, Prejudice, and Other Flavors", a: "0", b: "0", c: "0", retry: "1" },

        //Long book - Ficiton --> Sc-fi/Action 
        { id: 23, question: "Your Recommendation: Dune", a: "0", b: "0", c: "0", retry: "1" },

        //Long book - Ficiton --> Crime/Mystery 
        { id: 24, question: "Your Recommendation: L.A. Confidential", a: "0", b: "0", c: "0", retry: "1" },

        //Long book - Non-Ficiton 
        { id: 25, question: "What genre intrests you the most?", option1: "A)Biographical", option2: "B)Educational", option3: "C)Historical", a: "26", b: "27", c: "28", retry: "0" },

        //Long book - Non-Fiction  --> Biographical
        { id: 26, question: "Your Recommendation: The Last Lion (Volumes 1-3)", a: "0", b: "0", c: "0", retry: "1" },

        //Long book - Non-Fiction  --> Educational
        { id: 27, question: "Your Recommendation: The Coddling of the American Mind", a: "0", b: "0", c: "0", retry: "1" },

        //Long book - Non-Fiction  --> Historical 
        { id: 28, question: "Your Recommendation: A History of the Twentieth Century", a: "0", b: "0", c: "0", retry: "1" },

      ]

  },

  //return the show properties of the goToPage
  methods: {
    answerGiven(goToPage) {
      return (this.show = goToPage);
    }
  }
});

