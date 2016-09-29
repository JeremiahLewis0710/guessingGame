
$(function(){
var random1 = Math.floor((Math.random() * 10) + 1);
var random2 = Math.floor((Math.random() * 10) + 1);
var random3 = Math.floor((Math.random() * 10) + 1);

if(random1 == random2|| random1 == random3){
    random1 = Math.floor((Math.random() * 10) + 1);
    console.log(random1)
    console.log(random2)
    console.log(random3)
}
else if( random2 == random3){
    random2 = Math.floor((Math.random() * 10) + 1);
    console.log(random1)
    console.log(random2)
     console.log(random3)
}
else{
    console.log(random1)
    console.log(random2)
    console.log(random3)
}



$(".check").click(function (){
 var option1 = $(".forOption1").val();
var option2 = $(".forOption2").val();
var option3 = $(".forOption3").val();
    console.log(random1);
    console.log(random2);
    console.log(random3);
if(option1 > 10||option2 > 10||option3 > 10){
    alert("Error: Please Only Use Numbers 1- 10");
    return;
}
else if(option1 == 0 ||option2 == 0||option3 == 0){
    alert("Please Fill Out All Guesses!");
    return;
}
//If the answer is in the correct card the background turns green
if(option1 == random1){
    $(".option1").css("background-color","green");
}
//if the answer is in one of the other two, background turns yellow
else if(option1==random2||option1==random3){
    $(".option1").css("background-color","yellow");
}
//the value in 1 is not listed at all so background turns red.
else{$(".option1").css("background-color","red");}
//If the answer is in the correct card the background turns green

if(option2 == random2){
    $(".option2").css("background-color","green");
}
//if the answer is in one of the other two, background turns yellow
else if(option2==random1||option2==random3){
    $(".option2").css("background-color","yellow");
}
//the value in 2 is not listed at all so background turns red.
else{$(".option2").css("background-color","red");}

//If the answer is in the correct card the background turns green
if(option3 == random3){
    $(".option3").css("background-color","green");
}
//if the answer is in one of the other two, background turns yellow
else if(option3==random1||option3==random2){
    $(".option1").css("background-color","yellow");
}
//the value in 3 is not listed at all so background turns red.
else{$(".option3").css("background-color","red");}



});

});