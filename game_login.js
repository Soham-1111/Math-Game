function addUser(){
 player1_name= document.getElementById("player1_input").value;  
 player2_name= document.getElementById("player2_input").value; 
 
 localStorage.setItem("player1",player1_name );
 localStorage.setItem("playerw",player1_name );

 window.location="game_page.html";
}