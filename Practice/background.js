/*
function Fish(){
    let fish = document.getElementById('fish1')
    let stop_
    let dx = 0
    let dr = 0
    let screen_width = window.innerWidth
    let screen_height = window.innerHeight
    let size

    function init(){
        var x = Math.floor(Math.random()*screen_width)
        size = Math.floor(Math.random()*100)
        fish.style.width = String(size)+"px"
        fish.style.left = String(x)+"px"
    }

    flag = true

    function move(){
        if(flag){
            init()
            flag = false
        }

        if(fish.style.top == String(screen_height - size)+"px"){
            init()
            fish.style.top = "0px"
            dx = 0
        }

        fish.style.top = String(dx+1)+"px";
        fish.style.transform = "rotate("+String(dr)+"deg)"
        dr += 0.5
        dx += 1
        stop_ = setTimeout(move, 5)
    }

    function stop(){
        clearTimeout(stop_)
        fish.style.top = '0px'
    }

    move()
}
*/

class Fish{
    constructor(id){
        this.fish = document.getElementById(id)
        this.animate = null
        this.dx = 0
        this.dr = 0
        this.screen_width = window.innerWidth
        this.screen_height = window.innerHeight
        this.flag = true
    }

    init(){
        this.size = Math.floor(Math.random()*100)
        this.x = Math.floor(Math.random()*this.screen_width)
        this.fish.style.width = String(this.size)+"px"
        this.fish.style.left = String(this.x)+"px"
    }

    move(){
        if(this.flag){
            this.init()
            this.flag = false
        }

        console.log(this.fish.style.top)

        if(this.fish.style.top == String(this.screen_height - this.size)+"px"){
            this.init()
            this.fish.style.top = "0px"
            this.dx = 0
        }

        this.fish.style.top = String(this.dx+1)+"px";
        this.fish.style.transform = "rotate("+String(this.dr)+"deg)"
        this.dr += 0.5
        this.dx += 1
        console.log(this.fish.style.top)
        this.animate = setTimeout(this.move, 5)
    }

    stop(){
        clearTimeout(this.animate)
        this.fish.style.top = '0px'
    }

}

function Fish2(tmp_){
    let fish = document.getElementById(tmp_)
    let stop_
    let dx = 0
    let dr = 0
    let screen_width = window.innerWidth
    let screen_height = window.innerHeight
    let size

    function init2(){
        size = Math.floor(Math.random()*100)
        var x = Math.floor(Math.random()*screen_width - size)
        fish.style.width = String(size)+"px"
        fish.style.left = String(x)+"px"
    }

    flag = true

    function move2(){
        console.log(screen_height)
        if(flag){
            init2()
            flag = false
        }

        if(fish.style.top == String(screen_height - size - 100)+"px"){
            init2()
            fish.style.top = "0px"
            dx = 0
        }

        fish.style.top = String(dx+1)+"px";
        fish.style.transform = "rotate("+String(dr)+"deg)"
        dr += 0.5
        dx += 1
        stop_ = setTimeout(move2, 5)
    }

    /*function stop2(){
        clearTimeout(stop_)
        fish.style.top = '0px'
    }*/

    move2()
}

let cnt = 1

function create(){
    let area = document.getElementById('items')
    let item = document.createElement('img')
    let st = "width: 100px; top: 0px; left: 0px; z-index: -1; position: absolute; "
    var t = "img/food/"
    let img_list = [t+'fish.png', t+'bread.png', t+'cookie.png', t+'chicken.png', t+'steak.png', t+'salmon.png', t+'melon.png']

    item.setAttribute('src', img_list[Math.floor(Math.random()*img_list.length)])
    item.setAttribute('id', 'item'+String(cnt))
    item.style.cssText = st
    area.appendChild(item)
    
    //let tmp = new Fish('fish'+String(cnt))
    Fish2('item'+String(cnt))
    cnt+=1
    
}