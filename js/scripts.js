$(document).ready(function(){
  $("form.form").submit(function(){
   
    var favoriteAnimal = $("select#favoriteAnimal").val();
    var favoriteColor = $("select#favoriteColor").val();
    // var vacation = $("select#vacation").val();
    // var languageType = $("select#languageType").val();
    // var personType = $("select#personType").val();

   
    if (favoriteAnimal === "snake" && favoriteColor === "green") {
      alert("You should learn Python!");
    } else {
      alert("You should learn all");
    }
    event.preventDefault();
  });
});