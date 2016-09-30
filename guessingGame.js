
$(function () {
    var random1 = Math.floor((Math.random() * 9) + 0);
    var random2 = Math.floor((Math.random() * 9) + 0);
    var random3 = Math.floor((Math.random() * 9) + 0);

    if (random1 == random2 || random1 == random3||random2==random3) {
        random1 = Math.floor((Math.random() * 9) + 0);       
        random2 = Math.floor((Math.random() * 9) + 0);
        random3 = Math.floor((Math.random() * 9) + 0);
        console.log(random1);
        console.log(random2);
        console.log(random3);
    }
 
    else {
        console.log(random1)
        console.log(random2)
        console.log(random3)
    }
var turns = 10;

    $(".check").click(function () {
        var option1 = $(".forOption1").val();
        var option2 = $(".forOption2").val();
        var option3 = $(".forOption3").val();
        console.log(random1);
        console.log(random2);
        console.log(random3);
        if (option1 > 9 || option2 > 9 || option3 > 9) {
            alert("Error: Please Only Use Numbers 0- 9");
            return;
        }
        else if (option1 == $(".forOption1").val("") || option2 == $(".forOption2").val("") || option3 == $(".forOption3").val("")) {
            alert("Please Fill Out All Guesses!");
            return null;
        }
        //If the answer is in the correct card the background turns green
        if (option1 == random1) {
            $(".option1").css("background-color", "green");
        }
        //if the answer is in one of the other two, background turns yellow
        else if (option1 == random2 || option1 == random3) {
            $(".option1").css("background-color", "yellow");
        }
        //the value in 1 is not listed at all so background turns red.
        else { $(".option1").css("background-color", "red"); }
        //If the answer is in the correct card the background turns green

        if (option2 == random2) {
            $(".option2").css("background-color", "green");
        }
        //if the answer is in one of the other two, background turns yellow
        else if (option2 == random1 || option2 == random3) {
            $(".option2").css("background-color", "yellow");
        }
        //the value in 2 is not listed at all so background turns red.
        else { $(".option2").css("background-color", "red"); }

        //If the answer is in the correct card the background turns green
        if (option3 == random3) {
            $(".option3").css("background-color", "green");
        }
        //if the answer is in one of the other two, background turns yellow
        else if (option3 == random1 || option3 == random2) {
            $(".option1").css("background-color", "yellow");
        }
        //the value in 3 is not listed at all so background turns red.
        else {
            $(".option3").css("background-color", "red");
        }

        if (option1 == random1 && option2 == random2 && option3 == random3) {
            alert("YOU WON!!!!!!!")
            $(".option1").css("background-color", "green");
            $(".option2").css("background-color", "green");
            $(".option3").css("background-color", "green");
            $(".reset").css("visibility", "visible");
        }
        turns--;
        console.log(turns)
        
        if(turns==0){
            alert("OOPS YOU LOSE!!!!")
            $(".reset").css("visibility", "visible");

        }

    });

});
$(".reset").click(function () {
    console.log("reset button");
    location.reload(true);
});