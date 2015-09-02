var arrayOfButtons, arrayOfBoxes, arrayOfInputs, user;


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





 function sliderValue(inputId, outputId){
 $(inputId).on("change", function(){
    var chosenVal = $(this).val();
    $(outputId).text(chosenVal);
 });
}


$(document).ready(function(){

function Person(name, email, city, course, housing, transport,food, fun, additional, special, firstTotal, loan, grandTotal){
  this.name = name;
  this.email = email;
  this.city = city;
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


arrayOfButtons = $(".qButt");
arrayOfBoxes = $(".questionBox");
arrayOfInputs = $("input");
user= new Person();

//page0: INTRO

//page1: HOUSING

function runPage2(){
sliderValue("#rentEstimate","#rentEstimator");

$('input[name=housing]#hasHouse').on('click',function(){
  $('#rentQuestion').fadeIn("slow");
  $("#wantsHouse").fadeOut("slow");
});

$('input[name=housing]#needsHouse').on('click', function(){
    $("#rentQuestion").fadeOut("slow",function(){
    $("#wantsHouse").fadeIn();
    });
  });

$('label[for=inCity').text("I want to be in the city of "+ user.city);
}

//page 2 Transport
//page 3 Food
sliderValue("#foodEstimate", "#foodEstimator");
user.food =$("input[name=foodMoney]:checked").val();



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



function saveData(){
  user.course = $("#programType").val();
  user.city = $("#locationProgram").val();
  user.name = $("#userName").val(); 
  user.email = $("#userEmail").val();
  user.housing = $('#rentEstimator').val();
  // user.transport= transport;
  // user.food= food;
  // user.fun = fun;
  // user.additional = additional;
  // user.special = special;
  // user.firstTotal = firstTotal;
  // user.loan =loan;
  // user.grandTotal = user.firstTotal - user.loan;


}





});
});