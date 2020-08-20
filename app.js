
let items = [{
  name: "rock",
  color: "grey",
  img: "rock.png"
},
{
  name: "paper",
  color: "white",
  img: "paper.jpg"
},
{
  name: "scissor",
  color: "blue",
  img: "scissor.jpg"
}
]

let playerScore = 0
let computerScore = 0
let tie = 0



function drawButtons(){
  let template = ""
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    template += `<button type="button" class="btn btn-primary" onclick="play('${item.name}')" btn-lg btn-block">${item.name}</button>
    ` 
  }
  document.getElementById("buttons").innerHTML = template 
}


function play(playerChoice){
  let elem = document.getElementById("result")
  let result = ""
  let computerChoice = randomItem()
  let comp = computerChoice.name
  drawChoice(playerChoice, comp)
  
  if (playerChoice === comp){
    result = "Tie"
    tie++
    
    
  } else if (playerChoice == "paper" && comp == "scissor" || playerChoice == "scissor" && comp == "rock" || playerChoice == "rock" && comp == "paper" || playerChoice == "scissor" && comp == "rock"){
    result = "Computer Wins"
    computerScore++
    
    
  } else if (playerChoice == "scissor" && comp == "paper" || playerChoice == "rock" && comp == "sicssor" || playerChoice == "paper" && comp == "rock" || playerChoice == "rock" && comp == "scissor"){
    result = "Player Wins"
    playerScore++
    
  }
  elem.innerHTML= `<h1>${result}</h1> <br> <h3>Player Score:${playerScore}</h3> <h3>Computer Score:${computerScore}</h3> <h3>Ties: ${tie}</h3>`
  
}

function randomItem(){
  let index = Math.floor(Math.random() * (items.length - 0.01))
  let item = items[index]
  return item
}

function drawChoice(name, compName){
  let picElem = document.getElementById("player-board")
  let item = items.find(p => p.name == name)
  let compItem = items.find(c => c.name == compName)
  

  picElem.innerHTML=`<img class="picture-size" src="${item.img}" alt=""><img class="picture-size" src="${compItem.img}" alt="">`

  
}




drawButtons()