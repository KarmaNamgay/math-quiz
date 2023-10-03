var player1_name=localStorage.getItem("player_1_name");
var player2_name=localStorage.getItem("player_2_name");
var player1_score=0;
var player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+ " : " ;
document.getElementById("player2_name").innerHTML=player2_name+ " : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn --> "+ player1_name;
document.getElementById("player_answer").innerHTML="Answer turn --> "+ player2_name;

function send(){
    var get_word=document.getElementById("word").value;
    new_word=get_word.toLowerCase();
    console.log(new_word);
    var char_1=new_word.charAt(1);
    console.log(char_1);

    var length_divide_2=Math.floor(new_word.length/2);
    var char_2=new_word.charAt(length_divide_2);
    console.log(char_2);

    var length_minus_1=new_word.length - 1;
    var char_3=new_word.charAt(length_minus_1);
    console.log(char_3);

    var remove_char_1=new_word.replace(char_1,"_");
    console.log(remove_char_1);

    var remove_char_2=remove_char_1.replace(char_2,"_");
    console.log(remove_char_2);

    var remove_char_3=remove_char_2.replace(char_3,"_");
    console.log(remove_char_3);

    var question_word="<h4 id='word_display'> Q. "+remove_char_3+"</h4>";
    var input_box="<br> A. <input type='text' id='check_input'>";
    var check_btn="<br> <br> <button class='btn btn-info' onclick='check()'> check </button>";
    var row=question_word+input_box+check_btn;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").innerHTML=" ";
}

var question_turn="player1";
var answer_turn="player2";

function check(){
    var get_answer=document.getElementById("check_input").value;
    var new_answer=get_answer.toLowerCase();
    console.log(new_answer);
    if(new_answer==new_word){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;

        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn --> "+player2_name;

    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn --> "+player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn --> "+player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn --> "+player1_name;
    }
    document.getElementById("output").innerHTML=" ";
}