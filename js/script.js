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


// This holds the results of the survey questions
// The index represents the question asked.
// e.g. First question answered as no would be
// index 0 with a boolean of false.
var resultset = [];

// A JQuery nodelist of all the question.section questions
var $questionSections;





// Document is ready to be manipulated
$(document).ready(function() {

  // Play the landing page animation
  landingAnimation();

  // Get a list of all the YES and NO buttons
  var $buttonListNegative = $(".negative");
  var $buttonListPositive = $(".positive");

  // When No is clicked on a question
  $buttonListNegative.each(function(index) {
    $(this).click(function() {
      buttonClick($(this).parent(), index, false);
    });
  });

  // When Yes is clicked on a question
  $buttonListPositive.each(function(index) {
    $(this).click(function() {
      buttonClick($(this).parent(), index, true);
    });
  });

});



// Animation for when the user first loads on this page
function landingAnimation() {
  // Get a nodelist of all the question elements
  var $questionSections = $("section.question");

  // Animate the first few question blocks. 
  // The rest does not need it as it's outisde
  // the visible area to the user.
  $questionSections.each(function(index) {
    // Context for this instance of a section.question element
    var that = $(this);
    
    // When the page is first loaded, a fade-in animation will
    // play. We don't need to animate all of them (off screen ones)
    // Just the first few on screen
    if (index < ($questionSections.length / 3)) {
      // Make the element invisible
      that.css({opacity: '0'});

      // Fade in the element
      that.animate({opacity: '1' }, 100 + (index * 400));
      
    }
  });
}




function buttonClick($elementToAnimate, index, isYes) {
// Hide this element in a fade animation
    $elementToAnimate.slideUp(400, "easeOutExpo", null);

    // Put false result into the set
    addResultToSet(index, isYes);
}




// Add a true or a false to the question result set
function addResultToSet(index, boolean) {
  resultset[index] = boolean;
  
  // If all 11 questions were answered
  if (index == 10) {
    evaluateQuestions();
  }
}




// Evaluate the questions & display a prompt of
// the next action the user should take
function evaluateQuestions() {
  // Grab the default "note/disclaimer" notification
  var $notif = $(".notification");

  // Evaluate the survey. If it doesn't
  // match this pattern (Best of my knowledge,
  // its correct) modify the "note/disclaimer"
  // notification accordingly
  //
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