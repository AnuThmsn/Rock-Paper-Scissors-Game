let userscore=0;
let compscore=0;
const userScoreDisplay = document.querySelector(".user-score-value");
const compScoreDisplay = document.querySelector(".comp-score-value");
const winner=document.querySelector(".winner-name");
const reset=document.querySelector(".reset");
const msg = document.querySelector(".msg");
const choices=document.querySelectorAll(".choice");
const gencompchoice=() =>{
    let options=["rock","paper","scissors"];
    const n=Math.floor(Math.random()*3);
    return options[n];
}
const draw= () =>{
    console.log('draw');
    msg.textContent = "It's a draw! Both chose the same option.";   
    msg.style.backgroundColor = "white";
    msg.style.color = "#091b3e";
}
const showwinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userscore++;
        console.log('userwins');
        msg.textContent = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }
    else{
        compscore++;
        console.log('computer wins'); 
        msg.textContent = `Computer wins! ${compChoice} beats ${userChoice} `;  
        msg.style.backgroundColor = "red";  
        msg.style.color = "white";
    }
    userScoreDisplay.innerText = userscore;
    compScoreDisplay.innerText = compscore;
    console.log("User Score Element:", userScoreDisplay);
    console.log("Comp Score Element:", compScoreDisplay);
    if(userscore > compscore){
        winner.textContent = "You";
    }
    else if(compscore > userscore){
        winner.textContent = "Computer";
    }
    else{
        winner.textContent = "N/A";
    }


}
const playGame=(userChoice) =>{
    console.log('user choice:',userChoice);
    let compchoice=gencompchoice();
    console.log("computer choice:",compchoice);
    if(userChoice== compchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            compchoice === "paper"?userwin=false: userwin=true;
        }
        else if(userChoice==="paper"){
            compchoice==="scissors"?userwin=false:userwin=true;
        }
        else{
            compchoice==="rock"?userwin=false:userwin=true;
        }
        showwinner(userwin,userChoice,compchoice);
    }

    
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const choiceid=choice.getAttribute("id")
        console.log("choice was clicked",choiceid);
        let userChoice=choiceid;
        playGame(userChoice);
    })
})

reset.addEventListener('click',() =>{
    userscore = 0;
    compscore = 0;
    userScoreDisplay.innerText = userscore;
    compScoreDisplay.innerText = compscore;
    winner.textContent = "N/A";
    alert("Game has been reset! Press OK to continue.");
})
