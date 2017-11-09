
$(document).ready(function() {
    
    var turn = 'X';
    var gameOver = false;
    var count = 0;
    
    $(".col").on("click", setValue);
    $("#restart").on("click", clearAll);

    function setValue() {
        if(this.textContent === 'X' || this.textContent === 'O') {

        } else if (!findWinner() && gameOver===false) {
                this.textContent = turn;
                count++;
                changeValue(turn);
                
                if (findWinner()) {
                    document.getElementById("msg").textContent = "The winner is " + turn + " !";
                    gameOver = true;
                } else if (count === 9) {
                    document.getElementById("msg").textContent = "Try again!";
                    gameOver = true;
                }
            } 
    }
    
    function changeValue(t) {
        if(!gameOver){
            if (t === 'X') {
                turn = 'O';
                document.getElementById("msg").textContent = "It is X's turn!";
            } else if (t === 'O') {
                turn = 'X';
                document.getElementById("msg").textContent = "It is O's turn!";
            } 
        }     
        
        
    }
    
    function findWinner() {
        
        if(checkRows()) {
            return true;
        } else {
            return false;
        }
    }
    
    function checkRows() {
        changeValue(turn);
        if (count >= 5) {
            if (
            //check first row
            ((getContent(0)===turn)&&
            (getContent(0)===getContent(1)) &&
            (getContent(1)===getContent(2))) ||
            //check second row
            ((getContent(3)===turn)&&
            (getContent(3)===getContent(4)) &&
            (getContent(4)===getContent(5))) ||
            //check last row
            ((getContent(6)===turn)&&
            (getContent(6)===getContent(7)) &&
            (getContent(7)===getContent(8))) ||
            //check first column
            ((getContent(0)===turn)&&
            (getContent(0)===getContent(3)) &&
            (getContent(3)===getContent(6))) ||
            //check second column
            ((getContent(1)===turn)&&
            (getContent(1)===getContent(4)) &&
            (getContent(4)===getContent(7))) ||
            //check third column
            ((getContent(2)===turn)&&
            (getContent(2)===getContent(5)) &&
            (getContent(5)===getContent(8))) ||
            
            
            ((getContent(0)===turn)&&
            (getContent(0)===getContent(4)) &&
            (getContent(4)===getContent(8))) ||
                
            ((getContent(2)===turn)&&
            (getContent(2)===getContent(4)) &&
            (getContent(4)===getContent(6))) 
            ){
            return true;
        } else {
            return false;
        } 
    } else {
        return false;
    }
        
    }
    function getContent(elementNumber) {
       return $(".col")[elementNumber].textContent;
    }
    function clearAll() {
        for(var i = 0; i <= 8; i++) {
            $(".col")[i].innerHTML= "&nbsp";
            document.getElementById("msg").textContent = "It is X's turn!";
            turn = 'O';
            gameOver = false;
            count=0;
        }
        
    
       
    
    }
});
