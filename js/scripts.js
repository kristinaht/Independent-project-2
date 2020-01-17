$(document).ready(function(){
  $("form.form").submit(function(){
   
    var favoriteAnimal = $("select#favoriteAnimal").val();
    var favoriteColor = $("select#favoriteColor").val();
    var vacation = $("select#vacation").val();
    var languageType = $("select#languageType").val();
    var personType = $("select#personType").val();

   
    if (favoriteAnimal === "snake" && vacation === "mountains" && personType === "morning") {
      $("#output").text("You should learn Python!").toggle();
    } else if (vacation === "beach" && favoriteColor === "green" && favoriteAnimal === "cat" && languageType !== "strong") {
      $("#output").text("You should learn JavaScript!").toggle();
    } else if((favoriteAnimal === "dog" && favoriteColor === "blue" && languageType === "strong") ||(favoriteAnimal === "dog" && favoriteColor === "red" && languageType === "strong") ) {
      $("#output").text("You should learn C#!").toggle();
    }
    else {
      $("#output").text("You should learn Ruby!").toggle();
    }
    event.preventDefault();
  });
});