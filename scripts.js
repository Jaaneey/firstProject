var arrayOfButtons, arrayOfArrows, arrayOfBoxes, arrayOfInputs, user;

//Write these functions:
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

 function sliderValue(inputId, outputId){
 $(inputId).on("change", function(){
    var chosenVal = $(this).val();
    $(outputId).text("$"+chosenVal);
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
arrayOfArrows = $(".fa-2x");
arrayOfBoxes = $(".questionBox");
arrayOfInputs = $("input");
user= new Person();

//page0: INTRO

//page1: HOUSING

$('input[name=housing]#hasHouse').on('click',function(){
  $('#rentQuestion').fadeIn("slow");
  $("#wantsHouse").fadeOut("slow");
});

$('input[name=housing]#needsHouse').on('click', function(){
    $("#rentQuestion").fadeOut("slow",function(){
    $("[data-id=first").fadeOut();
    $("#wantsHouse").fadeIn();
    });
  });

$('label[for=inCity').text("I want to be in the city of "+ user.city);


//page 2 Transport

$('input#car').on('click',function(){
  $('[data-id=parking]').fadeIn("slow");
});

$('input#publicTransit').on('click', function(){
  $("[data-id=parking]").fadeOut("slow");
});
 

//Adjuster Page
sliderValue("#foodEstimate", "#foodEstimator");
sliderValue("#funEstimate", "#funEstimator");
sliderValue("#rentEstimate","#rentEstimator");
sliderValue("#otherEstimate","#otherEstimator");
sliderValue("#travelEstimate", "#travelEstimator");
sliderValue("#specialEstimate","#specialEstimator");
sliderValue("#loanEstimate", "#loanEstimator");


//ON TO NEXT PAGE
$.each(arrayOfButtons, function(index, button){
      $(button).on("click", function(event){
        event.preventDefault();
        /////WORK ON THIS FUNCTION///
        //saveData();
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

//BACK TO PREVIOUS PAGE
$.each(arrayOfArrows, function(index,arrow){
    $(arrow).on("click", function(event){
        /////WORK ON THIS FUNCTION///
        //saveData();
        arrayOfBoxes.eq(index+1).fadeOut("slow", function(){
           arrayOfBoxes.eq(index).fadeIn();
        });
});




function saveData(){
  user.course = $("#programType").val();
  user.city = $("#locationProgram").val();
  user.name = $("#userName").val(); 
  user.email = $("#userEmail").val();
  user.housing = $('#rentEstimator').val();
  // user.transport= transport;
  user.food = $("input[name='foodMoney']:checked").attr("value");
  // user.fun = fun;
  // user.additional = additional;
  // user.special = special;
  // user.firstTotal = firstTotal;
  // user.loan =loan;
  // user.grandTotal = user.firstTotal - user.loan;


}





});
});
});