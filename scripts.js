var arrayOfButtons, arrayOfArrows, arrayOfBoxes, arrayOfInputs, user, programLength, tuitionCost, userHousing, userFood, userFun, userTransport, userLoanAmount, currentIndex;


//Write these functions:

function reset(){
  console.log("let's put things back");
  currentIndex = 0;
  user.course = "not yet selected";
  user.city = "not yet selected";
  user.name = "not yet selected"; 
  user.email = "not yet selected";
  user.tuition= tuitionCost;
  user.housing =  0;
  user.transport =  0;
  user.food  =  0;
  user.fun  =  0;
  user.additional = 0;
  user.special = 0;
  user.firstTotal = 0;
  user.loan = 0;
  user.grandTotal = 0;
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
    case 0: // Intro Page
      housingPageSetUp();
      break;
    case 1: // Housing Page
      housingVariable();
      transportSetUp ();
      break;
    case 2: // Transportation Page
      transportVariable();
      break;
    case 3: // Food Page
      foodVariable();
      break;
    case 4: // Fun Budget
      funVariable();
      break;
    case 5: // Additional
      break;
    case 6: // Evil
      break;
    case 7: // Promo Page
      resultsSetup();
      resultsAdjust();
      break;
    case 8: // Results
      adjusterSetUp();
      adjusterTotal();
      sliderAdjust();
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
  user.loan = userLoanAmount || 0;
  user.grandTotal = tuitionCost + user.firstTotal - user.loan;

}

//STARTING OUT
currentIndex = 0;
arrayOfButtons = $(".qButt");
arrayOfArrows = $(".fa-2x");
arrayOfBoxes = $(".questionBox");
arrayOfInputs = $("input");
user= new Person();
saveData();
 

//page0: INTRO

//page1: HOUSING********************

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

$('label[for=inCity]').text("I want to be in the city of "+ user.city+".");
}

//Determining Rent
function cityRent(cityName){
  switch(cityName){
    // Average for Studio acording to Rent Jungle
    case "Denver":
      userHousing= 1200;
      //roommates ~1/2
      //cheap ~1/4
    break;
    case "San Francisco":
      userHousing = 3000;
      //roommates ~ 2/3
      //cheap ~ 1/4
    break;
    case "Boulder":
      userHousing = 1200;
      //roommates ~3/4
      //cheap ~1/2
    break;
    case "Fort Collins":
      userHousing = 1000;
      //roommates ~3/4
      //cheap 1/2
    break;
    case "Seattle":
      userHousing = 1300;
      //roommates~3/4
      //cheap 1/4
    break;
    default:
      console.log("how did this happen?");
  }

}



//Assigning Values: 

function housingVariable(){
  if ($("#hasHouse").is(":checked")){
  userHousing = parseInt($('#rentGuess').val(),10);
} else {
    cityRent(user.city);
    if ($("#inCity").is(":checked")){
      if ($("#own").is(":checked")){
        userHousing = userHousing;
      }
      else if ($("#share").is(":checked")){
        userHousing = (0.6 * userHousing);
      }
      else if($("#couch").is(":checked")){
        userHousing =(0.3 * userHousing);
      } else {console.log("average");}
    }
    else {
      if ($("#own").is(":checked")){
        userHousing = (0.85 * userHousing);
      }
      else if ($("#share").is(":checked")){
        userHousing = (0.6 * userHousing);
      }
      else if($("#couch").is(":checked")){
        userHousing = (0.3 * userHousing);
      } else {console.log("average");}
    }
}
}


//********page 2 Transport**********

function transportSetUp (){
  $('input#car').on('click',function(){
    $('[data-id=parking]').fadeIn("slow");
  });

  $('input#publicTransit').on('click', function(){
    $("[data-id=parking]").fadeOut("slow");
  });
} 

//Transport Variable 
function transportVariable(){

  if ($("#publicTransit").is(":checked")){
    userTransport = "publicTransit";
  } else if ($("#car").is(":checked")) {
      if($("#parkDaily").is(":checked")){
        userTransport = "parkDaily";
      }
      else { 
        userTransport = "parkMonthly";
      }
  } else {userTransport = 0;}
}

//Page 3: Food Budget ********
function foodVariable() {
  if ($("#bogus").is(":checked")){
    userFood = parseInt($("#foodGuess").val(),10);
  } else {
    userFood = parseInt($("input[name=foodMoney]:checked").val(),10);
  }
}

// Page 4: Fun *******

function funVariable(){ 
  if ($("#customFun").is(":checked")){
    userFun = parseInt($("#customFunAmount").val(),10);

  } else {
    userFun = parseInt($("input[name=funnyMoney]:checked").val(),10);
  }
}

// Results Page
function resultsSetup() {
  userLoanAmount = parseInt($("#loanAmount").val(),10) || 0;
  $("#totalExpenses").val("$" + user.firstTotal);
  $("#grandTotal").val("$" + (user.grandTotal- userLoanAmount));
}

function resultsAdjust(){
  $("#loanAmount").on("keyup", resultsSetup);
}

//LAST PAGE Adjuster Page

var $allOutputs = $("#numbersBox output");
var $allInputs = $("#numbersBox input");

function sliderAdjust(){
 $.each($allInputs, function(index,element){
    $(element).on("change", adjusterTotal);
});
}

function adjusterTotal(){
  var adjustedTotal=0;
  $.each($allOutputs, function(index,element){ 
    if(element.id === "loanEstimator"){
      adjustedTotal -= parseInt($(element).text().split("$")[1]);
    } 
    else if(element.id==="specialEstimator"){
      adjustedTotal += parseInt($(element).text().split("$")[1]);
    }
    else if(element.id === "rentEstimator"|| element.id === "otherEstimator"){
      adjustedTotal += parseInt($(element).text().split("$")[1])* programLengthM;
    }
    else {
      adjustedTotal += parseInt($(element).text().split("$")[1])* 26;
    }
  });
  $("#adjustedTotal").val("$" + (adjustedTotal + tuitionCost) );

}






function adjusterSetUp(){
  sliderFunction("#foodEstimate", "#foodEstimator");
  sliderFunction("#funEstimate", "#funEstimator");
  sliderFunction("#rentEstimate","#rentEstimator");
  sliderFunction("#otherEstimate","#otherEstimator");
  sliderFunction("#travelEstimate", "#travelEstimator");
  sliderFunction("#specialEstimate","#specialEstimator");
  sliderFunction("#loanEstimate", "#loanEstimator");

  sliderValue("#rentEstimate","#rentEstimator", user.housing);
  sliderValue("#foodEstimate", "#foodEstimator", user.food);
  sliderValue("#funEstimate", "#funEstimator", user.fun);
  sliderValue("#otherEstimate","#otherEstimator", user.additional);
  sliderValue("#travelEstimate", "#travelEstimator", user.transport);
  sliderValue("#specialEstimate","#specialEstimator", user.special);
  sliderValue("#loanEstimate", "#loanEstimator", user.loan);

}




//ON TO NEXT PAGE

function nextPage(index){      
        saveData();
        runPage(index);
        
        
        arrayOfBoxes.eq(index).fadeOut("slow", function(){

          if(index !== 9){
           arrayOfBoxes.eq(index+1).fadeIn();
           currentIndex ++;
            } 
          else if (currentIndex === 9) {
           arrayOfBoxes.eq(0).fadeIn();
           reset();
          }
        });

      } // end of nextPage()



//BACK TO PREVIOUS PAGE

function backPage(index){  
   arrayOfBoxes.eq(index+1).fadeOut("slow", function(){
   arrayOfBoxes.eq(index).fadeIn();
   currentIndex --;
});
    
}

//Event Listeners
//(Next Buttons)
$.each(arrayOfButtons, function(index, button){
  $(button).on("click", function(event){
      event.preventDefault();
      nextPage(index);
});
});

//(Back Buttons)
$.each(arrayOfArrows, function(index,arrow){
  $(arrow).on("click", function(event){
      backPage(index);
});
  });

//(Arrow Navigation)
// $(document).on("keyup", function(e){
//   e.preventDefault();
//   if (e.keyCode == 39){
//     nextPage(currentIndex);
//    } 
//   else if (e.keyCode == 37) {
//     backPage(currentIndex-1);
//   }

// });


}); //document on ready
