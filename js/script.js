
//Switch Statement
 function checkDay() {
      let day = parseInt(document.getElementById("day").value);
      switch (day) {
        case 1:
          document.getElementById("dayResult").innerHTML = "Saturday";
          break;
        case 2:
          document.getElementById("dayResult").innerHTML = "Sunday";
          break;
        case 3:
          document.getElementById("dayResult").innerHTML = "Monday";
          break;
        case 4:
          document.getElementById("dayResult").innerHTML = "Tuesday";
          break;
        case 5:
          document.getElementById("dayResult").innerHTML = "Wednesday";
          break;
        case 6:
          document.getElementById("dayResult").innerHTML = "Thursday";
          break;
        case 7:
          document.getElementById("dayResult").innerHTML = "Friday";
          break;
        default:
          document.getElementById("dayResult").innerHTML = "Invalid day";
      }
    }
// switch2
  function checkSeason() {
      let season = document.getElementById("seasonInput").value;
      switch (season.toLowerCase()) {
        case "spring":
          document.getElementById("seasonResult").innerHTML = "It's Spring!";
          break;
        case "summer":
          document.getElementById("seasonResult").innerHTML = "It's Summer!";
          break;
        case "autumn":
        case "fall":
          document.getElementById("seasonResult").innerHTML = "It's Autumn!";
          break;
        case "winter":
          document.getElementById("seasonResult").innerHTML = "It's Winter!";
          break;
        default:
          document.getElementById("seasonResult").innerHTML = "Invalid season";
      }
    }
    document.getElementById("seasonBtn").addEventListener("click", checkSeason);
 //do-while loop
  function showDoWhileLoopNumbers() {
      let result = "";
      let i = 1;
      do {
        result += "Number: " + i + "<br>";
        i++;
      } while (i <= 10);
      document.getElementById("doWhileLoopResult").innerHTML = result;
    }
    document.getElementById("doWhileLoopBtn").addEventListener("click", showDoWhileLoopNumbers);  
// bulb on/off
function bulbOn(){
  document.getElementById('image').src="img/on.gif";
}
function bulbOff(){
  document.getElementById('image').src="img/off.gif";
}

//Change Picture on Button Click
    function changeImage() {
      document.getElementById("image1").src = "img/image2.jpg";
    }

    //  Display Current Time
    function updateTime() {
      document.getElementById("currentTime").innerHTML = new Date().toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();

//If-else with string
    function checkFruit() {
      let fruit = document.getElementById("fruitInput").value;
      if (fruit === "Apple") {
        document.getElementById("fruitResult").innerHTML = "It's an apple.";
      } else {
        document.getElementById("fruitResult").innerHTML = "It's not an apple.";
      }
    }
//If-else with boolean
     let isSunny = false;
    function checkSun() {
      if (isSunny) {
        document.getElementById("sunResult").innerHTML = "It's sunny.";
      } else if (!isSunny) {
        document.getElementById("sunResult").innerHTML = "It's not sunny.";
      }
    }
//If with boolean

    let isRaining = true;
    function checkRain() {
      if (isRaining) {
        document.getElementById("rainResult").innerHTML = "It's raining.";
      } else {
        document.getElementById("rainResult").innerHTML = "It's not raining.";
      }
    }
//If-Else with logical Operators
    function checkCountry() {
      let country = document.getElementById("countryInput").value;
      if (country === "USA" || country === "Canada") {
        document.getElementById("countryResult").innerHTML = "You are in North America.";
      } else {
        document.getElementById("countryResult").innerHTML = "You are not in North America.";
      }
    }
//If-Else with Comparison Operators
    function compareNumbers() {
      let num1 = parseInt(document.getElementById("compareNum1").value);
      let num2 = parseInt(document.getElementById("compareNum2").value);
      if (num1 > num2) {
        document.getElementById("compareResult").innerHTML = "Number 1 is greater than Number 2.";
      } else {
        document.getElementById("compareResult").innerHTML = "Number 1 is not greater than Number 2.";
      }
    }
//if with mltiple cndtns
 function checkNumber() {
      let num = parseInt(document.getElementById("numInput").value);
      if (num > 0 && num < 20) {
        document.getElementById("numResult").innerHTML = "The number is between 0 and 20.";
      } else {
        document.getElementById("numResult").innerHTML = "The number is not between 0 and 20.";
      }
    } 
//key press event
   document.getElementById("myInput2").addEventListener("keypress", function(event) {
      document.write("Key pressed: " + event.key + "<br>");
    }); 
//mouse-over event
     document.getElementById("hoverText2").addEventListener("mouseover", function() {
      alert("Hey. Whassup! Assalamu Alaikum.");
    });
    
//Array Push
 let colors = ["Red", "Green", "Blue"];
    function addColor() {
      colors.push("Violet");
      document.getElementById("colorsResult").innerHTML = "Colors: " + colors;
    }
//Each loop
    let animals = ["Cat", "Dog", "Elephant"];
    function showAnimals() {
      let result = "";
      animals.forEach(function(animal) {
        result += animal + "<br>";
      });
      document.getElementById("animalsResult").innerHTML = result;
    }

//Let keyword
 let message = "What's up!";
    function showMessage() {
      document.getElementById("messageResult").innerHTML = "Message: " + message;
    }
//Events-Click
  document.getElementById("clickButton").addEventListener("click", function() {
      alert("Button clicked!");
    });
//Data Types - Strings
   let text = "Assalamu Alaikum!";
    function showTex() {
      document.getElementById("textResult").innerHTML = "Text: " + text;
    }
//Data Types - Numbers
  let number = 42;
    function showNumber() {
      document.getElementById("numberResult").innerHTML = "Number: " + number;
    }
//if/else statement
 let isMember = true;
    function checkMember() {
      if (isMember) {
        document.getElementById("membershipResult").innerHTML = "Welcome member!";
      } else {
        document.getElementById("membershipResult").innerHTML = "Please sign up.";
      }
    }

//if statement/let
let age = 18;
    function checkAge() {
      if (age >= 18) {
        document.getElementById("ageResult").innerHTML = "You are an adult.";
      }
    }
//for loop
function showNumbers() {
      let result = "";
      for (let i = 0; i < 5; i++) {
        result += "Number: " + i + "<br>";
      }
      document.getElementById("numbersResult").innerHTML = result;
    }
//divide operators
 function divideNumbers() {
      let num1 = parseInt(document.getElementById("div1").value);
      let num2 = parseInt(document.getElementById("div2").value);
      let quotient = num1 / num2;
      document.getElementById("divResult").innerHTML = "Quotient: " + quotient;
    }


 //  Toggle Text on Button Click if/else
    function toggleText() {
      var text = document.getElementById("toggleText");
      if (text.innerHTML === "Hello, World!") {
        text.innerHTML = "Goodbye, World!";
      } else {
        text.innerHTML = "Hello, World!";
      }
    }
    //  Show/Hide an Element if/else
    function toggleElement() {
      var text = document.getElementById("toggleElement");
      if (text.style.display === "none") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    }
    // Update Text on Button Click function
    function updateText() {
      document.getElementById("updateText").innerHTML = "Assalamu Alaikum!";
    }
    //  Calculate and Display Sum operator
    function calculateSum() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var sum = num1 + num2;
      document.getElementById("sumResult").innerHTML = "Sum: " + sum;
    }

    //  Change Text Color on Mouse Over function
    function changeTextColor() {
      document.getElementById("mouseoverText").style.color = "green";
    }
    function resetTextColor() {
      document.getElementById("mouseoverText").style.color = "pink";
    }
    //  Alert Box on Button Click
    function showAlert() {
      alert("Hello! This is an alert box.");
    }
    //Display Random Number
    function displayRandomNumber() {
      var randomNumber = Math.floor(Math.random() * 100) + 1;
      document.getElementById("randomNumber").innerHTML = "Random Number: " + randomNumber;
    }

    //Change Text Content on Double Click
    function changeText() {
      document.getElementById("dblclickText").innerHTML = "Assalamu Alaikum";
    }

    //  Count Button Clicks
    var count = 0;
    function countClicks() {
      count++;
      document.getElementById("clickCount").innerHTML = "Clicks: " + count;
    }

    // Display Length of Text Input
    function displayLength() {
      var length = document.getElementById("textInput").value.length;
      document.getElementById("textLength").innerHTML = "Length: " + length;
    }

    //Convert Temperature from Celsius to Fahrenheit
    function convertTemperature() {
      var celsius = parseFloat(document.getElementById("celsius").value);
      var fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("fahrenheit").innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2);
    }

    //  Reverse a String
    function reverseString() {
      var str = document.getElementById("stringInput").value;
      var reversed = str.split('').reverse().join('');
      document.getElementById("reversedString").innerHTML = "Reversed String: " + reversed;
    }

    //  Calculate Factorial of a Number
    function calculateFactorial() {
      var num = parseInt(document.getElementById("factorialInput").value);
      var factorial = 1;
      for (var i = 1; i <= num; i++) {
        factorial *= i;
      }
      document.getElementById("factorialResult").innerHTML = "Factorial: " + factorial;
    }
     //  Convert Text to Uppercase
    function convertToUppercase() {
      var text = document.getElementById("uppercaseInput").value;
      var uppercaseText = text.toUpperCase();
      document.getElementById("uppercaseResult").innerHTML = "Uppercase: " + uppercaseText;
    }

    //Convert Text to Lowercase
    function convertToLowercase() {
      var text = document.getElementById("lowercaseInput").value;
      var lowercaseText = text.toLowerCase();
      document.getElementById("lowercaseResult").innerHTML = "Lowercase: " + lowercaseText;
    }

    //  Calculate Area of a Circle
    function calculateCircleArea() {
      var radius = parseFloat(document.getElementById("radiusInput").value);
      var area = Math.PI * Math.pow(radius, 2);
      document.getElementById("circleArea").innerHTML = "Area: " + area.toFixed(2);
    }
    //  Change Text Color on Button Click
    function changeTextColor() {
      document.getElementById("colorText").style.color = "green";
    }

    // Display Alert on Form Submission
    function displayFormAlert(event) {
      event.preventDefault();
      var inputText = document.getElementById("formInput").value;
      alert("Form submitted with: " + inputText);
    }

    // Disable Button After Click
    function disableButton() {
      document.getElementById("disableButton").disabled = true;
    }

    // Display User's Age
    function displayAge() {
      var birthYear = parseInt(document.getElementById("birthYear").value);
      var currentYear = new Date().getFullYear();
      var age = currentYear - birthYear;
      document.getElementById("ageDisplay").innerHTML = "Your age is: " + age;
    }

    //  Change Background Color on Mouse Over
    function changeBackgroundColor() {
      document.body.style.backgroundColor = "orangered";
    }
    function resetBackgroundColor() {
      document.body.style.backgroundColor = "white";
    }

    //  Display Current Month
    function displayMonth() {
      var currentMonth = new Date().toLocaleString('default', { month: 'long' });
      document.getElementById("currentMonth").innerHTML = "Current Month: " + currentMonth;
    }

    // Calculate Square of a Number
    function calculateSquare() {
      var number = parseFloat(document.getElementById("squareInput").value);
      var square = Math.pow(number, 2);
      document.getElementById("squareResult").innerHTML = "Square: " + square;
    }

    // Greet User Based on Time of Day
    function greetUser() {
      var hour = new Date().getHours();
      var greeting;
      if (hour < 12) {
        greeting = "Good Morning!";
      } else if (hour < 18) {
        greeting = "Good Afternoon!";
      } else {
        greeting = "Good Evening!";
      }
      document.getElementById("greeting").innerHTML = greeting;
    }

    //Display Random Quote
    function displayQuote() {
      var quotes = [
        "Hala Madrid y nada más.",
        "Being bold in the shirt of Real Madrid is not easy.",
        "90 minutes at the Bernabéu are too long.",
        "You either die a hero or you live long enough to become the villain."
      ];
      var randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("randomQuote").innerHTML = quotes[randomIndex];
    }
