
let header = document.getElementById("header")
let turn = 'x';
let squares = [];
 function reload(){
    location.reload();
 }

function end(num1,num2,num3) {
    header.innerText = 'winner';
    console.log('done');
    document.getElementById('block'+num1).style.backgroundColor = 'black';
    document.getElementById('block'+num2).style.backgroundColor = 'black';
    document.getElementById('block'+num3).style.backgroundColor = 'black';
    setInterval(function(){header.innerText += '.';},1000);
    setTimeout(function(){location.reload()},4000);
}


function winner() {
    for (let i = 1; i<10;i++) {
        squares[i] = document.getElementById("block" + i ).innerText;

    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1,2,3] != "") {
        end(1,2,3);
    }
    else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4,5,6] != "") {
        end(4,5,6);
    }
    
    else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7,8,9] != "") {
        end(7,8,9);
    }
    else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1,4,7] != "") {
        end(1,4,7);
    }
    else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2,5,8] != "") {
        end(2,5,8);
    }
    else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3,6,9] != "") {
        end(3,6,9);
    }
    else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1,5,9] != "") {
        end(1,5,9);
    }
    else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[7,5,3] != "") {
        end(7,5,3);
    }
}

  


function game(id)
 {
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerText == "")
        {
            header.innerText = 'o';
            element.innerText += "x";
            turn = 'o';

        }
        else if(turn === 'o' && element.innerText == "")
            {
                header.innerText = 'x';
                element.innerText += "o";
                turn = 'x';
    
            }
    winner();
}