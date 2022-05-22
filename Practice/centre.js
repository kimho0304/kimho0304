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
var p = []
var C = 5
for(var i = 0; i < C; i++){
    p[i] = new Image()
    p[i].src = "img/looks/img"+(i+1)+".png"
}

inx = 0

function img_change(k){
    inx = ((inx+k)+C) % C
    document.getElementById('picture').setAttribute('src', p[inx].src)
    //console.log(p[inx])
}

let centre = document.getElementById("centre1");
tmp(centre)


//centre 두 번째 div
let centre2 = document.getElementById("centre2");
tmp(centre2)

//centre 세 번째 div
//let centre3 = document.getElementById("centre3");
//tmp(centre3)


function chg_img(event){
  let img_path = 'img/albums/'
  let img_type = '.jpg'
  let mp3_path = 'mp3/'
  let mp3_type = '.mp3'

  let mp3_album = {
    'graduation':'Stronger',
    'ye' : 'Ghost Town',
    'yeezus' : 'Black Skinhead',
    '808s&heartbreak' : 'Heartless',
    'donda' : 'Jail',
    'mbdtf' : 'All Of The Lights',
    'jesusisking' : 'Use This Gospel',
    'thelifeofpablo' : 'No More Parties in LA'
  }
  
  let mp3_img = document.getElementById('mp3_img') //앨범커버
  let mp3 = document.getElementById('mp3') //iframe
  let mp3_title = document.getElementById('mp3_title') //노래제목

  var fuckstring = "http://127.0.0.1:5500/"
  mp3_img.src = event.target.src.replace(fuckstring, '') //이미지주소
  console.log(event.target.src.replace(fuckstring, ''))
  console.log(mp3_img.src)

  var tmp_ = event.target.src.replace(img_path, '').replace(img_type, '').replace(fuckstring, '')
  console.log(tmp_)

  var mp3_ = (mp3_path + mp3_album[tmp_] + mp3_type)
  mp3.src = mp3_.replace(fuckstring, '')
  console.log(mp3.src, mp3_)
  mp3_title.innerHTML = mp3_album[tmp_]

  mp3_img.style.cssText = "width: 200px;  height: 200px;"
}


