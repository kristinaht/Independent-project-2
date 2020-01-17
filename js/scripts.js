$(document).ready(function(){
  $("form.form").submit(function(){
   
    var favoriteAnimal = $("select#favoriteAnimal").val();
    var favoriteColor = $("select#favoriteColor").val();
    var vacation = $("select#vacation").val();
    var languageType = $("select#languageType").val();
    var personType = $("select#personType").val();

   
    if (favoriteAnimal === "snake" && favoriteColor === "green" & languageType !== "loose") {
      $("#output").text("You should learn Python!");
    } else if (vacation === "beach" && favoriteColor === "red" || personType === "owl") {
      $("#output").text("You should learn JavaScript!");
    }
    else {
      alert("You should learn all");
    }
    event.preventDefault();
  });
});