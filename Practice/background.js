let cnt = 1
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
        this.stop_ = null
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

        if(this.fish.style.top == String(this.screen_height - this.size)+"px"){
            this.init()
            this.fish.style.top = "0px"
            this.dx = 0
        }

        this.fish.style.top = String(this.dx+1)+"px";
        this.fish.style.transform = "rotate("+String(this.dr)+"deg)"
        this.dr += 0.5
        this.dx += 1
        this.stop_ = setTimeout(this.move, 5)
    }

    stop(){
        clearTimeout(this.stop_)
        this.fish.style.top = '0px'
    }
    
}

function create(){
    let area = document.getElementById('items')
    let item = document.createElement('img')
    var st = "width: 100px; top: 0px; left: 0px; z-index: -1; position: absolute; "
    
    item.setAttribute('src', 'fish.png')
    item.setAttribute('id', 'fish'+String(cnt))
    item.style.cssText = st

    area.appendChild(item)
    var fuck = new Fish('fish'+String(cnt))
    fuck.move()
    cnt+=1
}