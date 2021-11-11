<!--

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

-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Styles -->
  <link rel="stylesheet" href="styles/main.style.css">
  <link rel="stylesheet" href="styles/form.style.css">
  <link rel="stylesheet" href="styles/notification.style.css">
  <!-- Style media queries -->
  <link rel="stylesheet" href="styles/dimen.style.css">

  <title>Covid-19 Screener</title>
</head>
<body>

  <header>
    <h2>COVID-19 Screener</h2>
  </header>


  <div class="alertBubble bad">
    <h2>You're at risk!</h2>
    <p>
      Bad news here.
    </p>
  </div>

  <div class="alertBubble good">
    <h2>You're good to go!</h2>
    <p>
      Good news here.
    </p>
  </div>




  <div class="notification">
    <h2>Survey</h2>
    <p>
      Answer the questions to be evaluated. If you pass evaluation, you may enter (Insert some random place here.)
    </p>
  </div>

  <!-- Wrapper for all questions -->
  <div id="wrapper">

    <section class="question">
      <p>Are you currently experiencing, or have experienced in the past 14 days:</p>
      <h2>A fever (104°F / 37.8°C or greater)</h2>
      <a href="#" class="negative">No.</a>
      <a href="#" class="positive">Yes.</a>
    </section>

    <section class="question">
    <p>Are you currently experiencing, or have experienced in the past 14 days:</p>
      <h2>A cough?</h2>
      <a href="#" class="negative">No.</a>
      <a href="#" class="positive">Yes.</a>
    </section>

    <section class="question">
    <p>Are you currently experiencing, or have experienced in the past 14 days:</p>
      <h2>Shortness of breath or difficulty breathing?</h2>
      <a href="#" class="negative">No.</a>
      <a href="#" class="positive">Yes.</a>
    </section>

    <section class="question">
    <p>Are you currently experiencing, or have experienced in the past 14 days:</p>
      <h2>A sore throat?</h2>
      <a href="#" class="negative">No.</a>
      <a href="#" class="positive">Yes.</a>
    </section>

    <section class="question">
    <p>Are you currently experiencing, or have experienced in the past 14 days:</p>
      <h2>New loss of taste or smell?</h2>
      <a href="#" class="negative">No.</a>
      <a href="#" class="positive">Yes.</a>
    </section>

    <section class="question">
    <p>Are you currently experiencing, or have experienced in the past 14 days:</p>
      <h2>Body chills?</h2>
      <a href="#" class="negative">No.</a>
      <a href="#" class="positive">Yes.</a>
    </section>

    <section class="question">
    <p>Are you currently experiencing, or have experienced in the past 14 days:</p>
      <h2>Head or muscle aches?</h2>
      <a href="#" class="negative">No.</a>
      <a href="#" class="positive">Yes.</a>
    </section>

    <section class="question">
    <p>Are you currently experiencing, or have experienced in the past 14 days:</p>
      <h2>Nausea, diarrhea or vomiting?</h2>
      <a href="#" class="negative">No.</a>
      <a href="#" class="positive">Yes.</a>
    </section>

    <section class="question">
      <p>In the past 14 days, have you been in close proximity to anyone who was experiencing any of the above symptoms or has experienced any of the above symptoms since your contact?</p>
      <h2>Close proximity to someone else with the above symptoms?</h2>
      <a href="#" class="negative">No.</a>
      <a href="#" class="positive">Yes.</a>
    </section>

    <section class="question">
      <p>In the past 14 days, have you been in close proximity to anyone who has tested positive for COVID-19?</p>
      <h2>Close proximity to someone else that's positive?</h2>
      <a href="#" class="negative">No.</a>
      <a href="#" class="positive">Yes.</a>
    </section>

    <section class="question">
      <p></p>
      <h2>Have you been tested for COVID-19 and are waiting to receive test results?</h2>
      <a href="#" class="negative">No.</a>
      <a href="#" class="positive">Yes.</a>
    </section>

  </div>

  </div>

  <!-- JQuery -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

  <!-- Easing interpolation library for JQuery  -->
  <script src="js/jquery.easing.min.js"></script>

  <!-- Custom script -->
  <script src="js/script.js"></script>

</body>
</html>