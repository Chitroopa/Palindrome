$(document).ready(function() {
  $("#Palindrome").submit(function(event) {
   event.preventDefault();
   var userInput = $("#pal").val();
   var userInputArray = userInput.split("");
   var userReverseInput = userInputArray.slice();
   userReverseInput.reverse();
   if (userInputArray.join("") === userReverseInput.join(""))
   {
     $("#result").text("Palindrome");
   }
   else
   {
     $("#result").text("Not a Palindrome");
   }



  });

});
