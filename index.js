const characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
"q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
"}","]",",","|",":",";","<",">",".","?"];




const lengthInput = document.getElementById("password-length")



const generateBtn = document.getElementById("btn")



generateBtn.addEventListener("click", function(){
      
    let passwordOne = ""
    let passwordTwo = ""
    let passwordThree = ""
    let passwordFour = ""
    let passwordLength = 0
    passwordLength = lengthInput.value
   
    
    if(passwordLength === ""){
        alert("Please select a password length")
    }
    
    
    
    for(let i = 0; i < passwordLength; i++){
        const randomIndexOne = characters[Math.floor(Math.random()* characters.length)]
        const randomIndexTwo = characters[Math.floor(Math.random()* characters.length)]
        const randomIndexThree = characters[Math.floor(Math.random()* characters.length)]
        const randomIndexFour = characters[Math.floor(Math.random()* characters.length)]
        
        passwordOne += randomIndexOne
        passwordTwo += randomIndexTwo
        passwordThree += randomIndexThree
        passwordFour += randomIndexFour
        
        
      setPassword()
    }
    
    
    
function setPassword(){
    const password1= document.getElementById("password-1")
    password1.textContent = passwordOne
    const password2= document.getElementById("password-2")
    password2.textContent = passwordTwo
    const password3= document.getElementById("password-3")
    password3.textContent = passwordThree
    const password4= document.getElementById("password-4")
    password4.textContent = passwordFour
}

})



function copyToClipboard(id){
    const copyText = document.getElementById(id)
    navigator.clipboard.writeText(copyText.textContent)
    
    
    console.log(copyText.textContent)
    setTimeout(() => {alert("Copied the text: " + copyText.textContent)}, .1)
    
}

document.querySelectorAll(".password").forEach(passwordbtn => {
    passwordbtn.addEventListener("click", function(){
        copyToClipboard(this.id)
    })

})


const toggleBtn = document.getElementById("toggle")

toggleBtn.addEventListener("click", function(){
    lightMode()
    toglepic()
})

function lightMode(){
    const element = document.getElementById("container-light")
    const passwordElement = document.getElementById("password-length")
    const pEl = document.getElementById("pLight")
    passwordElement.classList.toggle("light-mode-password")
    element.classList.toggle("light-mode")
    pEl.classList.toggle("p-light-mode")
   
}

function toglepic(){
    if(toggleBtn.textContent === "☀️"){
       toggleBtn.textContent = "🌛"
    } else {
        toggleBtn.textContent = "☀️"
    }
}

