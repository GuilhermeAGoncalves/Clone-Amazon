let containerImgs = document.querySelector(".center__vitrini__galeria")
let imgs = document.querySelectorAll(".center__vitrini__galeria img")
let initialScroll = 0;
let targetWidth = (containerImgs.clientWidth * imgs.length) - containerImgs.clientWidth
let scrollSpeed = 5;
let vitriniGaleriaWrap = document.querySelector(".center__vitrini__galeria__wrap")

vitriniGaleriaWrap.style.width = (imgs.length * 100) + '%';

for(let i = 0; i < imgs.length; i++){
    imgs[i].style.width = (100/imgs.length) + '%'
}

let time = 5
let curSlider = 1


startCarrosel()

function startCarrosel(){

    setTimeout(function(){
        runCarrosel()
    },time * 1000)
}

function runCarrosel(){
    let interval = setInterval(function(){
        initialScroll -= scrollSpeed
        for(let i = 0; i < imgs.length;i++){
            imgs[i].style.left = initialScroll+'px'
        }
        if(initialScroll <= -containerImgs.clientWidth*curSlider){

            curSlider++
            if(curSlider === imgs.length){
                clearInterval(interval)

            }
            else{
                clearInterval(interval)
                startCarrosel()

            }

        }
    }, 0.5)
}