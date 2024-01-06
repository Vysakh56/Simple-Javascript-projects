let user=document.getElementById("user")
let computer=document.getElementById("computer")
let choice = ["rock","paper","scissor"]
let result = document.createElement("h1")
document.body.appendChild(result)


//Computer choice

function getComputerChoice(e){
    let computer_choice=choice[Math.floor(Math.random() * 3)]
    let user_choice=e.target.id
    user.innerHTML = user_choice
    computer.innerHTML = computer_choice
    switch(user_choice+computer_choice){
        case "rockscissor":
        case "scissorpaper":
        case "paperrock": 
                    result.innerHTML="You won. Well Done"
                    break;
        
        case "scissorrock":
        case "paperscissor":
        case "rockpaper": 
                result.innerHTML="You lost. Try Again"
                break;

        default :  result.innerHTML = "It's a draw"
    }
}


//Event Action

choice.forEach(choice => {
    let button=document.createElement('button')
    button.id=choice
    button.innerHTML=choice
    addEventListener("click",getComputerChoice)
    document.body.appendChild(button)
});