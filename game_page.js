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
