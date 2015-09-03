var arrayOfButtons, arrayOfArrows, arrayOfBoxes, arrayOfInputs, user, programLength, tuitionCost, userHousing, userFood, userFun, userTransport;

//Write these functions:
function reset(){
  console.log("let's put things back");
}


function sliderFunction(inputId, outputId){
 $(inputId).on("change", function(){
    var chosenVal = $(this).val();
    $(outputId).text("$"+chosenVal);
 });
}


function sliderValue(inputId, outputId, amount){
  $(inputId).attr("value", amount);
  $(outputId).text("$"+ amount);
}

programLengthM = 6;
programLengthW= 26;
tuitionCost = 21000; 


$(document).ready(function(){

function Person(name, email, city, course, tuition, housing, transport,food, fun, additional, special, firstTotal, loan, grandTotal){
  this.name = name;
  this.email = email;
  this.city = city;
  this.course= course;
  this.tuition = tuition;
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

function runPage(pageNumber){
  switch(pageNumber){
    case 0:
      housingPageSetUp();
      break;
    case 1:
      housingVariable();
      break;
  }

}

function saveData(){
  user.course = $("#programType").val() || "not yet selected";
  user.city = $("#locationProgram").val()|| "not yet selected";
  user.name = $("#userName").val() || "not yet selected"; 
  user.email = $("#userEmail").val() || "not yet selected";
  user.tuition= tuitionCost;
  user.housing = userHousing || 0;
  user.transport = userTransport || 0;
  user.food  = userFood|| 0;
  user.fun  = userFun || 0;
  user.additional = parseInt($("#additionalCash").val(),10) || 0;
  user.special = parseInt($("#extras").val(),10) || 0;
  user.firstTotal = (user.housing*programLengthM) + user.transport + (user.food*programLengthW) + (user.fun*programLengthW) + (user.additional*programLengthM) + user.special;
  user.loan = parseInt($("#loanAmount").val(),10) || 0;
  user.grandTotal = tuitionCost + user.firstTotal - user.loan;

  sliderValue("#rentEstimate","#rentEstimator", user.housing);
  sliderValue("#foodEstimate", "#foodEstimator", user.food);
  sliderValue("#funEstimate", "#funEstimator", user.fun);
  sliderValue("#otherEstimate","#otherEstimator", user.additional);
  sliderValue("#travelEstimate", "#travelEstimator", user.transport);
  sliderValue("#specialEstimate","#specialEstimator", user.special);
  sliderValue("#loanEstimate", "#loanEstimator", user.loan);


}

//STARTING OUT

arrayOfButtons = $(".qButt");
arrayOfArrows = $(".fa-2x");
arrayOfBoxes = $(".questionBox");
arrayOfInputs = $("input");
user= new Person();
saveData();
 


// = parseInt($("#foodGuess").val(),10) || 0;
// = parseInt($("#customFunAmount").val(),10)|| 0;


//page0: INTRO

//page1: HOUSING

function housingPageSetUp(){

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
}

//Assigning Values: 

function housingVariable(){
  if ($("#hasHouse").is(":checked")){
  userHousing = parseInt($('#rentGuess').val(),10);
} else {
    if ($("#inCity").is(":checked")){
      if ($("#own").is(":checked")){
        userHousing = "CityOwn";
      }
      else if ($("#share").is(":checked")){
        userHousing = "CityShare";
      }
      else if($("#couch").is(":checked")){
        userHousing ="cityCouch";
      } else {console.log("average");}
    }
    else {
      if ($("#own").is(":checked")){
        userHousing = "outsideOwn";
      }
      else if ($("#share").is(":checked")){
        userHousing = "outsideShare";
      }
      else if($("#couch").is(":checked")){
        userHousing = "outsideCouch";
      } else {console.log("average");}
    }
}
}







//if ($("#hasHouse").is(":checked")){
//  userHousing = parseInt($('#rentGuess').val(),10);
//}

//page 2 Transport

$('input#car').on('click',function(){
  $('[data-id=parking]').fadeIn("slow");
});

$('input#publicTransit').on('click', function(){
  $("[data-id=parking]").fadeOut("slow");
});
 

//Adjuster Page
sliderFunction("#foodEstimate", "#foodEstimator");
sliderFunction("#funEstimate", "#funEstimator");
sliderFunction("#rentEstimate","#rentEstimator");
sliderFunction("#otherEstimate","#otherEstimator");
sliderFunction("#travelEstimate", "#travelEstimator");
sliderFunction("#specialEstimate","#specialEstimator");
sliderFunction("#loanEstimate", "#loanEstimator");


//ON TO NEXT PAGE
$.each(arrayOfButtons, function(index, button){
      $(button).on("click", function(event){
        event.preventDefault();
        /////WORK ON THIS FUNCTION///
        runPage(index);
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

//BACK TO PREVIOUS PAGE
$.each(arrayOfArrows, function(index,arrow){
    $(arrow).on("click", function(event){
        /////WORK ON THIS FUNCTION///
        //saveData();
        arrayOfBoxes.eq(index+1).fadeOut("slow", function(){
           arrayOfBoxes.eq(index).fadeIn();
        });
});










});
});
});