var photos = ["img/sultan.png", "img/ranasorkar.jpg", "img/amanul.png"];



var count=0;
function next(n) {
  if(n==1){
    var imgTag = document.getElementById('first')
  }
  if(n==2){
    var imgTag = document.getElementById('second')
  }

  if(n==3){
    var imgTag = document.getElementById('third')
  }
  if(n==4){
    var imgTag = document.getElementById('four')
  }
  if(n==5){
    var imgTag = document.getElementById('five')
  }
  if(n==6){
    var imgTag = document.getElementById('six')
  }
  if(n==7){
    var imgTag = document.getElementById('seven')
  }
  if(n==8){
    var imgTag = document.getElementById('eight')
  }
   
  count++;

  if(count >= photos.length){
      count=0;
      imgTag.src = photos[count];
  }else{
  imgTag.src= photos[count];
  }
}


function prev(n) {
    if(n==1){
        var imgTag = document.getElementById('first')
      }
      if(n==2){
        var imgTag = document.getElementById('second')
      }
      if(n==3){
        var imgTag = document.getElementById('third')
      }
      if(n==4){
        var imgTag = document.getElementById('four')
      }
      if(n==5){
        var imgTag = document.getElementById('five')
      }
      if(n==6){
        var imgTag = document.getElementById('six')
      }
      if(n==7){
        var imgTag = document.getElementById('seven')
      }
      if(n==8){
        var imgTag = document.getElementById('eight')
      }
    count--;

    if(count < 0 ) {
        count = photos.length - 1;
        imgTag.src = photos[count];
    }else{
    imgTag.src= photos[count];
    }
}
