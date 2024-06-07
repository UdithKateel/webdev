 let uscore=0
    let  cscore=0
function gamen(user){
    
   
compchoice=Math.floor(Math.random()*3)+1
if(user==compchoice){
    document.getElementById("result").innerHTML="draw"
}
else if(user==1&&compchoice==3){
    document.getElementById("result").innerHTML="you winn"
    uscore++
}
else if(user==2&&compchoice==1){
    document.getElementById("result").innerHTML="you winn"
    uscore++
}
else if(user==3&&compchoice==2){
    document.getElementById("result").innerHTML="you winn"
    uscore++
}
else{
    document.getElementById("result").innerHTML="you loose"
    cscore++
}
document.getElementById("urscore").innerHTML="your score"+uscore
document.getElementById("compscore").innerHTML="comp score"+cscore
}
