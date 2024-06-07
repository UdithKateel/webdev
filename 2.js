let you=0
let comp=0
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#rel");
const u=document.querySelector("#uscore");
const cs=document.querySelector("#cscore");
const gencompchoice=()=>{
    c=["rock","paper","scissor"]
    ind=Math.floor(Math.random()*3)
    return c[ind];
};
const wasdraw=()=>{
    console.log("game was a draw ")
    msg.innerText="DRAW"
    msg.style.backgroundColor="black"
}
const showwinner=(userwin)=>{
    if(userwin){
        console.log("you win ")
        msg.innerText="YOU WINNNN!!!";
        msg.style.backgroundColor ="green";
        you++;
        u.innerText=you;
    }
    else{
        console.log("you loose ")
         msg.innerText="YOU loose :(";
            msg.style.backgroundColor  ="red";
            comp++
        cs.innerText=comp
    }

}
const playgame=(userchoice)=>{
    console.log("user choice is : ",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice is : ", compchoice);
    if (userchoice===compchoice) wasdraw();
    else{
        let userwin=true;
        if( userchoice==="rock"){
            userwin=compchoice==="paper"?false:true
        }
        else if(userchoice=="paper"){
            userwin=compchoice==="scissor"?false:true
        }
        else{
            userwin=compchoice==="rock"?false:true
        }
         showwinner(userwin)
    }
   
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        
        playgame(userchoice)
    });
});