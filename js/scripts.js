$(document).ready(function(){
  $("form.form").submit(function(){
   
    var favoriteAnimal = $("select#favoriteAnimal").val();
    var favoriteColor = $("select#favoriteColor").val();
    var vacation = $("select#vacation").val();
    var languageType = $("select#languageType").val();
    var personType = $("select#personType").val();

   
    if (favoriteAnimal === "snake" && vacation === "mountains" && personType === "morning") {
      $("#output").text("You should learn Python!").show();
    } else if (vacation === "beach" && favoriteColor === "green" && favoriteAnimal === "cat" && languageType !== "strong") {
      $("#output").text("You should learn JavaScript!").show();
    } else if((favoriteAnimal === "dog" && favoriteColor === "blue" && languageType === "strong") ||(favoriteAnimal === "dog" && favoriteColor === "red" && languageType === "strong") ) {
      $("#output").text("You should learn C#!").show();
    }
    else {
      $("#output").text("You should learn Ruby!").show();
    }
    event.preventDefault();
  });
});