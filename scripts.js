var arrayOfButtons, arrayOfBoxes, arrayOfInputs, user;

function Person(name, email, course, housing, transport,food, fun, additional, special, firstTotal, loan, grandTotal){
  this.name = name;
  this.email = email;
  this.course= course;
  this.housing = housing;
  this.transport= transport;
  this.food= food;
  this.fun = fun;
  this.additional = additional;
  this.special = special;
  this.firstTotal = firstTotal;
  this.loan =loan;
  this.grandTotal = grandTotal;

}

function reset(){
  console.log("let's put things back");
}

function runPage(pageNumber){
  switch(pageNumber){
    case 0:
      programQuestion();
      break;
    case 1:
      housingQuestion();
      break;
  }

}

//Write these functions:
function saveData (){
//LocalStorageIdea

}

function programQuestion(){
  user.course = $("#locationProgram").val();
  user.name = $("#userName").val();
  user.email = $("#userEmail").val();

}

function housingQuestion(){
    if($('[name=housing]#needsHouse').is(':checked')){
    $("#gotHouse").fadeOut();
    $("#wantsHouse").fadeIn();
  }
}





$(document).ready(function(){
arrayOfButtons = $(".qButt");
arrayOfBoxes = $(".questionBox");
arrayOfInputs = $("input");
user= new Person();


$.each(arrayOfButtons, function(index, button){
      $(button).on("click", function(event){
        event.preventDefault();
        /////WORK ON THIS FUNCTION///
        saveData();
        arrayOfBoxes.eq(index).fadeOut("slow", function(){

          if(index !== 9){
           arrayOfBoxes.eq(index+1).fadeIn();
            } 
          else {
           arrayOfBoxes.eq(0).fadeIn();
           reset();
            }
        });

});



});
});