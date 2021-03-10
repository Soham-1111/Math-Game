player1_name= localStorage.getItem("player1");
player2_name= localStorage.getItem("player2");

player1_score=0;
player2_score=0;

question_turn= "player1";
answer_turn= "player2";

document.getElementById("player1_name").innerHTML= player1_name + " :";

document.getElementById("player2_name").innerHTML= player2_name + " :";

document.getElementById("score1").innerHTML= player1_score;
document.getElementById("score2").innerHTML= player2_score;

document.getElementById("questionturn").innerHTML= "Question Turn :"+player1_name;
document.getElementById("answerturn").innerHTML= "Answer Turn :"+player2_name;

function send(){
    number1= document.getElementById("number1").value;
    number2= document.getElementById("number2").value;
    actual_answer= parseInt(number1) * parseInt(number2);
    console.log(actual_answer);

    question_number="<h4>" + number1 + "X" + number2 + "</h4>";
    input_box= "<input id='answer' type='text' class='form-control'>";
    send_button= "<button id='check' onclick='check()' class='btn btn-info'>Check</button>" ;
    row= question_number + input_box + send_button;
    document.getElementById("output").innerHTML= row;

    document.getElementById("number1").value= "";
    document.getElementById("number2").value= "";

}
