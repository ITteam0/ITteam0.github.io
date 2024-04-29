document.getElementById("detailsMH").open = true;
document.getElementById("tableMH").open = true;
document.getElementById("lessonsMH").open = true;
var lesson1 = document.getElementById('frame1MH');
var lesson2 = document.getElementById('frame2MH');
var lesson3 = document.getElementById('frame3MH');
var lesson4 = document.getElementById('frame4MH');
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;

function video1MH(){
  ++counter1;
  if(counter1 % 2 == 0) {
    lesson1.style.display = "none";
  }
  else {
    lesson1.style.display = "block";
  }
}

function video2MH(){
    ++counter2;
    if(counter2 % 2 == 0) {
      lesson2.style.display = "none";
    }
    else {
      lesson2.style.display = "block";
    }
}

function video3MH(){
    ++counter3;
    if(counter3 % 2 == 0) {
      lesson3.style.display = "none";
    }
    else {
      lesson3.style.display = "block";
    }
}

function video4MH(){
    ++counter4;
    if(counter4 % 2 == 0) {
      lesson4.style.display = "none";
    }
    else {
      lesson4.style.display = "block";
    }
}