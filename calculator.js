let playMusic1 = document.querySelectorAll(".drum").length

for(let i=0; i<playMusic1; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(ef){
        console.log(ef)
       
        let playMusic2 = this.textContent 

        addAnimation(playMusic2)

        switch (playMusic2) {
            case "a":
                
                let audio1 = new Audio("sound/tom-1.mp3")
                audio1.play()
                break;

                case "b":
                let audio2 = new Audio("sound/tom-2.mp3")
                audio2.play()
                
                break;
                case "c":
                    let audio3 = new Audio("sound/tom-3.mp3")
                    audio3.play()
                    
                break;

            case "d":
                let audio4 = new Audio("sound/tom-4.mp3")
                audio4.play()
                
                break;

            case "e":
                let audio5 = new Audio("sound/snare.mp3")
                audio5.play()
                
                break;

            case "f":
                let audio6 = new Audio("sound/kick-bass.mp3")
                audio6.play()
                
                break;

            case "g":
                let audio7 = new Audio("sound/crash.mp3")
                audio7.play()
                
                break;
        
            default:
                break;
        }
    })
}


document.addEventListener("keydown",function(hhs){
        console.log(hhs)
        allMusic(hhs.key)
        addAnimation(hhs.key)
})

function allMusic(key) {
    switch (key) {
        case "a":
            
            let audio1 = new Audio("sound/tom-1.mp3")
            audio1.play()
            break;

            case "b":
            let audio2 = new Audio("sound/tom-2.mp3")
            audio2.play()
            
            break;
            case "c":
                let audio3 = new Audio("sound/tom-3.mp3")
                audio3.play()
                
            break;

        case "d":
            let audio4 = new Audio("sound/tom-4.mp3")
            audio4.play()
            
            break;

        case "e":
            let audio5 = new Audio("sound/snare.mp3")
            audio5.play()
            
            break;

        case "f":
            let audio6 = new Audio("sound/kick-bass.mp3")
            audio6.play()
            
            break;

        case "g":
            let audio7 = new Audio("sound/crash.mp3")
            audio7.play()
            
            break;
    
        default:
            console.log()
            break;
    }
}


function addAnimation(currentkey) {

    let animaAdd = document.querySelector("."+ currentkey)
    
 animaAdd.classList.add('pressed')

setTimeout(function(){

    animaAdd.classList.remove('pressed')
},55)

}