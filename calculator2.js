let accer = document.querySelectorAll(".click").length

for(let i =0; i<accer; i++){

    
    document.querySelectorAll('.click')[i].addEventListener("click",function(now){
        // console.log(now)
        let fine =this.textContent
        let welMan = document.querySelector(".oneHead")
        //if statement starting now
        let audio8 = new Audio("sound/button-124476.mp3")
    audio8.play()
    
        if (welMan.style.color != 'blue') {
            
            welMan.style.color = 'blue'
            
        } else if (welMan.style.color != 'red') {
            
            welMan.style.color = 'red'
            
        } else {
            
            welMan.style.color = 'black'
            
        } //if else statement ends now
        




        if (welMan.style.fontSize != '80px') {
            welMan.style.fontSize ='80px'
        } else {
            welMan.style.fontSize ='30px'
            
        }


        if (welMan.style.textDecoration != 'underline') {
            welMan.style.textDecoration = 'underline'
        } else {
            welMan.style.textDecoration = ''
            
        }

        if (welMan.style.background!='yellow') {
            welMan.style.background = 'yellow'
        } else {
            welMan.style.background = ''
            
        }

    })
    
}


//light bulb on off by click

document.querySelector(".lap").addEventListener("click",function(){
  
    // let aniblub = this.textContent 
    let lightBulb1 =  document.querySelector('.bulb_off')
    // bulbAni(aniblub)

    if (lightBulb1.src.match('images/bulb-off.png')) {
      lightBulb1.src = 'images/bulb-on.png'
  } else {
        lightBulb1.src = 'images/bulb-off.png'
      
    }

    let audio8 = new Audio("sound/ding-idea-40142.mp3")
    audio8.play()
    
})

//key pressing function
document.addEventListener("keydown",function(sun){
    lightOnOff(sun.key)

    bulbAni(sun.key)

    let audio8 = new Audio("sound/button-124476.mp3")
    audio8.play()
})
// condition for key press
function lightOnOff(key){

    switch (key) {
        case "w":
            let lightBulb1 =  document.querySelector('.bulb_off')

            if (lightBulb1.src.match('images/bulb-off.png')) {
              lightBulb1.src = 'images/bulb-on.png'
          } else {
                lightBulb1.src = 'images/bulb-off.png'
              
            }
            break;
    
        default:
            break;
    }
}


function bulbAni(ccurrentKey) {

   let pluto = document.querySelector("."+ccurrentKey)

   console.log(pluto)

   pluto.classList.add('insta7')

   setTimeout(function(){

    pluto.classList.remove('insta7')

   },90)

}