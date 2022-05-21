//마우스 올리면 크기 커지는 함수
function tmp(instance){
    instance.addEventListener(
        "mouseenter",
        function (event) {
          event.target.style.width = "500px";
          event.target.style.height = "500px";
        },
        false
      );
      
    instance.addEventListener(
        "mouseleave",
        function (event) {
          event.target.style.width = "400px";
          event.target.style.height = "400px";
        },
        false
    );
}


//centre 첫 번째 div
p = []
for(var i = 0; i < 4; i++){
    p[i] = new Image()
    p[i].src = "img/img"+(i+1)+".png"
}

inx = 0

function img_change(k){
    inx = ((inx+k)+4) % 4
    document.getElementById('picture').setAttribute('src', p[inx].src)
    //console.log(p[inx])
}

let centre = document.getElementById("centre1");
tmp(centre)


//centre 두 번째 div
let centre2 = document.getElementById("centre2");
tmp(centre2)

//centre 세 번째 div
let centre3 = document.getElementById("centre3");
tmp(centre3)