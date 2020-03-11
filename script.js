$(document).ready(function () {


    // Functions when user press start quiz
    function startQuiz() {
        displayQuestions();

    }

    function displayQuestions() {
        // the varibles for the questions
        // the options and answers witll be also included in this
        var allQuestions =
            [
                {
                    question: "what does html stand for?",
                    options: ["high tool motion link", "hyper text markup language", "hope to make loops", "hen tuna mouse look"],
                    answer: "hyper text markup language"
                },
                {
                    question: "what does css stand for?",
                    options: ["cool snow shoes", "cats snakes sound", "cascade style sheet", "cook sweets sour"],
                    answer: "cascade style sheet"
                },
                {

                    question: "is Java the same as Javascript?",
                    options: ["no", "yes", "sometimes", "all of the above"],
                    asnwer: "no"
                }

            ]
        // will render the questions onto the html file
        let questionDiv = $(".container");
        for (let i = 0; i < allQuestions.length; i++) {
            var questionText = $("<h1></h1>").text(allQuestions[i].question);
            questionDiv.append(questionText);
            for (let j = 0; j < allQuestions[i].options.length; j++) {
                var questionOptions = $(`<button></button>`).text(allQuestions[i].options[j]);
                questionDiv.append(questionOptions);
                
            }

        }

        $('button').on("click", function(){
           
            let currentClicked = $(this).text();

            if (currentClicked === "hyper text markup language" || currentClicked === "cascade style sheet" || currentClicked === "no" ){
                console.log("You clicked on the correct answer");
            } else {
                console.log("You didn't click on the correct answer"); 
            }
                    
        })

       
    }


    $(".btn").on("click", function () {
        startQuiz();
      
    })


});
