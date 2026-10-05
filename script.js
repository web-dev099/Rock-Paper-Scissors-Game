let userscore = 0;
let computerscore = 0;

// Multiple variables
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const comscorepara = document.querySelector("#com-score");

//use array 
const genratecomputerchoice = () => {
    // rock ,paper ,scissor
    const options = ["rock" , "paper" , "scissors"];
    const randidx =Math.floor(Math.random() *3);
    return options[randidx];
}


const drawGame =() =>{
    msg.innerText = "Game Was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

//if else condation
const showwinner = (userwin, userchoices, computerchoices) => {
    if (userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! your ${userchoices} beats Your ${computerchoices}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerscore++;
        comscorepara.innerText = computerscore;
        msg.innerText = `You Lose.${computerchoices} beats Your ${userchoices}`;
        msg.style.backgroundColor = "red";

    }
}

// if else condation
const palygame = (userchoice) => {
    //genertae of computer choices 
    const computerchoices = genratecomputerchoice();
    if(userchoice === computerchoices){
        drawGame();
    } else {
        let userwin = true;
        if(userchoice === "rock"){
            userwin = computerchoices === "paper" ? false : true;
        }
        else if (userchoice === "paper"){
            userwin = computerchoices === "scissors" ? false :true;

        }
        else{
            userwin = computerchoices === "rock" ? false : true;
        }
        showwinner(userwin , userchoice , computerchoices);
    }
}


choices.forEach((choice) => {
console.log(choice);
choice.addEventListener("click" ,() => {
const userchoices = choice.getAttribute("id");
palygame(userchoices);
});
})