function op(){
    player_1=document.getElementById("player_name1").value;
    player_2=document.getElementById("player_name2").value;
    localStorage.setItem("player1_name",player_1);
    localStorage.setItem("player2_name",player_2);
    window.location="math quiz.html";
}