new Vue({
  el: "#flashcards-app",
  data: {
    cards: [
      {
        question: "What year was IUPUI founded?",
        answer: "1969",
        category: "history",
        flipped: false,
        hover: false
      },
      {
        question: "What is 2+2?",
        answer: "Fish",
        category: "math",
        flipped: false,
        hover: false
      },
      {
        question: "Is mayonnaise an instrument?",
        answer: "No",
        category: "science",
        flipped: false,
        hover: false
      },
    ],
    newQuestion: "",
    newAnswer: "",
    newCategory: "math"
  },

  methods: {
    flip: function(card) {
      card.flipped = !card.flipped;
    },
    newCard: function() {
      if (this.newQuestion.trim() != "" && this.newAnswer.trim() != "") {
        this.cards.push({
          question: this.newQuestion.trim(),
          answer: this.newAnswer.trim(),
          category: this.newCategory,
          flipped: false,
          hover: false
        });
      } else {
        alert("You must enter a Question and Answer to Submit.");
      }
    }
  }
});