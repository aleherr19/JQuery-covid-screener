/*

Copyright 2021 Alex K. Herrera

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/


// Holds each question as a boolean result.
// Used for evaluation at the end process.
var resultset = [];

$(document).ready(function() {

  // Animate questions in. Landing animation.
  $(".question").each(function(index) {
    var _this = $(this);

    _this.css({opacity: '0'});
    _this.animate({opacity: '1' }, 100 + (index * 400));
  });


  // Get a list of all the YES and NO buttons
  var $buttonListNegative = $(".negative");
  var $buttonListPositive = $(".positive");

  // When No is clicked on a question
  $buttonListNegative.each(function(index) {
    $(this).click(function() {
      // Animate question block to hide
      $(this).parent().slideUp(400, "easeOutExpo", null);

      addResultToSet(index, false);
    });
  });

  // When Yes is clicked on a question
  $buttonListPositive.each(function(index) {
    $(this).click(function() {
      // Animate question block to hide
      $(this).parent().slideUp(400, "easeOutExpo", null);
      

      addResultToSet(index, true);
    });
  });

});



// Add a true or a false to the question result set
function addResultToSet(index, boolean) {
  resultset[index] = boolean;
  
  // If all 11 questions were answered
  if (index == 10) {
    evaluateQuestions();
  }
}


// Evaluate the questions 
function evaluateQuestions() {
  // Evaluate the questions if the
  // user may be at risk or not.
  if (resultset[0]==true ||
        resultset[2]==true ||
          resultset[3]==true ||
            resultset[4]==true ||
              resultset[5]==true ||
                resultset[7]==true ||
                  resultset[8]==true ||
                    resultset[9]==true) {

      // At Risk!
      $("header > h2").text("At Risk.");
      $("header > p").text("Based on the survey, you don't sound well. We're not telling you what to do, but you should stay home.");
      $("header").css("background-color", "#ffd9cc");
    } else {
      // Good to go
      $("header > h2").text("You're safe.");
      $("header > p").text("Based on the survey, you sound well. We're not telling you what to do, but you're good to go if you need to.");
      $("header").css("background-color", "#dcffcc");
  }


}