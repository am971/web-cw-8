let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

let turn = "O";

function press(x,y) {
    // Do stuff
    if ( turn == "O"){ turn =  "X" ; document.getElementById("tic").play() }
    else { turn ="O";document.getElementById("tic").play()}
    board [x][y] = turn;
    document.getElementById(`${x}${y}`).innerText = turn;
    if ( board [0][0] == turn && board [0][1] == turn && board [0][2]== turn  ) { 
             document.getElementById("status").innerText = ` ${turn} win`; }
    if ( board [0][0] == turn && board [1][1] == turn && board [2][2]== turn  ) { 
        document.getElementById("status").innerText = ` ${turn} win`; }
    if ( board [0][2] == turn && board [1][1] == turn && board [2][0]== turn  ) { 
        document.getElementById("status").innerText = ` ${turn} win`; }
    if ( board [1][0] == turn && board [1][1] == turn && board [1][2]== turn  ) { 
        document.getElementById("status").innerText = ` ${turn} win`; }
    if ( board [2][0] == turn && board [2][1] == turn && board [2][2]== turn  ) { 
         document.getElementById("status").innerText = ` ${turn} win`; } 
   if ( board [0][0] == turn && board [1][0] == turn && board [2][0]== turn  ) { 
        document.getElementById("status").innerText = ` ${turn} win`; }
    if ( board [0][1] == turn && board [1][1] == turn && board [2][1]== turn  ) { 
            document.getElementById("status").innerText = ` ${turn} win`; } 
    if ( board [0][2] == turn && board [1][2] == turn && board [2][2]== turn  ) { 
        document.getElementById("status").innerText = ` ${turn} win`; }           

    console.log(cellNO)
    
}

function resetb() {
    document.getElementById("status").innerText="";
    var tds = document.getElementsByTagName('td');
    for(var i = 0; i <= tds.length; i++) {
        tds[i].innerText = "" } 
    
            
    


  }
  